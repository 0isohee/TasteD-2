import { defineStore } from "pinia";
import { getStore, getStoreDatail, registStore, updateStore, deleteStore} from "@/api/storeApi.js";

export const useStoreStore = defineStore({
  id: "storeList",
  state: () => ({
    stores: []
  }),
  actions: {
    async login(id, password) {
        try {
          const response = await loginUser({ id, password });
          this.currentUser = response.data;
        } catch (error) {
          console.error("로그인 실패:", error);
        }
      },
  },
});
