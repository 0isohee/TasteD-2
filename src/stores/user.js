import { defineStore } from "pinia";
import {
  loginUser,
  logoutUser,
  deleteUser,
  getMember,
  joinUser,
  findUserId,
  findUserPwd,
  // 본인이 수정
  updateUser,
  // 관리자가 수정
  editAdminUser,
} from "@/api/userApi.js";

export const useUserStore = defineStore({
  id: "userList",
  state: () => ({
    users: [],
    editUser : null,
    currentUser: null,
    foundUser: null,
  }),
  actions: {
    async login(id, password) {
      try {
        const response = await loginUser({ id, password });
        this.currentUser = response.data;
        alert("로그인 성공!")
        return 100;
      } catch (error) {
        alert("아이디나 비밀번호를 확인해주세요!")
        console.error("로그인 실패:", error);
      }
    },
    async logout() {
      try {
        await logoutUser();
        this.currentUser = null;
      } catch (error) {
        console.error("로그아웃 실패:", error);
      }
    },
    async getMemberList() {
      try {
        const response = await getMember();
        //관리자 빼고 가져오기
        this.users = response.data.filter(user => user.id !== 'admin');
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
    async quitUser(id) {
      try {
        const response = await deleteUser(id);
        console.dir(response.data);
        this.currentUser = null;
      } catch (error) {
        console.error("탈퇴 실패:", error);
      }
    },
    async findId(name, email) {
      try {
        const response = await findUserId({ name, email });
        this.foundUser = response.data;
      } catch (error) {
        console.error("아이디 찾기 실패:", error);
      }
    },
    async findPwd(id, name, email) {
      try {
        const response = await findUserPwd({ id, name, email });
        this.foundUser = response.data;
      } catch (error) {
        console.error("비밀번호 찾기 실패:", error);
      }
    },
    async editUser(newUser) {
      try {
        await updateUser(newUser);
        alert("회원 정보가 수정되었습니다.");
      } catch (error) {
        console.error("회원 수정 실패:", error);
      }
    },
    async adminEditUser(newUser) {
      try {
        await editAdminUser(newUser);
        alert("관리자가 회원 정보를 성공적으로 수정했습니다.");
      } catch (error) {
        console.error("회원 수정 실패:", error);
      }
    },
    updateCurrentUserField(field, value) {
      if (this.currentUser && field in this.currentUser) {
        this.currentUser[field] = value;
      }
    },
  },
});
