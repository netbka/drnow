<template>
  <q-layout view="hHh lpR fFf">
    <Navbar />
    <q-page-container
      class="full-width row wrap justify-center items-start content-start container"
    >
      <div style="overflow: auto; min-width: 1280px; max-width: 1280px">
        <slot></slot>
      </div>
    </q-page-container>
    <Footer />
  </q-layout>
</template>
