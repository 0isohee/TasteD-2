import { defineStore } from "pinia";
import { getReview } from "@/api/reviewApi.js";

export const useReviewStore = defineStore({
  id: "reviewList",
  state: () => ({
    reviews: [],
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
    async addReview(newReview) {
      this.reviews.push(newReview);
    },
  },
});
