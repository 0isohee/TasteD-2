<script>
import { useReviewStore } from "@/stores/review";

export default {
  name: "ReviewBoardDetail",
  data() {
    return {
      selectedReview: null,
      writerIsAdmin: false, // 작성자가 admin인지 여부를 저장할 변수 추가
    };
  },
  created() {
    const reviewStore = useReviewStore();
    const reviewId = this.$route.params.id;
    this.selectedReview = reviewStore.reviews.find((review) => review.id === reviewId);
    this.setWriterIsAdmin(); // 작성자가 admin인지 여부를 설정하는 메서드 호출
  },
  methods: {
    // 작성자가 admin인지 여부를 설정하는 메서드
    setWriterIsAdmin() {
      // console.log(this.selectedReview.writer);
      if (this.selectedReview && this.selectedReview.writer === "admin") {
        this.writerIsAdmin = true;
      } else {
        this.writerIsAdmin = false;
      }
    },
    goToEdit() {
      this.$router.push({ name: "ReviewBoardEdit", params: { id: this.selectedReview.id } });
    },
    goToDelete() {
      if (confirm("리뷰를 삭제합니다.")) {
        const reviewStore = useReviewStore();
        const reviewIndex = reviewStore.reviews.findIndex(
          (review) => review.id === this.selectedReview.id
        );
        // 리뷰 삭제
        if (reviewIndex !== -1) {
          reviewStore.reviews.splice(reviewIndex, 1);
          // 삭제 후 리뷰 목록 화면으로 이동
          this.$router.push("/reviewboard");
        }
      }
    },
    goToList() {
      this.$router.push("/reviewboard");
    },
  },
  watch: {
    // selectedReview 변경을 감지하여 작성자가 admin인지 여부를 다시 설정하는 메서드
    selectedReview: {
      handler() {
        this.setWriterIsAdmin();
      },
      deep: true, // 객체의 하위 속성도 감시
    },
  },
};
</script>

<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" lg="12" xl="8">
        <div>
          <v-card flat color="transparent">
            <v-row v-if="selectedReview" justify="center">
              <v-col
                v-for="(img, index) in selectedReview.images.slice(0, 3)"
                :key="index"
                cols="12"
                sm="4"
                md="4"
                lg="4"
              >
                <v-img
                  :src="img"
                  :aspect-ratio="1 / 1"
                  gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                  width="100%"
                  style="border: 1px solid #ccc; border-radius: 8px; margin: 10px"
                ></v-img>
              </v-col>
            </v-row>

            <v-card-text v-if="selectedReview">
              <div class="mt-1">
                <v-row>
                  <v-col v-for="(tag, index) in selectedReview.tags" :key="index" cols="auto">
                    <v-chip color="accent">{{ tag }}</v-chip>
                  </v-col>
                </v-row>
              </div>

              <div class="text-h4 font-weight-bold primary--text pt-4">
                <h4>{{ selectedReview.title }}</h4>
              </div>

              <div class="text-h5 font-weight-bold py-4">{{ selectedReview.storeName }}</div>
              <div class="d-flex align-center justify-space-between">
                <div class="d-flex text-align-right">
                  <div class="pl-2 text-body-1 font-weight-bold">
                    {{ selectedReview.storeAddress }}
                  </div>
                </div>

                <div class="d-flex align-center">
                  <div v-show="writerIsAdmin" style="margin-right: 10px">
                    <v-btn color="hover" @click="goToEdit">후기 수정</v-btn>
                  </div>
                  <div v-show="writerIsAdmin">
                    <v-btn color="hover" @click="goToDelete">후기 삭제</v-btn>
                  </div>
                </div>
              </div>

              <v-divider class="my-4"></v-divider>

              <div class="textArea">
                <p class="text-subtitle-1 black--text font-weight-medium">
                  {{ selectedReview.storeComment }}
                </p>
              </div>

              <div class="btnContainer">
                <v-btn color="#a99b95" @click="goToList">글 목록</v-btn>
              </div>

              <div>
                <v-row justify="space-between">
                  <v-col cols="12" md="6" lg="4">
                    <div class="d-flex align-center">
                      <div>
                        <v-icon>mdi-arrow-left</v-icon>
                      </div>

                      <div class="text-h6 primary--text pl-2">
                        <div class="text-subtitle-1">이전 게시글</div>
                        이번 맛집 레전드
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6" lg="4">
                    <div class="d-flex justify-end">
                      <div class="text-h6 primary--text pr-2">
                        <div class="text-subtitle-1">다음 게시글</div>
                        다음 맛집도 레전드
                      </div>

                      <div>
                        <v-icon>mdi-arrow-right</v-icon>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.textArea {
  text-align: center;
}
.btnContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
