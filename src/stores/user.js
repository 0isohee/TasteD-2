import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userList",
  state: () => ({
    users: [
      { id: "ssafy", 
        password: "ssafy", 
        name: "이소희", 
        email: "s@s.com" 
      }
    ],
    currentUser: null,
  }),
  actions: {
    addUser(newUser) {
      this.users.push(newUser);
    },
    setCurrentUser(user) {
      this.currentUser = user;
    },
    updateCurrentUserField(field, value) {
      if (this.currentUser && field in this.currentUser) {
        this.currentUser[field] = value;
      }
    },
    deleteUser() {
      this.currentUser = null;
    }
  },
});
