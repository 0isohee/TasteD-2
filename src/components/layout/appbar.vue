<template>
  <div>
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndUp"
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      color="mainColor"
      dark
    >
      <!-- 내용 생략 -->
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="white" elevate-on-scroll flat>
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
        <v-row :no-gutters="!$vuetify.breakpoint.smAndUp" align="center" justify="space-between">
          <!-- 왼쪽 로고 및 메뉴 아이콘 -->
          <v-col class="d-flex align-center">
            <v-app-bar-nav-icon
              v-if="!$vuetify.breakpoint.mdAndUp"
              @click.stop="drawer = !drawer"
            />
            <v-toolbar-title
              class="font-weight-bold text-h5 titleColor--text"
              style="cursor: pointer"
              @click="$router.push('/')"
            >
              <v-icon color="mainColor" large>mdi mdi-store-marker-outline</v-icon>
              TASTE
              <!-- <img src="/images/logo-ver2.png" width="50px"> -->
              <span class="mainColor--text">D</span>
            </v-toolbar-title>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.mdAndUp" cols="6">
            <v-btn
              v-for="(item, i) in barItems"
              :key="i"
              :to="item.to"
              class="text-capitalize"
              exact
              exact-active-class="font-weight-bold mainColor--text"
              text
              >{{ item.title }}
            </v-btn>
          </v-col>

          <!-- 오른쪽 로고 -->
          <v-col v-if="$vuetify.breakpoint.mdAndUp" class="text-right">
            <v-menu v-model="showMenu" offset-y open-on-hover>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" icon>
                  <v-icon
                    class="mdi mdi-account-outline"
                    style="font-size: 36px; color: #524a44"
                  ></v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="item in btnItems"
                  :key="item.text"
                  @click="handleItemClick(item)"
                >
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import { useUserStore } from "@/stores/user.js";
const userStore = useUserStore();

export default {
  data: () => ({
    drawer: null,
    barItems: [
      {
        title: "홈",
        to: "/",
      },
      {
        title: "맛집 공유",
        to: "/storeboard",
      },
      {
        title: "후기 공유",
        to: "/reviewboard",
      },
    ],
    showMenu: false,
  }),
  computed: {
    btnItems() {
      let items = [
        {
          text: "로그인",
          action: "Login",
          to: "/login",
        },
        {
          text: "회원가입",
          action: "Join",
          to: "/join",
        },
      ];
      if (userStore.currentUser) {
        if (userStore.currentUser.id === "admin") {
          items = [
            {
              text: "회원관리",
              action: "Admin",
              to: "/admin",
            },
          ];
        } else {
          items = [
            {
              text: "마이페이지",
              action: "MyPage",
              to: "/mypage",
            },
          ];
        }
      }
      return items;
    },
  },
  methods: {
    handleItemClick(item) {
      console.log("Selected action:", item.action);
      this.$router.push(item.to);
    },
  },
};
</script>

<style scoped></style>
