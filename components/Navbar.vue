<template>
  <!-- <nav class="bg-background/80 fixed left-0 top-0 z-20 w-full backdrop-blur-sm shadow">
    
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
      </div>
    </div>
  </nav> -->
  <q-header reveal elevated class="bg-primary text-accent">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img :src="logo" />
        </q-avatar>
        DRNOW
      </q-toolbar-title>

      <NavBarMenu></NavBarMenu>
      <q-separator dark vertical />
      <q-btn stretch flat label="Link" />
      <q-separator dark vertical />
      <q-btn stretch flat label="Link" />
      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>
  </q-header>
</template>

<script lang="ts" setup>
import logo from "/logosmall.png";
// const user = useSupabaseUser();

// const name = computed(() => user.value?.user_metadata.full_name);
// const profile = computed(() => user.value?.user_metadata.avatar_url);
</script>
