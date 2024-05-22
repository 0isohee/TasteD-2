<script>
import ReviewBoardList from "@/views/Review/ReviewBoardList.vue";
import { ref, computed, onMounted } from "vue";
import { useReviewStore } from "@/stores/review.js";

export default {
  name: "ReviewBoard",
  components: {
    ReviewBoardList,
  },
  setup() {
    const reviewStore = useReviewStore();

    const reviews = ref([]); // 전체 리뷰 데이터 배열
    const currentPage = ref(1); // 현재 페이지 번호
    const reviewsPerPage = 10; // 페이지당 보여줄 리뷰 수

    // 전체 페이지 수를 계산하는 computed property
    const totalPages = computed(() => {
      return Math.ceil(reviews.value.length / reviewsPerPage);
    });

    // 현재 페이지에 보여질 리뷰들을 계산하는 computed property
    const displayedReviews = computed(() => {
      const startIndex = (currentPage.value - 1) * reviewsPerPage; // 시작 인덱스
      const endIndex = startIndex + reviewsPerPage; // 끝 인덱스
      return reviews.value.slice(startIndex, endIndex); // 해당 범위의 리뷰 배열 반환
    });

    // 페이지 변경 시 호출되는 메서드
    const changePage = (page) => {
      currentPage.value = page; // 현재 페이지 번호 업데이트
    };

    onMounted(() => {
      reviewStore.getReviewList();
      reviews.value = reviewStore.reviews;
      
    });

    return {
      displayedReviews, // 현재 페이지에 보여질 리뷰들
      currentPage, // 현재 페이지 번호
      reviewsPerPage, // 페이지당 보여줄 리뷰 수
      changePage, // 페이지 변경 메서드
      totalPages, // 전체 페이지 수
    };
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
              <h2 class="text-h4 font-weight-bold text-center">후기 게시판</h2>
              <h4 class="text-h6 text-center">좋았던 장소와 후기를 남겨주세요</h4>
            </div>
          </div>
        </div>
        <div>
          <ReviewBoardList :reviews="displayedReviews" />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <!-- currentPage를 v-model로 사용하고 changePage 메서드를 호출하는 @input 이벤트를 사용하여 페이지 변경 -->
        <v-pagination v-model="currentPage" :length="totalPages" @input="changePage"></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.pagination button {
  margin: 0 5px;
  padding: 10px 15px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
}
.pagination button:hover {
  background-color: #d0d0d0;
}
</style>
