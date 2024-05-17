import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userList",
  state: () => ({
    users: [{ id: "ssafy", password: "ssafy" }],
  }),
  actions: {
    addUser(newUser) {
      this.users.push(newUser);
    },
  },
});
