import type { Activity, Contributions, PullRequest, User } from '@@/types/index'

export default defineCachedEventHandler(async (event) => {
  try {
    const config = useRuntimeConfig()

    // Return empty data if GitHub token is not configured
    if (!config.githubToken) {
      console.warn('GitHub token not configured. Skipping contributions fetch.')
      return {
        user: {
          name: '',
          username: '',
          avatar: '',
        },
        prs: [],
        activities: [],
      } as Contributions
    }

    const octokit = useOctokit()
    // Fetch user from token
    const userResponse = await octokit.request('GET /user')
    const user: User = {
      name: userResponse.data.name ?? userResponse.data.login,
      username: userResponse.data.login,
      avatar: userResponse.data.avatar_url,
    }
    // Fetch pull requests from user
    const { data } = await octokit.request('GET /search/issues', {
      // To exclude the pull requests to your repositories
      // q: `type:pr+author:"${user.username}"+-user:"${user.username}"`,
      // To include the pull requests to your repositories
      q: `type:pr+author:"${user.username}"`,
      per_page: 50,
      page: 1,
    })

    // Filter out closed PRs that are not merged
    const filteredPrs = data.items.filter(pr => !(pr.state === 'closed' && !pr.pull_request?.merged_at))

    const prs: PullRequest[] = []
    const activities: Activity[] = []
    // For each PR, fetch the repository details
    for (const pr of filteredPrs) {
      const [owner, name] = pr.repository_url.split('/').slice(-2)
      const repo = await fetchRepo(event, owner!, name!)

      prs.push({
        repo: `${owner}/${name}`,
        title: pr.title,
        url: pr.html_url,
        created_at: pr.created_at,
        state: pr.pull_request?.merged_at ? 'merged' : pr.draft ? 'draft' : pr.state as 'open' | 'closed',
        number: pr.number,
        type: repo.owner.type, // Add type information (User or Organization)
        stars: repo.stargazers_count,
      })

      activities.push({
        activityType: 'pull_request',
        repo: `${owner}/${name}`,
        title: pr.title,
        url: pr.html_url,
        created_at: pr.created_at,
        state: pr.pull_request?.merged_at ? 'merged' : pr.draft ? 'draft' : pr.state as 'open' | 'closed',
        number: pr.number,
        type: repo.owner.type,
        stars: repo.stargazers_count,
      })
    }

    // Include direct commits, which do not appear in the pull request search.
    const { data: commitEvents } = await octokit.request('GET /users/{username}/events', {
      username: user.username,
      per_page: 100,
    })
    const pushEvents = commitEvents.flatMap((event) => {
      if (event.type !== 'PushEvent' || !event.created_at)
        return []

      const createdAt = event.created_at
      return (event.payload as { commits?: Array<{ message: string, sha: string }> }).commits?.map(commit => ({
        repo: event.repo.name,
        title: commit.message.split('\n')[0] ?? 'Commit',
        url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
        created_at: createdAt,
        sha: commit.sha,
      })) ?? []
    }).slice(0, 50)

    const commits = await Promise.all(pushEvents.map(async (commit) => {
      const [owner, name] = commit.repo.split('/')
      if (!owner || !name)
        return null
      const repo = await fetchRepo(event, owner, name)
      return {
        activityType: 'commit' as const,
        ...commit,
        type: repo.owner.type,
        stars: repo.stargazers_count,
      }
    }))

    activities.push(...commits.filter((commit): commit is NonNullable<typeof commit> => commit !== null))
    activities.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

    return {
      user,
      prs,
      activities,
    } as Contributions
  }
  catch (error) {
    console.error('Error fetching contributions:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch contributions',
      message: error instanceof Error ? error.message : 'Unknown error occurred',
    })
  }
}, {
  group: 'api',
  name: 'contributions',
  getKey: () => 'all',
  swr: true,
  maxAge: 60 * 5, // 5 minutes
})
