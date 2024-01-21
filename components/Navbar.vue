<template>
  <nav class="bg-background/80 fixed left-0 top-0 z-20 w-full backdrop-blur-sm shadow">
    <!---->
    <div class="container px-4">
      <div class="flex items-center justify-stretch gap-6">
        <div class="flex flex-1 justify-start">
          <Logo />
        </div>
        <nav class="p-4 flex justify-between">
          <ul class="flex gap-4">
            <li><NuxtLink to="/profile/" class="btn">Profile</NuxtLink></li>
            <li><NuxtLink to="/login" class="btn">Login</NuxtLink></li>
            <li>
              <NuxtLink to="/auth/register" class="btn btn-rounded">Register</NuxtLink>
            </li>
            <UserCard />
          </ul>
        </nav>
        <!-- <div class="hidden flex-1 items-center justify-center md:flex">
          <a href="/pricing" class="block px-3 py-2 text-lg">Pricing</a>
          <a href="/blog" class="block px-3 py-2 text-lg">Blog</a>
        </div>
        <div class="flex flex-1 items-center justify-end gap-3"><UserCard /></div> -->
      </div>
    </div>
  </nav>
  <!-- <header
    class="shadow-lg absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64"
  >
    <Logo></Logo>
    <nav class="p-4 flex justify-between">
      <ul class="flex gap-4">
        <li><NuxtLink to="/profile/" class="btn">Profile</NuxtLink></li>
        <li><NuxtLink to="/login" class="btn">Login</NuxtLink></li>
        <li><NuxtLink to="/auth/register" class="btn btn-rounded">Register</NuxtLink></li>
        <UserCard />
      </ul>
    </nav>
  </header> -->
</template>
