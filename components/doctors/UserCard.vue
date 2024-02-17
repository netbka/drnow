<template>
  <q-card flat bordered>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="avatarSrc" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ model.firstName }} {{ model.lastName }} </q-item-label>
        <q-item-label caption
          >{{ model.speciality.name }}
          <q-chip square dense>
            <q-avatar icon="place" color="" />
            {{ model.city }}
          </q-chip></q-item-label
        >
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section horizontal>
      <q-card-section class="col-8">
        <div class="text-subtitle1">Career summary</div>
        <span v-html="model.biography"></span>
      </q-card-section>

      <q-separator vertical />

      <q-card-section class="col-4">
        <div class="text-subtitle1">Specialities</div>
        <q-chip
          outline
          color="primary"
          text-color="white"
          icon="event"
          v-for="(item, index) in model.profilesMedicalSubSpecialities"
          :key="item.id"
        >
          {{ item.name }}
        </q-chip>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import { getProfile } from "~/composables/profileUpd";

const props = defineProps({
  modelValue: {
    type: Object,
  },
});
const { modelValue } = props;
const model = ref(modelValue);
//console.log(model.value.avatarPath);
let avatarSrc = ref("");
avatarSrc.value = await getProfile(model.value.avatarPath);
</script>

<style></style>
