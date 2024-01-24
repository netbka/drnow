<template>
  <div>
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input
        filled
        v-model="fname"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
      />
      <q-input
        filled
        v-model="lname"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
  </div>
</template>

<script setup>
let fname = ref("");
let lname = ref("");
const accept = ref(false);

const { data } = await useFetch("/api/user", {
  method: "get",
});

watch(
  () => data.value,
  (val) => {
    fname.value = val.fname;
    lname.value = val.lname;
  }
);

// watch(data,  (new) => {
//   fname = new.fname;
//   lname = new.lname;
// })

const onSubmit = async () => {
  await useFetch("/api/user", {
    method: "post",
    body: {
      fname: fname,
      lname: lname,
    },
  });
};

const onReset = () => {
  console.log("Reset");
};
</script>
