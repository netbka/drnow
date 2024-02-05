<template>
  <div>
    <div class="row q-col-gutter-sm">
      <div class="col-6">
        <q-select
          v-model="store.currentItem"
          label="Medical Speciality"
          :options="store.items"
          lazy-rules
          clearable
          use-input
          hide-selected
          fill-input
          input-debounce="500"
          options-selected-class="text-deep-orange"
          outlined
          option-value="id"
          :loading="store.loading"
          option-label="name"
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.name }} </q-item-label>
                <q-item-label caption> {{ scope.opt.description }} </q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="col-6">
        <q-select
          v-model="store.currentSubItem"
          label="Medical Sub Speciality"
          :options="store.currentItem.subspecs"
          lazy-rules
          clearable
          use-input
          fill-input
          input-debounce="500"
          options-selected-class="text-deep-orange"
          outlined
          option-value="id"
          :loading="store.loading"
          option-label="name"
          use-chips
          multiple
        >
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.name }} </q-item-label>
                <q-item-label caption> {{ scope.opt.description }} </q-item-label>
              </q-item-section>
            </q-item>
          </template>
          <template v-slot:selected-item="scope">
            <q-chip
              removable
              dense
              @remove="scope.removeAtIndex(scope.index)"
              :tabindex="scope.tabindex"
              color="blue"
              text-color="grey-10"
              class="q-ma-none"
            >
              {{ scope.opt.name }}
            </q-chip>
          </template>
        </q-select>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMedSpecStore } from "~/stores/medspec";
const store = useMedSpecStore();
//await store.fetchAll();
</script>

<style></style>
