<script>
import { useUserStore } from "@/stores/user.js";
export default {
  name: "UserList",
  setup (){
    const userStore = useUserStore();
    const users = userStore.users;

    return { 
      users 
    };
  },
  components: {
    // siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>


<template>


  <div class="pt-4">
    <h3 class="text-h5 font-weight-medium pb-4">회원 관리</h3>

    <v-divider></v-divider>

    <div class="pt-4">
      <div class="d-flex align-center mb-6" v-for="user in users" :key="user.id">
        <v-avatar color="accent" size="64">
          <v-icon dark x-large>mdi-feather</v-icon>
        </v-avatar>

        <div class="pl-2">
          <div class="text-h6">{{user.id}}</div>
          <div class="text-subtitle-1">{{user.email}}</div>
          <v-btn>삭제</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

