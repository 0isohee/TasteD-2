import { defineStore } from "pinia";

export const useReviewStore = defineStore({
  id: "reviewList",
  state: () => ({
    reviews: [
      {
        id: 1,
        title: "레전드맛집",
        images: "../images/preview.png",
        storeName: "호두베이크샵",
        storeAddress: "도안동",
        storeComment: "스콘이 찢었다",
        tags: ["레전드맛집", "스콘맛집"],
      },
      {
        id: 2,
        title: "레전드맛집",
        images: "../images/preview.png",
        storeName: "호두베이크샵",
        storeAddress: "도안동",
        storeComment: "스콘이 찢었다",
        tags: ["레전드맛집", "스콘맛집"],
      },
    ],
  }),
  actions: {
    addReview(newReview) {
      this.reviews.push(newReview);
    },
  },
});
