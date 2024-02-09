import { defineStore } from "pinia";
import { type MedicalSpeciality, type MedicalSubSpeciality } from "~/types/profile";
interface MedicalSpecialityStoreState {
  items: MedicalSpeciality[];
  currentItem: MedicalSpeciality;
  currentSubItem: MedicalSubSpeciality[];
}

export const useMedSpecStore = defineStore("MedicalSpecialityStore", {
  state: (): MedicalSpecialityStoreState => ({
    loading: false,
    items: [],
    currentItem: {
      id: 0,
      name: "",
      description: "",
      subspecs: [],
    },
    currentSubItem: [],
    defaultItem: {
      id: 0,
      name: "",
      description: "",
      subspecs: [],
    },
    //  {
    //   id: 0,
    //   name: "",
    //   description: "",
    // },
  }),

  actions: {
    resetCurrentItem() {
      this.currentItem = Object.assign({}, this.defaultItem);
    },
    async fetchAll() {
      const { data } = await useFetch("/api/medspec", {
        method: "get",
      });

      if (data.value.length > 0) this.items = data.value;
    },
  },
});
