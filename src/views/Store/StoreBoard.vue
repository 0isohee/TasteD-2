<script>
import StoreBoardList from "@/views/Store/StoreBoardList.vue";
import { ref, computed, onMounted } from "vue";
import { useStoreStore } from "@/stores/store.js";

export default {
  name: "StoreBoard",
  components: {
    StoreBoardList,
  },
  setup() {
    const storeStore = useStoreStore();
    const stores = ref(storeStore.stores); // 전체 가게 데이터 배열
    const currentPage = ref(1); // 현재 페이지 번호
    const storesPerPage = 12; // 페이지당 보여줄 가게 수

    // 전체 페이지 수를 계산하는 computed property
    const totalPages = computed(() => {
      return Math.ceil(stores.value.length / storesPerPage);
    });

    // 현재 페이지에 보여질 가게들을 계산하는 computed property
    const displayedStores = computed(() => {
      const startIndex = (currentPage.value - 1) * storesPerPage; // 시작 인덱스
      const endIndex = startIndex + storesPerPage; // 끝 인덱스
      return stores.value.slice(startIndex, endIndex); // 해당 범위의 가게 배열 반환
    });

    // 페이지 변경 시 호출되는 메서드
    const changePage = (page) => {
      currentPage.value = page; // 현재 페이지 번호 업데이트
    };

    onMounted(() => {
      storeStore.getStoreList();
    });

    return {
      displayedStores, // 현재 페이지에 보여질 가게들
      currentPage, // 현재 페이지 번호
      storesPerPage,
      changePage, // 페이지 변경 메서드
      totalPages, // 전체 페이지 수
    };
  },
};
</script>

<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div>
            <div>
              <h2 class="text-h4 font-weight-bold text-center">맛집 추천 게시판</h2>
              <h4 class="text-h6 text-center">실시간으로 대전의 맛집을 추천해드려요</h4>
            </div>
            <v-divider class="my-4"></v-divider>
            <!-- StoreBoardList에 displayedStores를 props으로 전달 -->
            <StoreBoardList :currentStore="displayedStores" />
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <!-- currentPage를 v-model로 사용하고 changePage 메서드를 호출하는 @input 이벤트를 사용하여 페이지 변경 -->
        <v-pagination v-model="currentPage" :length="totalPages" @input="changePage"></v-pagination>
      </v-col>
    </v-row>
    
  </div>
</template>

<style scoped></style>
