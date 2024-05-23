<script>
import { useUserStore } from "@/stores/user.js";
const userStore = useUserStore();

export default {
  name: "ReviewBoardList",
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  data() {
    const userStore = useUserStore();
    return {
      isUser: userStore.currentUser !== null,
    };
  },
  methods: {
    goToReviewDetail(no) {
      // reviewStore.getReviewDetail(no);
      this.$router.push({ name: "ReviewBoardDetail", params: { id: no } });
    },
    addReview() {
      this.$router.push({ name: "ReviewBoardInsert" });
    },
  },
};
</script>

<template>
  <div>
    <div class="totalContainer">
      <div class="titleContainer">
        <h3 class="text-h5 font-weight-medium pb-4">인기 게시글</h3>
        <v-btn
          v-if="isUser"
          @click.prevent="addReview"
          depressed
          medium
          style="background-color: black; color: white"
        >
          후기 작성
        </v-btn>
      </div>
      <v-divider></v-divider>
      <div>
        <!-- 리뷰 목록 -->
        <v-row v-for="review in reviews" :key="review.no" class="py-2">
          <!-- 리뷰 카드 -->
          <v-col cols="12" md="6" lg="5">
            <v-card height="100%" flat @click.prevent="goToReviewDetail(review.no)">
              <v-img
                :src="'http://192.168.120.81:8080/' + review.imageNames[0]"
                :aspect-ratio="16 / 9"
                height="100%"
              ></v-img>
            </v-card>
          </v-col>
          <v-col>
            <div>
              <!-- 태그 및 제목 -->
              <div class="tags-container">
                <v-btn
                  v-for="tag in review.tag.split(' ')"
                  :key="tag"
                  depressed
                  color="accent"
                  small
                  class="tag-btn"
                >
                  {{ tag }}
                </v-btn>
              </div>
              <h3 class="text-h6 font-weight-bold titleColor--text py-3">{{ review.title }}</h3>
              <!-- 가게 정보 -->
              <div class="d-flex align-center">
                <v-avatar color="accent" size="24">
                  <v-icon dark small>mdi-baguette</v-icon>
                </v-avatar>
                <div class="pl-2">
                  {{ review.storeAddress }}에 위치한 {{ review.storeName }}을 소개합니다
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titleContainer {
  display: flex;
  justify-content: space-between;
}
.tags-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.tag-btn {
  margin: 2px;
}
.page-number {
  cursor: pointer;
}
.active {
  background-color: orange;
  border: 1px solid black;
}
.has-page {
  opacity: 0.6;
  cursor: pointer;
}
</style>
