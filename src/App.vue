<template>
  <v-app>
    <AppBar></AppBar>

    <v-container class="mt-16">
      <router-view></router-view>
    </v-container>

    <Footer></Footer>
  </v-app>
</template>

<script>
import "@/css/main.css";
export default {
  name: "App",

  components: {
    AppBar: () => import("@/components/layout/appbar.vue"),
    Footer: () => import("@/components/layout/footer.vue"),
  },
  data: () => ({}),
};
</script>
