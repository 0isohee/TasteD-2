<script>
import StoreBoardList from "@/views/Store/StoreBoardList.vue";
import { useStoreStore } from "@/stores/store.js";
const userStore = useStoreStore();

export default {
  name: "StoreBoard",
  components: {
    StoreBoardList,
  },
  data() {
    return {
      currentPage: parseInt(this.$route.params.pageNo) || 1,
    };
  },
  watch: {
    "$route.params.pageNo": {
      immediate: true,
      handler(newPageNo) {
        this.currentPage = parseInt(newPageNo) || 1;
        userStore.getStoreList(this.currentPage);
      },
    },
  },
  methods: {
    changePage(page) {
      this.$router.push({ name: "StoreBoardPage", params: { pageNo: page } });
    },
  },
  mounted() {
    this.changePage(this.currentPage);
  },
};
</script>

<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div>
              <h2 class="text-h4 font-weight-bold text-center">맛집 추천 게시판</h2>
              <h4 class="text-h6 text-center">실시간으로 대전의 맛집을 추천해드려요</h4>
            </div>
            <v-divider class="my-4"></v-divider>
            <StoreBoardList />
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-pagination v-model="currentPage" :length="10" @input="changePage"></v-pagination>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" lg="12" xl="8">
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
