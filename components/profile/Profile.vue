<template>
  <div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="store.currentProfile.firstName"
        label="Your name *"
        :loading="loading"
        :rules="[(val) => !!val || 'Field is required']"
      />
      <q-input filled v-model="store.currentProfile.lastName" label="Your last name *" />
      <div class="text-bold">Career summary</div>
      <BaseTextareatool
        v-model="store.currentProfile.biography"
        @update="updateBio"
      ></BaseTextareatool>
      <BaseCalendar></BaseCalendar>
      <BaseCitySelect
        @update="updateCity"
        v-model="store.currentProfile.city"
      ></BaseCitySelect>
      <BaseMedSpec
        :selectedSpecId="store.currentProfile.specialityId"
        :selectedSubSpecIds="store.currentProfile.profilesMedicalSubSpecialities"
      ></BaseMedSpec>
      <div>
        <q-btn label="Submit" type="submit" color="secondary" />
        <q-btn label="Reset" outline type="reset" color="primary" class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useProfileStore } from "~/stores/profile";
import { useQuasar } from "quasar";
const $q = useQuasar();
const store = useProfileStore();
import { useMedSpecStore } from "~/stores/medspec";
const storeMedSpec = useMedSpecStore();
await storeMedSpec.fetchAll();
const loading = ref(false);
onMounted(async () => {});

const updateBio = (val) => {
  store.currentProfile.biography = val;
};
const updateCity = (val) => {
  store.currentProfile.city = val ? val.city_name_en : "";
};

const updateBirthDay = (val) => {
  store.currentProfile.birthDay = val;
};

// store.currentProfile.biography
//@update:value="myContent = value"

let myContent = ref("Initial content");
const onSubmit = async () => {
  //console.log(storeMedSpec.currentItem);
  //console.log(storeMedSpec.currentSubItem);
  loading.value = true;
  store.currentProfile.specialityId = storeMedSpec.currentItem.id;
  store.currentProfile.subSpecAdd = storeMedSpec.currentSubItem;
  const { data, pending, error, refresh } = await useFetch("/api/profile", {
    method: "post",
    body: { ...store.currentProfile },
    // extra: { ...storeMedSpec.currentSubItem },
  });
  loading.value = false;
  $q.notify({
    type: "positive",
    message: "Data updated",
  });
};

const onReset = () => {
  console.log("Reset");
};
</script>
