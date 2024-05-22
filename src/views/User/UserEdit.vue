<script>
import { useUserStore } from "@/stores/user.js";

export default {
  name: "UserEdit",
  setup() {
    const userStore = useUserStore();
    const editUser = userStore.editUser;

    const editUserInfo = () => {
      const newUser = {
        name: editUser.name,
        id: editUser.id,
        domain: editUser.domain,
        password: editUser.password,
        phone: editUser.phone
      };
      userStore.adminEditUser(newUser);
      // Accessing router instance directly via this.$router
      this.$router.push({ name: "UserList" });
    };

    return {
      editUser,
      editUserInfo,
    };
  },
};
</script>
<script>
import { useUserStore } from "@/stores/user.js";

export default {
  name: "UserEdit",
  setup() {
    const userStore = useUserStore();
    const editUser = userStore.editUser;

    const editUserInfo = () => {
      const newUser = {
        name: editUser.name,
        id: editUser.id,
        domain: editUser.domain,
        password: editUser.password,
        phone: editUser.phone
      };
      userStore.adminEditUser(newUser);
      // Accessing router instance directly via this.$router
      this.$router.push({ name: "UserList" });
    };

    return {
      editUser,
      editUserInfo,
    };
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
          <v-form ref="form" @submit.prevent="editUserInfo">
            <v-card-text class="userInput">
              <v-text-field
                label="이름"
                outlined
                v-model="editUser.name"
                :rules="[(v) => /^[가-힣]+$/.test(v) || '이름은 한글만 입력이 가능합니다']"
              ></v-text-field>

              <v-text-field
                label="아이디"
                outlined
                v-model="editUser.id"
                :rules="[
                  (v) => (v && v.length >= 5 && v.length <= 12) || '5~12자 이내로 입력하세요',
                ]"
              ></v-text-field>
              <v-text-field
                label="이메일"
                outlined
                v-model="editUser.domain"
                :rules="[(v) => /.+@.+\..+/.test(v) || '올바른 이메일 형식이 아닙니다']"
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
