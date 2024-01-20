<template>
  <header
    class="shadow-lg absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64"
  >
    <nav class="p-4 flex justify-between">
      <Logo></Logo>
      <ul class="flex gap-4">
        <li><NuxtLink to="/profile/" class="btn">Profile</NuxtLink></li>
        <li><NuxtLink to="/login" class="btn">Login</NuxtLink></li>
        <li><NuxtLink to="/auth/register" class="btn btn-rounded">Register</NuxtLink></li>
        <UserCard />
      </ul>
    </nav>
  </header>
</template>
