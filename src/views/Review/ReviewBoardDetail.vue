<script>
import { useReviewStore } from "@/stores/review";
import { useUserStore } from "@/stores/user.js";

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
    const userStore = useUserStore();
    const currentUser = userStore.currentUser;
    const reviewId = this.$route.params.id;
    reviewStore.getReviewDetail(reviewId).then(() => {
      this.selectedReview = reviewStore.review;

      // 작성자가 admin인지 여부를 설정하는 메서드 호출
      this.setWriterIsAdmin();
      console.log(this.writerIsAdmin);
      console.log(currentUser);
    });
  },
  methods: {
    goToEdit() {
      this.$router.push({ name: "ReviewBoardEdit", params: { id: this.selectedReview.no } });
    },
    goToDelete() {
      if (confirm("리뷰를 삭제하시겠습니까?")) {
        const reviewStore = useReviewStore();
        // 해당 id값을 삭제
        reviewStore.deleteReview(this.$route.params.id);

        // 삭제 후 리뷰 목록 화면으로 이동
        this.$router.push("/reviewboard");
      }
    },
    goToList() {
      this.$router.push("/reviewboard");
    },
    moveToPrev() {
      console.log("prev");
    },
    moveToNext() {
      console.log("next");
    },
    setWriterIsAdmin() {
      const userStore = useUserStore();
      const currentUser = userStore.currentUser;
      if (currentUser.id === "admin" || currentUser.id === this.selectedReview.writer) {
        this.writerIsAdmin = true;
      } else {
        this.writerIsAdmin = false;
      }
    },
  },
  watch: {
    selectedReview: {
      handler() {
        this.setWriterIsAdmin();
      },
      deep: true,
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
                v-for="(img, index) in selectedReview.imageNames"
                :key="index"
                cols="12"
                sm="4"
                md="4"
                lg="4"
              >
                <v-img
                  :src="'http://192.168.120.81:8080/' + img"
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
                  <v-col
                    v-for="(tag, index) in selectedReview.tag.split(' ')"
                    :key="index"
                    cols="auto"
                  >
                    <v-chip color="accent">{{ tag }}</v-chip>
                  </v-col>
                </v-row>
              </div>

              <div class="text-h4 font-weight-bold mainColor--text pt-4">
                <h4>" {{ selectedReview.title }} "</h4>
              </div>

              <div class="text-h5 font-weight-bold py-4">
                가게명 : {{ selectedReview.storeName }}
              </div>
              <div class="d-flex justify-space-between align-center">
                <div class="text-body-1 font-weight-bold">
                  가게 주소 : {{ selectedReview.storeAddress }}
                </div>

                <div class="text-right">
                  <div class="text-body-1 font-weight-bold">
                    작성자 : {{ selectedReview.writer }}
                  </div>
                  <div class="text-body-1 font-weight-bold">
                    작성 일자 : {{ selectedReview.createdate }}
                  </div>
                </div>
              </div>

              <div class="d-flex justify-end mt-5" v-if="writerIsAdmin">
                <div style="margin-right: 10px">
                  <v-btn color="hover" @click="goToEdit">후기 수정</v-btn>
                </div>
                <div>
                  <v-btn color="hover" @click="goToDelete">후기 삭제</v-btn>
                </div>
              </div>

              <v-divider class="my-4"></v-divider>

              <div class="text-h6 black--text font-weight text-center mb-10">
                {{ selectedReview.storeComment }}
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
                        <div class="text-subtitle-1" @click="moveToPrev">이전 게시글</div>
                        이번 맛집 레전드
                      </div>
                    </div>
                  </v-col>

                  <v-col cols="12" md="6" lg="4">
                    <div class="d-flex justify-end">
                      <div class="text-h6 primary--text pr-2" @click="moveToNext">
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.author-date {
  text-align: right;
}
.btnContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
.d-flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.justify-space-between {
  justify-content: space-between;
}
.text-right {
  text-align: right;
}
</style>
