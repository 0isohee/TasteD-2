<script>
import { useStoreStore } from "@/stores/store.js";
const userStore = useStoreStore();

export default {
  name: "StoreBoardList",
  setup() {
    const stores = userStore.stores;

    return {
        stores
    }
  },
  methods: {
    goToBoardDetail(id) {
      this.$router.push({ name: "StoreBoardDetail", params : id });
    },
  },
};
</script>

<template>
    <div>
        <v-row>
            <v-col cols="12" md="6" lg="4" v-for="store in stores" :key="store.id">
              <v-hover v-slot:default="{ hover }" open-delay="50" close-delay="50">
                <div>
                  <v-card
                    flat
                    :color="hover ? 'white' : 'transparent'"
                    :elevation="hover ? 12 : 0"
                    hover
                    @click.prevent="goToBoardDetail(store.id)"
                  >
                    <v-img
                      src=""
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
                      <div class="text-h5 font-weight-bold mainColor--text">대전 제일 맛집</div>
                      <div class="text-body-1 py-4">전화번호 : {{ store.tel }}</div>
                      <div class="text-body-1 py-4">hldyguide : {{ store.hldyguide }}</div>
                      <div class="text-body-1 py-4">lat : {{ store.lat }}</div>
                      <div class="text-body-1 py-4">salestime : {{ store.salestime }}</div>
                      <div class="text-body-1 py-4">restname : {{ store.restname }}</div>
                      <div class="text-body-1 py-4">addr : {{ store.addr }}</div>
                      <div class="text-body-1 py-4">info : {{ store.info }}</div>
                      <div class="text-body-1 py-4">recommend : {{ store.recommend }}</div>
                      <div class="text-body-1 py-4">lot : {{ store.lot }}</div>
                      <div class="d-flex align-center">
                        <v-avatar color="accent" size="36">
                          <v-icon dark>mdi-heart</v-icon>
                        </v-avatar>
        
                        <div class="pl-2">SoHee Lee · 10 May 2024</div>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>
              </v-hover>
            </v-col>
          </v-row>
    </div>
</template>

<style scoped>

</style>