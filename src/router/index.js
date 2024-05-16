import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/storeboard",
    name: "StoreBoard",
    component: () => import("@/views/Store/StoreBoard.vue"),
  },
  {
    path: "/storeboard/detail",
    name: "StoreBoardDetail",
    component: () => import("@/views/Store/StoreBoardDetail.vue"),
  },
  {
    path: "/reviewboard",
    name: "ReviewBoard",
    component: () => import("@/views/Review/ReviewBoard.vue"),
  },
  {
    path: "/reviewboard/list",
    name: "ReviewBoardList",
    component: () => import("@/views/Review/ReviewBoardList.vue"),
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
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/login/join",
    name: "UserJoin",
    component: () => import("@/views/User/UserJoin.vue"),
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    document.getElementById("app").scrollIntoView();
  },
});

export default router;
