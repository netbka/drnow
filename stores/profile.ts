import { defineStore } from "pinia";
import { type Profile } from "~/types/profile";
interface ProfileStoreState {
  profiles: Profile[];
  currentProfile: Profile;
}

export const useProfileStore = defineStore("ProfileStore", {
  state: (): ProfileStoreState => ({
    profiles: [],
    currentProfile: { id: 0, lastName: "", firstName: "", user_id: "", biography: "", birthDay: "", city: "", specialityId: null, speciality: {}, profilesMedicalSubSpecialities: [] },
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
      this.currentProfile.biography = this.currentProfile.biography ? this.currentProfile.biography : "";
    },
  },
});
