<script>
import { useUserStore } from "@/stores/user.js";

export default {
  name: "SearchPwd",
  data() {
    return {
      name: "",
      email: "",
      id: "",
      foundPwd: "", // 찾은 비밀번호
      modal: false, // 모달 표시 여부
    };
  },
  methods: {
    findUserPwd() {
      const userStore = useUserStore();
      const foundUser = userStore.users.find(
        (user) => user.name === this.name && user.email === this.email && user.id === this.id
      );
      if (foundUser) {
        this.foundPwd = foundUser.password;
      } else {
        this.foundPwd = ""; // 비밀번호를 찾지 못한 경우 초기화
      }
      this.modal = true; // 모달 표시
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
            <div class="text-h5">비밀번호 찾기</div>
          </v-card-title>
          <!-- 폼 유효성 검사 -->
          <v-form ref="form" @submit.prevent="findUserPwd">
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
                  (v) => (v && v.length >= 7 && v.length <= 15) || '7~15자 이내로 입력하세요',
                ]"
              ></v-text-field>
              <v-text-field
                label="이메일"
                outlined
                v-model="email"
                :rules="[(v) => /.+@.+\..+/.test(v) || '올바른 이메일 형식이 아닙니다']"
              ></v-text-field>

              <div class="text-center">
                <v-btn type="submit" color="primary" class="user-button"> 찾기 </v-btn>
              </div>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="modal" max-width="400">
      <v-card class="flex-row justify-center">
        <v-card-title class="headline text-center">비밀번호 찾기</v-card-title>
        <v-card-text>
          <p v-if="foundId">
            {{ name }}님의 비밀번호는 <span class="red--text">{{ foundPwd }}</span> 입니다.
          </p>
          <p v-else>해당하는 사용자가 없습니다.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="modal = false">확인</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
