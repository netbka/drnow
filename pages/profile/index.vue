<template>
  <div>
    <ClientOnly>
      <q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Title</q-item-label>
            <q-item-label caption> Subhead </q-item-label>
          </q-item-section>
        </q-item>

        <q-separator />

        <q-card-section horizontal>
          <q-card-section>
            <q-tabs v-model="tab" vertical class="text-light-blue">
              <q-tab name="acc" icon="mail" label="Account" />
              <q-tab name="prof" icon="alarm" label="Profile" />
              <q-tab name="pref" icon="movie" label="Preferences" />
            </q-tabs>
          </q-card-section>

          <q-separator vertical />

          <q-card-section class="col-10">
            <q-tab-panels v-model="tab" swipeable vertical>
              <q-tab-panel name="acc">
                <div class="text-h4 q-mb-md"><Account></Account></div>
              </q-tab-panel>
              <q-tab-panel name="prof">
                <div class="text-h4 q-mb-md">Profile</div>
              </q-tab-panel>
              <q-tab-panel name="pref">
                <div class="text-h4 q-mb-md">Preferences</div>
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>
        </q-card-section>
      </q-card>
    </ClientOnly>
  </div>
</template>

<script setup>
definePageMeta({ auth: true });
const tab = ref("acc");
// const { data } = await useFetch("/api/user", {
//   method: "get",
// });
</script>

<style></style>
