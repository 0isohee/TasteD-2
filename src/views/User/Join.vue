<script>
import { useUserStore } from "@/stores/user.js";
const userStore = useUserStore();
export default {
  name: "UserJoin",
  data() {
    return {
      name: "",
      id: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    register() {
      if (!this.$refs.form.validate() || this.password !== this.passwordConfirm) {
        alert("규칙에 맞게 다시 입력해주세요");
        return;
      } else {
        // 모든 필드의 유효성을 통과하면 가입 처리
        const newUser = {
          name: this.name,
          id: this.id,
          email: this.email,
          password: this.password,
        };
        userStore.addUser(newUser);
        // console.log(userStore.users);
        console.log("가입하기 눌러졌음");

        this.$router.push({ name: "MyPage" });
      }
    },
  },
};
</script>

<template>
  <div>
    <v-row class="d-flex justify-center align-center fill-height" style="min-height: 60vh">
      <v-col cols="12" md="6">
        <v-card class="py-6">
          <v-card-title class="d-flex justify-center mb-5">
            <div class="text-h5">회원가입</div>
          </v-card-title>
          <!-- 폼 유효성 검사 -->
          <v-form ref="form" @submit.prevent="register">
            <v-card-text class="userInput">
              <v-text-field
                label="이름"
                outlined
                v-model="name"
                :rules="[(v) => /^[가-힣]+$/.test(v) || '이름은 한글만 입력이 가능합니다']"
              ></v-text-field>
              <v-text-field
                label="아이디"
                outlined
                v-model="id"
                :rules="[
                  (v) => !!v || '영문/숫자 조합 (5~12자 이내)',
                  (v) => /^[a-zA-Z0-9]+$/.test(v) || '영어와 숫자만 입력 가능합니다',
                  (v) => (v && v.length >= 5 && v.length <= 12) || '5~12자 이내로 입력하세요',
                ]"
              ></v-text-field>
              <v-text-field
                label="이메일"
                outlined
                v-model="email"
                :rules="[(v) => /.+@.+\..+/.test(v) || '올바른 이메일 형식이 아닙니다']"
              ></v-text-field>
              <v-text-field
                label="비밀번호"
                outlined
                v-model="password"
                type="password"
                :rules="[
                  (v) => !!v || '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
                  (v) => (v && v.length >= 8 && v.length <= 20) || '8~20자 이내로 입력하세요',
                ]"
              ></v-text-field>
              <v-text-field
                label="비밀번호 확인"
                outlined
                v-model="passwordConfirm"
                type="password"
                :rules="[
                  (v) => !!v || '확인을 위해 새 비밀번호를 다시 입력해주세요',
                  (v) => v === password || '새 비밀번호와 일치하지 않습니다',
                ]"
              ></v-text-field>

              <div class="text-center">
                <v-btn type="submit" color="primary" class="user-button"> 가입 </v-btn>
              </div>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.text-h5 {
  margin: 0 10px;
  font-weight: bold;
  color: #2178ff;
}
.userInput .v-text-field {
  margin-bottom: 5px;
}
</style>
