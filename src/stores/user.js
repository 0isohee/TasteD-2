import { defineStore } from "pinia";
import { loginUser, logoutUser, deleteUser, getMember, joinUser } from "@/api/userApi.js";

export const useUserStore = defineStore({
  id: "userList",
  state: () => ({
    users: [],
    currentUser: null,
  }),
  actions: {
    async login(id, password) {
      try {
        const response = await loginUser({ id, password });
        this.currentUser = response.data;
        console.log(this.currentUser);
      } catch (error) {
        console.error("로그인 실패:", error);
      }
    },
    async logout(id, password) {
      try {
        const response = await logoutUser({ id, password });
        this.currentUser = response.data;
      } catch (error) {
        console.error("로그아웃 실패:", error);
      }
    },
    async getMemberList() {
      try {
        const response = await getMember();
        console.log(response.data);
        this.users = response.data;
      } catch (error) {
        console.error("데이터 가져오기 실패:", error);
      }
    },
    async addUser(newUser) {
      try {
        const response = await joinUser(newUser);
        this.currentUser = response.data;
      } catch (error) {
        console.error("로그인 실패:", error);
      }
    },
    async quitUser(id, password) {
      try {
        const response = await deleteUser(id, password);
        this.currentUser = response.data;
      } catch (error) {
        console.error("탈퇴 실패:", error);
      }
    },
    updateCurrentUserField(field, value) {
      if (this.currentUser && field in this.currentUser) {
        this.currentUser[field] = value;
      }
    },
  },
});
