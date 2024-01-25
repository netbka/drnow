<template>
  <div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="store.currentUser.fname"
        label="Your name *"
        hint="Name and surname"
      />
      <q-input
        filled
        v-model="store.currentUser.lname"
        label="Your name *"
        hint="Name and surname"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user";

let fname = ref("");
let lname = ref("");

//const { fetchCurrentUser } = storeToRefs(useUserStore());
const store = useUserStore();
// const { data } = await useFetch("/api/user", {
//   method: "get",
// });
onMounted(async () => {
  // store.fetchCurrentUser();
  //  console.log(store.currentUser);
  //console.log(fetchCurrentUser);
});

// watch(
//   () => data.value,
//   (val) => {
//     store.currentUser = val;
//     console.log(store.currentUser);
//   }
// );

// watch(data,  (new) => {
//   fname = new.fname;
//   lname = new.lname;
// })

const onSubmit = async () => {
  console.log("Submit");
  await useFetch("/api/user", {
    method: "post",
    body: store.currentUser,
    lazy: true,
    server: false,
  });
};

const onReset = () => {
  console.log("Reset");
};
</script>
