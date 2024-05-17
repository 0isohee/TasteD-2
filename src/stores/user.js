import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userList",
  state: () => ({
    users: [{ id: "ssafy", password: "ssafy", name: "이소희", email: "s@s.com" }],
  }),
  actions: {
    addUser(newUser) {
      this.users.push(newUser);
    },
  },
});
