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
    //  {
    //   id: 0,
    //   name: "",
    //   description: "",
    // },
  }),

  actions: {
    async fetchAll() {
      const { data } = await useFetch("/api/medspec", {
        method: "get",
      });

      if (data.value.length > 0) this.items = data.value;
    },
    // async createUser(newUser: User) {
    //   // Create a new user using Prisma Client
    //   const createdUser = await this.$prisma.user.create({
    //     data: newUser,
    //   });
    //   // Update local state or perform other actions as needed
    // },
  },
});
