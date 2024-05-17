<script>
export default {
  name: "Login",
  methods: {
    joinMember() {
      this.$router.push({ name: "Join" });
    },
    loginMember() {
      console.log("로그인 되었는지 확인할 예정");
    },
  },
  components: {
    // siderbar: () => import("@/components/details/sidebar"),
  },
};
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
            label="Email"
            outlined
            v-model="email"
            :rules="[(v) => !!v || '이메일을 입력하세요']"
          ></v-text-field>
          <v-text-field
            label="Password"
            outlined
            v-model="password"
            :rules="[(v) => !!v || '패스워드를 입력하세요']"
          ></v-text-field>
          <div class="d-flex justify-center mt-2">
            <!-- 링크들을 가운데 정렬 -->
            <router-link to="/find-username" class="mr-4">아이디 찾기</router-link>
            <!-- Router를 통한 연결 -->
            <router-link to="/find-password" class="mr-4">비밀번호 찾기</router-link>
            <!-- Router를 통한 연결 -->
            <router-link to="/login/join">회원 가입</router-link>
            <!-- Router를 통한 연결 -->
          </div>
          <div class="text-right">
            <v-btn color="primary" class="user-button" @click.prevent="loginMember"> Login </v-btn>
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
</style>
