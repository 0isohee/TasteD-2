<script>
import { useReviewStore } from "@/stores/review";
export default {
  name: "ReviewBoardList",
  setup() {
    const reviewStore = useReviewStore();
    return {
      reviews: reviewStore.reviews,
    };
  },
  methods: {
    goToStoreDetail(reviewId) {
      this.$router.push({ name: "ReviewBoardDetail", params: { id: reviewId } });
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
          @click.prevent="addReview"
          depressed
          medium
          style="background-color: black; color: white"
          >후기 작성</v-btn
        >
      </div>
      <v-divider></v-divider>
      <div>
        <v-row v-for="review in reviews" :key="i" class="py-2">
          <v-col cols="12" md="6" lg="5">
            <v-card height="100%" flat @click.prevent="goToStoreDetail(review.id)">
              <v-img :src="review.images[0]" :aspect-ratio="16 / 9" height="100%"></v-img>
            </v-card>
          </v-col>

          <v-col>
            <div>
              <v-btn depressed color="accent" small>{{ review.tags[0] }}</v-btn>
              <h3 class="text-h6 font-weight-bold titleColor--text py-3">
                {{ review.title }}
              </h3>

              <div class="d-flex align-center">
                <v-avatar color="accent" size="24">
                  <v-icon dark small>mdi mdi-baguette</v-icon>
                </v-avatar>
                <div class="pl-2">
                  {{ review.storeAddress }} 에 위치한 {{ review.storeName }} 을 소개합니다
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
  align-items: center;
}
</style>
