<template>
  <section
    class="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center min-h-screen"
  >
    <div class="container mx-auto p-4">
      <div class="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
        <div>
          <h1 class="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            Dr Now. Connecting healthcare.
          </h1>
          <p class="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
            Find your Doctor and Book appointment now.
          </p>
          <a
            href="#"
            class="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold"
            >Book Appointment</a
          >
        </div>
      </div>
    </div>
    <div
      class="h-full absolute right-0 z-10 h-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64"
    >
      <img :src="background" alt="" class="h-full object-cover opacity-20" />
    </div>
  </section>
</template>

<script setup>
import background from "~/assets/images/mainpage_small.webp";
</script>

<style>
.bg-blue-teal-gradient {
  background: rgb(49, 130, 206);
  background: linear-gradient(
    90deg,
    rgba(49, 130, 206, 1) 0%,
    rgba(56, 178, 172, 1) 100%
  );
}
</style>
