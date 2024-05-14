<script>
export default {
  name: "UserJoin",
  data() {
    return {
      name: '',
      id: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      const newUser = {
        name: this.name,
        id: this.id,
        email: this.email,
        password: this.password
      };
      //user 넘겨주면서 db 등록하기
      console.log(newUser);
      console.log('가입하기 눌러졌음')
    }
  },
};
</script>

<template>
  <div>
    <v-row class="d-flex justify-center align-center fill-height" style="min-height: 60vh">
      <v-col cols="12" md="6">
        <v-card class="py-6">
          <v-card-title class="d-flex justify-center">
            <div class="text-h5">
              회원가입
            </div>
          </v-card-title>
          <v-card-text>
            <v-text-field label="이름 입력" outlined v-model="name" :rules="[v => !!v || '이름을 입력하세요']"></v-text-field>
            <v-text-field label="아이디 입력" outlined v-model="id" :rules="[v => !!v || '아이디를 입력하세요']"></v-text-field>
            <v-text-field label="이메일 입력" outlined v-model="email" :rules="[v => !!v || '이메일을 입력하세요']"></v-text-field>
            <v-text-field label="패스워드 입력" outlined v-model="password" :rules="[v => !!v || '패스워드를 입력하세요']"></v-text-field>

            <div class="text-right">
              <v-btn color="primary" class="user-button" @click="register">
                회원가입
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.text-h5 {
  margin: 0 10px;
  font-weight: bold;
  color : #2178ff
}
</style>
