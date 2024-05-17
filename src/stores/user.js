import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userList",
  state: () => ({
    users: [],
  }),
  actions: {
    addUser(newUser) {
      this.users.push(newUser);
    },
  },
});
