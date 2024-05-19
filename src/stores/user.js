import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "userList",
  state: () => ({
    users: [
      { id: "ssafy", 
        password: "ssafy", 
        name: "이소희", 
        email: "s@s.com" 
      },
      { id: "ssafy1234", 
        password: "ssafy1234", 
        name: "이또잉", 
        email: "s1@s1.com" 
      },
      { id: "admin", 
        password: "admin", 
        name: "관리자", 
        email: "ssafy@ssafy.com" 
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
