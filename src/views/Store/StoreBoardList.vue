<script>
import { useStoreStore } from "@/stores/store.js";
const storeStore = useStoreStore();
export default {
  name: "StoreBoardList",
  props: {
    currentStore: Array,
  },
  methods: {
    goToBoardDetail(no) {
      // storeStore.getStoreDetail(no);
      this.$router.push({
        name: "StoreBoardDetail",
        params: { id: no },
      });
    },
  },
};
</script>

<template>
  <div>
    <!-- <div>
      <h2 class="text-h4 font-weight-bold text-center">맛집 추천 게시판</h2>
      <h4 class="text-h6 text-center">실시간으로 대전의 맛집을 추천해드려요</h4>
    </div>
    <v-divider class="my-4"></v-divider> -->

    <v-row>
      <v-col cols="12" md="6" lg="4" v-for="store in currentStore" :key="store.no">
        <v-hover v-slot:default="{ hover }" open-delay="50" close-delay="50">
          <div>
            <v-card
              flat
              :color="hover ? 'white' : 'transparent'"
              :elevation="hover ? 12 : 0"
              hover
              @click.prevent="goToBoardDetail(store.no)"
            >
              <v-img
                src="/images/preview.png"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                height="200px"
                class="elevation-2"
                style="border-radius: 16px"
              >
                <v-card-text>
                  <v-btn color="accent">Best</v-btn>
                </v-card-text>
              </v-img>

              <v-card-text>
                <div class="text-h5 font-weight-bold mainColor--text">
                  {{ store.restname }}을 소개합니다
                </div>
                <!-- <div class="text-body-1 py-4">대표/추천메뉴 : {{ store.recommend }}</div> -->
                <div class="text-body-1 py-4">{{ store.info }}</div>
                <!-- <div class="text-body-2 py-4">가게 주소 : {{ store.addr }}</div> -->
                <!-- <div class="text-body-1 py-4">영업 시간 : {{ store.salestime }}</div> -->
                <!-- <div class="text-body-1 py-4">휴무일 : {{ store.hldyguide }}</div> -->
                <!-- <div class="text-body-1 py-4">전화 번호 : {{ store.tel }}</div> -->

                <!-- <div class="text-body-1 py-4">{{ store.lat }}</div> -->
                <!-- <div class="text-body-1 py-4">lot : {{ store.lot }}</div> -->
                <div class="d-flex align-center">
                  <!-- <v-avatar color="accent" size="36">
                    <v-icon dark>mdi-heart</v-icon>
                  </v-avatar> -->

                  <!-- <div class="pl-2">SoHee Lee · 10 May 2024</div> -->
                </div>
              </v-card-text>
            </v-card>
          </div>
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
