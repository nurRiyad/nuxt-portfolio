<template>
  <div class="flex flex-col justify-center items-center h-screen bg-slate-300">
    <div class="max-w-sm mx-auto p-8 bg-white rounded-xl shadow-md space-y-3">
      <img
        class="h-24 mx-auto rounded-full ring-4 ring-blue-500"
        src="@/assets/img/profilepic.webp"
        alt="My profile picture"
      />
      <div class="space-y-2">
        <div>
          <p class="text-lg text-black font-semibold">Md. Al Asad Nur Riyad</p>
          <p class="text-gray-600 text-sm">Software Engineer @AppsCode</p>
        </div>
        <div class="flex space-x-2 justify-center">
          <a href="https://github.com/nurRiyad">
            <IconsGithub :width="25" />
          </a>
          <a href="https://www.linkedin.com/in/nur-riyad">
            <IconsLinkedin :width="25" />
          </a>
          <a href="https://twitter.com/qdnvubp">
            <IconsTwitter :width="25" />
          </a>
          <a href="https://stackoverflow.com/users/16781395/nur-riyad">
            <IconsStackoverflow :width="25" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
