import { defineStore } from "pinia";
import {
  getStore,
  getStoreDetailInfo,
  registStore,
  updateStore,
  deleteStore,
} from "@/api/storeApi.js";

export const useStoreStore = defineStore({
  id: "storeList",
  state: () => ({
    stores: [],
    store: null,
  }),
  actions: {
    async getStoreList() {
      try {
        const response = await getStore();
        this.stores = response.data;
      } catch (error) {
        console.error("맛집 가져오기 실패:", error);
      }
    },
    async getStoreDetail(no) {
      try {
        const response = await getStoreDetailInfo(no);
        this.store = response.data;
        // console.log(response.data);
      } catch (error) {
        console.error("맛집 디테일 가져오기 실패:", error);
      }
    },
    selectFile(storename, storeinfo) {
      const combinedText = storename + storeinfo;
      // console.log(combinedText);

      let imagePath = "/images/no_file.jpg"; // default image path

      switch (true) {
        case combinedText.includes("회"):
        case combinedText.includes("횟집"):
        case combinedText.includes("생선"):
        case combinedText.includes("사시미"):
          imagePath = "/images/foods/row-fish.jpg";
          break;
        case combinedText.includes("짜장"):
        case combinedText.includes("중식"):
          imagePath = "/images/foods/black-noodle.jpg";
          break;
        case combinedText.includes("국수"):
          if (combinedText.includes("칼국수")) {
            imagePath = "/images/foods/cal-noodle.jpg";
          } else {
            imagePath = "/images/foods/noodles.jpg";
          }
          break;
        case combinedText.includes("짬뽕"):
          imagePath = "/images/foods/spicy-noodle.jpg";
          break;
        case combinedText.includes("버거"):
          imagePath = "/images/foods/hambuger.jpg";
          break;
        case combinedText.includes("삼겹"):
          imagePath = "/images/foods/korean-meat.jpg";
          break;
        case combinedText.includes("치킨"):
        case combinedText.includes("통닭"):
          imagePath = "/images/foods/chicken.jpg";
          break;
        case combinedText.includes("냉면"):
          imagePath = "/images/foods/cold-noodle.jpg";
          break;
        case combinedText.includes("돈가스"):
        case combinedText.includes("돈까스"):
        case combinedText.includes("경양식"):
        case combinedText.includes("카츠"):
          imagePath = "/images/foods/fried-meat.jpg";
          break;
        case combinedText.includes("일식"):
        case combinedText.includes("초밥"):
          imagePath = "/images/foods/row-fish-bab.jpg";
          break;
        case combinedText.includes("국밥"):
          imagePath = "/images/foods/gookbab.jpg";
          break;
        case combinedText.includes("카페"):
        case combinedText.includes("커피"):
          imagePath = "/images/foods/cafe.jpg";
          break;
        case combinedText.includes("백반"):
          imagePath = "/images/foods/bakban.jpg";
          break;
        case combinedText.includes("보쌈"):
          imagePath = "/images/foods/bossam.jpg";
          break;
        case combinedText.includes("만두"):
          imagePath = "/images/foods/mandu.jpg";
          break;
        case combinedText.includes("만둣국"):
          imagePath = "/images/foods/mandu-soup.jpg";
          break;
        case combinedText.includes("육개장"):
          imagePath = "/images/foods/ukgaejang.jpg";
          break;
        case combinedText.includes("만둣국"):
          imagePath = "/images/foods/mandu-soup.jpg";
          break;
        case combinedText.includes("콩나물국밥"):
          imagePath = "/images/foods/yellow-gookbab.jpg";
          break;
        case combinedText.includes("베이커리"):
        case combinedText.includes("빵"):
        case combinedText.includes("성심당"):
          imagePath = "/images/foods/backery.jpg";
          break;
        case combinedText.includes("갈비"):
        case combinedText.includes("고기"):
          imagePath = "/images/foods/galbi.jpg";
          break;
        case combinedText.includes("두부두루치기"):
        case combinedText.includes("두부"):
          imagePath = "/images/foods/dobu-cook.jpg";
          break;
        case combinedText.includes("파스타"):
        case combinedText.includes("스파게티"):
        case combinedText.includes("양식"):
        case combinedText.includes("이태리"):
        case combinedText.includes("Pasta"):
        case combinedText.includes("pasta"):
          imagePath = "/images/foods/pasta.jpg";
          break;
        case combinedText.includes("보리밥"):
          imagePath = "/images/foods/boribab.jpg";
          break;
        case combinedText.includes("수통골"):
          imagePath = "/images/foods/sutongol.jpg";
          break;
        case combinedText.includes("일본"):
        case combinedText.includes("일식"):
          imagePath = "/images/foods/japan.jpg";
          break;
        case combinedText.includes("곱창"):
          imagePath = "/images/foods/gobchang.jpg";
          break;
        case combinedText.includes("해장"):
          imagePath = "/images/foods/haejang.jpg";
          break;
      }
      return imagePath;
    },
  },
});
