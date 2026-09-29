export interface User {
  username: string
  name: string
  avatar: string
}

export interface PullRequest {
  repo: string
  title: string
  url: string
  created_at: string
  state: 'merged' | 'draft' | 'open' | 'closed'
  number: number
  type: 'User' | 'Organization'
  stars: number
}

export interface Commit {
  repo: string
  title: string
  url: string
  created_at: string
  sha: string
  type: 'User' | 'Organization'
  stars: number
}

export type Activity = (PullRequest & { activityType: 'pull_request' }) | (Commit & { activityType: 'commit' })

export interface Contributions {
  user: User
  prs: PullRequest[]
  activities: Activity[]
}
