<script>
import { useUserStore } from "@/stores/user.js";

export default {
  name: "UserList",
  data() {
    return {
      userStore: useUserStore(),
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      this.userStore.getMemberList();
    },
    deleteMember(index) {
      const userToDelete = this.userStore.users[index];
      const confirmDelete = confirm(`${userToDelete.name} 님을 삭제하시겠습니까?`);
      if (confirmDelete) {
        this.userStore
          .adminQuitUser(userToDelete.id)
          .then(() => {
            this.fetchUsers();
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }
    },
    editMember(index) {
      this.userStore.editUser = this.userStore.users[index];
      this.$router.push({ name: "UserEdit" });
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fetchUsers();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchUsers();
    next();
  },
};
</script>

<template>
  <div class="pt-4">
    <h3 class="text-h5 font-weight-medium pb-4">회원 관리</h3>
    <v-divider></v-divider>

    <div class="pt-4">
      <div class="d-flex align-center mb-6" v-for="(user, index) in userStore.users" :key="user.id">
        <v-avatar color="accent" size="64">
          <v-icon dark x-large>mdi-feather</v-icon>
        </v-avatar>

        <div class="pl-2 flex-grow-1">
          <div class="d-flex justify-space-between">
            <div class="text-h6">{{ index + 1 }}번째 사용자</div>
            <div class="d-flex">
              <v-btn @click="editMember(index)">회원 수정</v-btn>
              <v-btn @click="deleteMember(index)">회원 삭제</v-btn>
            </div>
          </div>
          <div class="d-flex">
            <div class="text-subtitle-1 pr-2">
              이름: <span class="font-weight-bold">{{ user.name }}</span
              >,
            </div>
            <div class="text-subtitle-1 pr-2">
              아이디: <span class="font-weight-bold">{{ user.id }}</span
              >,
            </div>
            <div class="text-subtitle-1 pr-2">
              이메일: <span class="font-weight-bold">{{ user.domain }}</span
              >,
            </div>
            <div class="text-subtitle-1 pr-2">
              전화번호: <span class="font-weight-bold">{{ user.phone }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.d-flex {
  display: flex;
  align-items: center;
}
.align-center {
  align-items: center;
}
.justify-space-between {
  justify-content: space-between;
}
.flex-grow-1 {
  flex-grow: 1;
}
.pr-2 {
  padding-right: 0.5rem;
}
span {
  color: #524a44;
}
button {
  margin-left: 10px;
}
</style>
