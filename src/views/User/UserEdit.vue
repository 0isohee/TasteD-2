<script>
import { useUserStore } from "@/stores/user.js";
const userStore = useUserStore();

export default {
  name: "UserEdit",
  data() {
    return {
      editUser: null,
    };
  },
  created() {
    this.editUser = userStore.editUser;
  },
  methods: {
    editUserInfo() {
      const newUser = {
        name: this.editUser.name,
        id: this.editUser.id,
        domain: this.editUser.domain,
        password: this.editUser.password,
        phone: this.editUser.phone,
      };
      userStore.adminEditUser(newUser);
      this.$router.push("/user-list");
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
            <div class="text-h5">회원 정보 수정</div>
          </v-card-title>
          <!-- 폼 유효성 검사 -->
          <v-form ref="form" @submit="editUserInfo">
            <v-card-text class="userInput">
              <v-text-field
                label="이름"
                outlined
                v-model="editUser.name"
                :rules="[(v) => /^[가-힣]+$/.test(v) || '이름은 한글만 입력이 가능합니다']"
              ></v-text-field>
              <v-text-field
                label="전화번호"
                outlined
                v-model="editUser.phone"
                :rules="[(v) => /^\d{3}-\d{4}-\d{4}$/.test(v) || 'xxx-xxxx-xxxx으로 입력해주세요']"
              ></v-text-field>
              <v-text-field
                label="비밀번호"
                outlined
                v-model="editUser.password"
                type="password"
                :rules="[
                  (v) => !!v || '영문/숫자/특수문자 2가지 이상 조합 (8~20자)',
                  (v) => (v && v.length >= 8 && v.length <= 20) || '8~20자 이내로 입력하세요',
                ]"
              ></v-text-field>

              <div class="text-center">
                <v-btn type="submit" color="primary" class="user-button"> 수정 </v-btn>
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
