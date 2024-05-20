<script>
import StoreBoardList from '@/views/Store/StoreBoardList.vue';
export default {
  name: "StoreBoard"
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
            
            <StoreBoardList/>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <!-- @input="changePage" -->
        <v-pagination v-model="currentPage" :length="10"></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
