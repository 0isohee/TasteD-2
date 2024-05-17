<script>
import { useReviewStore } from "@/stores/review";

export default {
  name: "ReviewBoardDetail",
  data() {
    return {
      selectedReview: null,
    };
  },
  created() {
    const reviewStore = useReviewStore();
    const reviewId = this.$route.params.id;
    this.selectedReview = reviewStore.reviews.find((review) => review.id === reviewId);

    console.log(this.selectedReview); // 선택된 리뷰를 콘솔에 출력
  },
};
</script>

<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" lg="12" xl="8">
        <div>
          <v-card flat color="transparent">
            <div v-if="selectedReview">
              <v-img
                v-for="(img, index) in selectedReview.images.slice(0, 3)"
                :key="index"
                :src="img"
                :aspect-ratio="1 / 1"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                width="100%"
                style="min-height: 200px; border: 1px solid #ccc; border-radius: 8px; margin: 10px"
              ></v-img>

              <v-card-text>
                <div class="mt-1">
                  <v-row v-for="tag in selectedReview.tags" :key="tag">
                    <v-col class="flex-shrink-0" cols="auto">
                      <v-chip color="accent">{{ tag }}</v-chip>
                    </v-col>
                  </v-row>
                </div>

                <div class="text-h4 font-weight-bold primary--text pt-4">
                  <h4>{{ selectedReview.title }}</h4>
                </div>

                <div class="text-body-1 py-4">{{ selectedReview.storeComment }}</div>
                <div class="d-flex align-center justify-space-between">
                  <div class="d-flex text-align-right">
                    <div class="pl-2 text-body-1">2024,</div>
                  </div>

                  <div class="d-flex align-center">
                    <div>
                      <v-chip small color="transparent">
                        <v-icon left>mdi-eye</v-icon>{{ selectedReview.category }}
                      </v-chip>
                    </div>
                  </div>
                </div>

                <v-divider class="my-4"></v-divider>

                <div class="textArea">
                  <p class="text-subtitle-1 black--text font-weight-medium">안녕하세요</p>
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
            </div>
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
</style>
