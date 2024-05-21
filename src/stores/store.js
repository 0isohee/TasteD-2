import { defineStore } from "pinia";
import { getStore, getStoreDatail, registStore, updateStore, deleteStore } from "@/api/storeApi.js";

export const useStoreStore = defineStore({
  id: "storeList",
  state: () => ({
    stores: [],
  }),
  actions: {
    async getStoreList() {
      try {
        const response = await getStore();
        this.stores = response.data;
        console.log(response.data);
      } catch (error) {
        console.error("맛집 가져오기 실패:", error);
      }
    },
  },
});
