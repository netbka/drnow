import { defineStore } from "pinia";
import { type Profile } from "~/types/profile";
interface ProfileStoreState {
  profiles: Profile[];
  currentProfile: Profile;
}

export const useProfileStore = defineStore("ProfileStore", {
  state: (): ProfileStoreState => ({
    profiles: [],
    currentProfile: { id: 0, lastName: "", firstName: "", userEmail: "", biography: "" },
  }),

  actions: {
    async fetchProfiles() {
      const profiles = await this.$prisma.profile.findMany();
      this.profiles = profiles;
    },
    async fetchCurrentUser() {
      const { data } = await useFetch("/api/profile", {
        method: "get",
      });

      if (data.value !== null) this.currentProfile = Object.assign({}, data.value);
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
