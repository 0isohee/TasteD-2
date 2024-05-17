import { defineStore } from "pinia";
export const useReviewStore = defineStore({
  id: "reviewList",
  state: () => ({
    reviews: [
      // 더미데이터
      {
        id: 1,
        title: "레전드맛집",
        images: ["/images/preview.png", "../images/preview.png", "../images/preview.png"],
        storeName: "호두베이크샵",
        storeAddress: "도안동",
        storeComment: "스콘이 찢었다",
        tags: ["레전드맛집", "스콘맛집"],
        writer: "admin",
      },
      {
        id: 2,
        title: "레전드맛집",
        images: ["/images/preview.png", "../images/preview.png", "../images/preview.png"],
        storeName: "호두베이크샵",
        storeAddress: "도안동",
        storeComment: "스콘이 찢었다",
        tags: ["레전드맛집", "스콘맛집"],
        writer: "admin",
      },
      {
        id: 3,
        title: "레전드맛집",
        images: ["/images/preview.png", "../images/preview.png", "../images/preview.png"],
        storeName: "호두베이크샵",
        storeAddress: "도안동",
        storeComment: "스콘이 찢었다",
        tags: ["레전드맛집", "스콘맛집"],
        writer: "admin",
      },
      {
        id: 4,
        title: "레전드맛집",
        images: ["/images/preview.png", "../images/preview.png", "../images/preview.png"],
        storeName: "호두베이크샵",
        storeAddress: "도안동",
        storeComment: "스콘이 찢었다",
        tags: ["레전드맛집", "스콘맛집"],
        writer: "admi3",
      },
    ],
  }),
  actions: {
    addReview(newReview) {
      this.reviews.push(newReview);
    },
  },
});
