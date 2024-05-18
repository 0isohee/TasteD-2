<template>
    <div>
        <div class="totalContainer">
            <h2 class="header-title">내정보 수정</h2>
            <table class="usermodify-table">
            <tbody>
                <tr>
                <th scope="row">이메일</th>
                <td>
                    <div v-if="!editMode.email">
                    <strong>{{ email }}</strong>
                    <v-btn @click="toggleEditMode('email')" class="ml-auto">변경</v-btn>
                    </div>
                    <div v-else>
                    <input type="text" v-model="editedFields.email" class="input-field">
                    <v-btn @click="updateField('email')" class="ml-auto">저장</v-btn>
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">이름</th>
                <td>
                    <div v-if="!editMode.name">
                    <strong>{{ name }}</strong>
                    <v-btn @click="toggleEditMode('name')" class="ml-auto">변경</v-btn>
                    </div>
                    <div v-else>
                    <input type="text" v-model="editedFields.name" class="input-field">
                    <v-btn @click="updateField('name')" class="ml-auto">저장</v-btn>
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">비밀번호</th>
                <td>
                    <div v-if="!editMode.password">
                    <strong>********</strong>
                    <v-btn @click="toggleEditMode('password')" class="ml-auto">변경</v-btn>
                    </div>
                    <div v-else>
                    <input type="password" v-model="editedFields.password" class="input-field">
                    <v-btn @click="updateField('password')" class="ml-auto">저장</v-btn>
                    </div>
                </td>
                </tr>
                <tr>
                <th scope="row">비밀번호 확인</th>
                <td>
                    <input type="password" v-model="passwordConfirm" class="input-field">
                    <v-btn @click="updateField('password')" class="ml-auto">변경</v-btn>
                </td>
                </tr>
            </tbody>
            </table>
        
            <div class="button-container">
                <v-btn @click="logout" color="hover">나가기</v-btn>
                <v-btn @click="deleteUser" color="secondary" class="mr-2">탈퇴</v-btn>
            </div>
        </div>
    </div>
    </template>
    
  
  <script>
  import { useUserStore } from "@/stores/user.js";
  const userStore = useUserStore();
  
  export default {
    name: "MyPage",
    data() {
      return {
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        editMode: {
          email: false,
          name: false,
          password: false
        },
        editedFields: {
          email: "",
          name: "",
          password: ""
        }
      };
    },
    created() {
      const currentUser = userStore.currentUser;
      if (currentUser) {
        this.name = currentUser.name;
        this.email = currentUser.email;
      }
    },
    methods: {
      toggleEditMode(field) {
        this.editMode[field] = !this.editMode[field];
        if (this.editMode[field]) {
          this.editedFields[field] = this[field];
        }
      },
      updateField(field) {
        this[field] = this.editedFields[field];
        // 여기서 저장 로직을 추가
        this.toggleEditMode(field);
      },
      logout() {
        this.$router.push({ name: "Login" });
      },
      confirmDeleteUser() {
        if (confirm("회원 탈퇴하시겠습니까?")) {
          this.deleteUser();
        }
      },
      deleteUser() {
        // 탈퇴 로직 추가
        userStore.deleteUser();
        alert("탈퇴가 완료되었습니다.");
        this.$router.push({ name: "Home" });
      }
    }
  };
  </script>
  
<style scoped>
.totalContainer {
      width: 80%;
      margin: 0 auto; /* 페이지를 가로 중앙에 정렬 */
      background-color: #ffffff; /* 배경을 흰색으로 설정 */
      padding: 50px; /* 페이지 내부 여백 설정 */
}
.header-title {
    text-align: left;
    margin-left: 10%;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
}
.input-field {
    width: calc(80% - 20px);
    padding: 4px 8px;
    border: none;
    border-bottom: 1px solid #000000;
    outline: none;
}
.usermodify-table {
    width: 80%; /* totalContainer의 60%를 차지하도록 설정 */
    margin: 0 auto; /* 가운데 정렬 */
    border-collapse: collapse;
}
.usermodify-table th,
.usermodify-table td {
    border: 0.5px solid #000000;
    padding: 8px;
    text-align: center;
}
.usermodify-table th {
    width: 20%; /* th의 너비를 40%로 설정 */
    background-color: #FAF6F3;
}
.usermodify-table td {
    width: 60%; /* td의 너비를 20%로 설정 */
} 
.button-container {
    text-align: center;
    margin-top: 20px;
}
.button-container button {
    margin-left: 5px;
}
</style>