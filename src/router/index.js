import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/storeboard",
    name: "StoreBoard",
    component: () => import("@/views/Store/StoreBoard.vue"),
    props: true,
  },
  {
    path: "/storeboard/detail/:id",
    name: "StoreBoardDetail",
    component: () => import("@/views/Store/StoreBoardDetail.vue"),
  },
  {
    path: "/reviewboard",
    name: "ReviewBoard",
    component: () => import("@/views/Review/ReviewBoard.vue"),
    props: true,
  },

  {
    path: "/reviewboard/detail/:id",
    name: "ReviewBoardDetail",
    component: () => import("@/views/Review/ReviewBoardDetail.vue"),
  },
  {
    path: "/reviewboard/insert-review",
    name: "ReviewBoardInsert",
    component: () => import("@/views/Review/ReviewBoardInsert.vue"),
  },
  {
    path: "/reviewboard/edit-review/:id",
    name: "ReviewBoardEdit",
    component: () => import("@/views/Review/ReviewBoardEdit.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/User/Login.vue"),
  },
  {
    path: "/join",
    name: "Join",
    component: () => import("@/views/User/Join.vue"),
  },
  {
    path: "/mypage",
    name: "MyPage",
    component: () => import("@/views/User/MyPage.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/User/UserList.vue"),
  },
  {
    path: "/search-id",
    name: "SearchId",
    component: () => import("@/views/User/SearchId.vue"),
  },
  {
    path: "/search-pwd",
    name: "SearchPwd",
    component: () => import("@/views/User/SearchPwd.vue"),
  },
  {
    path: "/edit-user",
    name: "UserEdit",
    component: () => import("@/views/User/UserEdit.vue"),
  },
  {
    path: "/user-list",
    name: "UserList",
    component: () => import("@/views/User/UserList.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
