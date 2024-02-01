<template>
  <div>
    <label
      class="q-field row no-wrap items-start q-field--filled q-input q-field--float q-field--labeled"
      for="f_b400fd25-d682-49c0-8155-83c535a60658"
    >
      <div class="q-field__inner relative-position col self-stretch">
        <div class="q-field__control relative-position row no-wrap" tabindex="-1">
          <div
            class="q-field__control-container col relative-position row no-wrap q-anchor--skip"
          >
            <flat-pickr
              v-model="date"
              :config="config"
              class="q-field__native q-placeholder"
            />

            <div class="q-field__label no-pointer-events absolute ellipsis">
              Medical career start
            </div>
          </div>
        </div>
      </div>
    </label>
  </div>
</template>
<script setup>
import flatPickr from "vue-flatpickr-component";
import monthSelectPlugin from "flatpickr/dist/plugins/monthSelect/index.js";
import "flatpickr/dist/flatpickr.css";
import "flatpickr/dist/plugins/monthSelect/style.css";
//https://github.com/ankurk91/vue-flatpickr-component
const date = ref(null);
const config = ref({
  plugins: [
    new monthSelectPlugin({
      shorthand: true, //defaults to false
      dateFormat: "m.y", //defaults to "F Y"
      altFormat: "F Y", //defaults to "F Y"
    }),
  ],
});
</script>
