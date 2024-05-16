import { ref } from "vue";
import { defineStore } from "pinia";

export const useBoardListStore = defineStore({
  id: "boardList",
  state: () => ({
    reviews: [],
  }),
  actions: {
    addReview(newReview) {
      this.reviews.push(newReview);
    },
  },
});
