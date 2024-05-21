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
        // console.log(response.data);
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
  },
});
