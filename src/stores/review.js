import { defineStore } from "pinia";
import { getReview, getReviewDetailInfo } from "@/api/reviewApi.js";

export const useReviewStore = defineStore({
  id: "reviewList",
  state: () => ({
    reviews: [],
    review: null,
  }),
  actions: {
    async getReviewList() {
      try {
        const response = await getReview();
        this.reviews = response.data;
        console.dir(this.reviews);
       
      } catch (error) {
        console.error("리뷰 가져오기 실패 : ", error);
      }
    },
    async getReviewDetail(no) {
      try {
        const response = await getReviewDetailInfo(no);
        this.review = response.data;
        console.dir(this.review);
      } catch (error) {
        console.error("리뷰 디테일 가져오기 실패:", error);
      }
    },
    async addReview(newReview) {
      this.reviews.push(newReview);
    },
  },
});
