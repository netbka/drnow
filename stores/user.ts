import { defineStore } from "pinia";
import { type User } from "~/types/user";
interface UserStoreState {
  users: User[];
  currentUser: User;
}

export const useUserStore = defineStore("UserStore", {
  state: (): UserStoreState => ({
    users: [],
    currentUser: { id: 0, lname: "", fname: "", userEmail: "" },
  }),

  actions: {
    async fetchUsers() {
      const users = await this.$prisma.user.findMany();
      this.users = users;
    },
    async fetchCurrentUser() {
      const { data } = await useFetch("/api/user", {
        method: "get",
      });

      if (data.value !== null) this.currentUser = Object.assign({}, data.value);
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
