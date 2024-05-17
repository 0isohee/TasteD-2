<script>
import { useReviewStore } from "@/stores/review";
import { ref, computed } from "vue";

export default {
  name: "ReviewBoardList",
  setup() {
    const reviewStore = useReviewStore();
    const reviewsPerPage = 5; // 페이지당 표시되는 리뷰 수
    const currentPage = ref(1); // 현재 페이지 번호
    let startIndex = 0; // 현재 페이지의 첫 리뷰 인덱스
    let endIndex = reviewsPerPage - 1; // 현재 페이지의 마지막 리뷰 인덱스

    // 전체 페이지 수 계산
    const totalPages = computed(() => Math.ceil(reviewStore.reviews.length / reviewsPerPage));

    // 현재 페이지에 표시될 리뷰 목록 계산
    const paginatedReviews = computed(() => reviewStore.reviews.slice(startIndex, endIndex + 1));

    // 페이지 이동 함수 정의
    const goToPage = (pageNumber) => {
      currentPage.value = pageNumber;
      updatePaginatedReviews();
    };

    // 이전 페이지로 이동 함수 정의
    const goToPrevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        updatePaginatedReviews();
      }
    };

    // 다음 페이지로 이동 함수 정의
    const goToNextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        updatePaginatedReviews();
      }
    };

    // 현재 페이지의 리뷰 목록 업데이트 함수 정의
    const updatePaginatedReviews = () => {
      startIndex = (currentPage.value - 1) * reviewsPerPage;
      endIndex = Math.min(startIndex + reviewsPerPage - 1, reviewStore.reviews.length - 1);
    };

    // 페이지 번호 범위 계산
    const getPageRange = () => {
      const rangeStart = Math.max(1, currentPage.value - 4);
      const rangeEnd = Math.min(totalPages.value, rangeStart + 9);
      return { start: rangeStart, end: rangeEnd };
    };

    return {
      paginatedReviews,
      currentPage,
      totalPages,
      goToPrevPage,
      goToNextPage,
      goToPage,
      getPageRange,
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
        <!-- 리뷰 목록 -->
        <v-row v-for="review in paginatedReviews" :key="review.id" class="py-2">
          <!-- 리뷰 카드 -->
          <v-col cols="12" md="6" lg="5">
            <v-card height="100%" flat @click.prevent="goToStoreDetail(review.id)">
              <v-img :src="review.images[0]" :aspect-ratio="16 / 9" height="100%"></v-img>
            </v-card>
          </v-col>
          <v-col>
            <div>
              <!-- 태그 및 제목 -->
              <v-btn depressed color="accent" small>{{ review.tags[0] }}</v-btn>
              <h3 class="text-h6 font-weight-bold titleColor--text py-3">{{ review.title }}</h3>
              <!-- 가게 정보 -->
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

    <v-row justify="center">
      <!-- @input="changePage" -->
      <v-col cols="12">
        <v-pagination v-model="currentPage" :length="10"></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.titleContainer {
  display: flex;
  justify-content: space-between;
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
