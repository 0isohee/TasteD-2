<template>
  <div class="pt-4">
    <h3 class="text-h5 font-weight-medium pb-4">Top Authors</h3>

    <v-divider></v-divider>

    <div class="pt-4">
      <div class="d-flex align-center mb-6" v-for="i in 5" :key="i">
        <v-avatar color="accent" size="64">
          <v-icon dark x-large>mdi-feather</v-icon>
        </v-avatar>

        <div class="pl-2">
          <div class="text-h6">Yan Lee</div>
          <div class="text-subtitle-1">47 Articles</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>
