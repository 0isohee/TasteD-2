<script>
import ReviewBoardList from "@/views/Review/ReviewBoardList.vue";
import { ref, computed, onMounted } from "vue";
import { useReviewStore } from "@/stores/review.js";

export default {
  name: "ReviewBoard",
  components: {
    ReviewBoardList,
  },
  methods: {},
  setup() {
    const reviewStore = useReviewStore();
    const stores = ref(reviewStore.stores);
    const currentPage = ref(1); // 현재 페이지 번호
    const storesPerPage = 12; // 페이지당 보여줄 가게 수

    onMounted(() => {
      reviewStore.getReviewList();
    });

    return {
      reviewStore,
      stores,
      currentPage,
      storesPerPage,
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
          <ReviewBoardList />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
