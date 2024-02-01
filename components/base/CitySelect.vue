<template>
  <div>
    <q-select
      v-model="store.itemArray"
      label="Select city"
      :options="cities"
      lazy-rules
      clearable
      options-selected-class="text-deep-orange"
      outlined
      option-value="_id"
      @update:model-value="valueChange"
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            <q-item-label
              >{{ scope.opt.city_name_en }} / {{ scope.opt.city_name_he }}</q-item-label
            >
            <q-item-label caption> {{ scope.opt.region_name }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-select>
  </div>
</template>

<script lang="ts" setup>
import { useCityStore } from "~/stores/city";
const model = ref(null);
const store = useCityStore();
var options = ref([]);
var opt = ref([]);
//await store.getCities();

const valueChange = (val) => {
  console.log(val);
};

var query = ref("");
const uri =
  "https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e&limit=50";
//datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e&limit=10&q=" +
//query;
const { data: cities } = await useLazyFetch(uri, {
  method: "get",
  server: false,
  transform: (_cities) => _cities.result.records,
});

// opt = data;
</script>

<style></style>
