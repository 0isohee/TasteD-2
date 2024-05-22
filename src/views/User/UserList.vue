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
            <div class="text-subtitle-1">
              이메일: <span class="font-weight-bold">{{ user.domain }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user.js";

export default {
  name: "UserList",
  setup() {
    const userStore = useUserStore();
    userStore.getMemberList();

    const deleteMember = (index) => {
      const userToDelete = userStore.users[index];
      const confirmDelete = confirm(`${userToDelete.name} 님을 삭제하시겠습니까?`);
      if (confirmDelete) {
        userStore.users.splice(index, 1);
        alert("회원을 삭제하였습니다. 회원 관리 폼으로 이동합니다.");
      }
    };

    return {
      userStore,
      deleteMember,
    };
  },
};
</script>

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
