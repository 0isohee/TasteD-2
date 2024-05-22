<script>
import { useUserStore } from "@/stores/user.js";
const userStore = useUserStore();
export default {
  name: "Login",
  data() {
    return {
      id: "",
      password: "",
      showPassword: false, // 추가된 데이터 속성
    };
  },
  methods: {
    joinMember() {
      this.$router.push({ name: "Join" });
    },
    loginMember(id, password) {
      userStore.login(id, password).then((response) => {
        if (response === 100) {
          this.$router.push({ name: "Home" });
        }
      });
    },
  },
};

/*
const foundUser = userStore.users.find(
  (user) => user.id === this.id && user.password === this.password
);
console.log(foundUser);

// 사용자가 존재하는 경우
if (foundUser) {
  alert("로그인 성공");
  userStore.currentUser = foundUser;
  // console.log(userStore.currentUser)
  this.$router.push({ name: "MyPage" });
} else {
  alert("사용자가 없습니다");
  // 사용자에게 알림 메시지 표시
  // this.$q.notify({
  //   color: "negative",
  //   position: "top",
  //   message: "이메일 또는 비밀번호가 잘못되었습니다.",
  //   icon: "report_problem",
  // });
  */
</script>

<template>
  <v-row class="d-flex justify-center align-center fill-height" style="min-height: 60vh">
    <v-col cols="12" md="6">
      <v-card class="py-6">
        <v-card-title class="d-flex">
          <div class="text-h5">로그인</div>
          <div class="text-h6">Login</div>
        </v-card-title>

        <v-card-text>
          <v-text-field
            label="아이디"
            outlined
            v-model="id"
            :rules="[(v) => !!v || '아이디를 입력하세요']"
          ></v-text-field>
          <v-text-field
            label="비밀번호"
            outlined
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            :rules="[(v) => !!v || '비밀번호를 입력하세요']"
          ></v-text-field>
          <v-checkbox v-model="showPassword" label="비밀번호 보이기" class="no-margin"></v-checkbox>
          <div class="d-flex justify-center mt-2">
            <!-- 링크들을 가운데 정렬 -->
            <router-link to="/search-id" class="mr-4">아이디 찾기</router-link>
            <router-link to="/search-pwd" class="mr-4">비밀번호 찾기</router-link>
            <router-link to="/join">회원 가입</router-link>
          </div>
          <div class="text-center mt-5 md-3">
            <v-btn color="primary" class="user-button" @click.prevent="loginMember(id, password)">
              Login
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.user-button {
  margin-left: 10px;
}
.text-h5 {
  margin: 0 10px;
  font-weight: bold;
  color: #2178ff;
}
.no-margin {
  margin-top: 0 !important; /* 상단 마진 제거 */
}
</style>
