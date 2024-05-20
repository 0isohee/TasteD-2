import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore({
  id: "userList",
  state: () => ({
    users: [],
    currentUser: null,
  }),
  actions: {
    async getBoardList(pageNo) {
      try {
        const response = await axios.get(`http://localhost:8080/manage/member/list`);
        this.users = response.data;
      } catch (error) {
        console.error("사용자 목록을 가져오는 데 실패했습니다:", error);
      }
    },
    async login(id, password) {
      try {
        const response = await axios.post(`/api/User/signin`, { id, password });
        this.currentUser = response.data;
      } catch (error) {
        console.error("로그인 실패:", error);
      }
    },
    ntUser(user) {
      this.currentUser = user;
    },
    updateCurrentUserField(field, value) {
      if (this.currentUser && field in this.currentUser) {
        this.currentUser[field] = value;
      }
    },
    deleteUser() {
      this.currentUser = null;
    },
  },
});
