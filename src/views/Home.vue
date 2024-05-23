<script>
import { useReviewStore } from "@/stores/review.js";
import { useStoreStore } from "@/stores/store.js";
import { ref, onMounted } from "vue"; // Import ref and onMounted

export default {
  name: "Home",

  setup() {
    const reviewStore = useReviewStore();
    const storeStore = useStoreStore();
    const topThreeStores = ref([]); // Define as ref
    const topThreeReviews = ref([]); // Define as ref

    onMounted(() => {
      reviewStore.getReviewList();
      storeStore.getStoreList();

      // Assign values using .value for ref
      topThreeStores.value = storeStore.stores.splice(0, 3);
      topThreeReviews.value = reviewStore.reviews.splice(0, 3);
    });

    return {
      topThreeStores,
      topThreeReviews,
    };
  },
};
</script>

<template>
  <div class="home-container">
    <div>
      <v-card to="detail">
        <v-img
          :aspect-ratio="16 / 9"
          dark
          gradient="to top, rgba(25,32,72,.7), rgba(25,32,72,.0)"
          height="500px"
          src="/images/header.png"
        >
          <v-card-text class="fill-height d-flex align-end">
            <v-row class="flex-column">
              <v-col>
                <v-btn color="accent" to="category">Taste D</v-btn>
              </v-col>

              <v-col cols="12" lg="8" md="10" xl="7">
                <h2 class="text-h3 py-3" style="line-height: 1.2">유맛대전</h2>
              </v-col>
              <v-col class="d-flex align-center">
                <v-avatar class="elevation-4" color="accent">
                  <v-icon large>mdi mdi-baguette</v-icon>
                </v-avatar>
                <div class="text-h6 pl-2">Taste D · 유맛대전</div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-img>
      </v-card>
    </div>

    <div class="pt-16">
      <h2 class="text-h4 font-weight-bold pb-4">실시간으로 인기 폭발중인 대전 맛집들</h2>

      <v-row>
        <v-col v-for="(store, index) in topThreeStores" :key="index" cols="6" lg="4">
          <v-card dark flat>
            <v-img
              src="../"
              :aspect-ratio="16 / 9"
              class="elevation-2 fill-height"
              gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
              height="600px"
            >
              <div class="d-flex flex-column justify-space-between fill-height">
                <v-card-text>
                  <v-btn color="accent">Best</v-btn>
                </v-card-text>

                <v-card-text>
                  <div class="text-h5 py-3 font-weight-bold" style="line-height: 1.2">
                    {{ store.restname }}
                  </div>

                  <div class="d-flex align-center">
                    <v-avatar color="accent" size="36">
                      <v-icon dark>mdi-heart</v-icon>
                    </v-avatar>

                    <div class="pl-2">{{ store.addr }}</div>
                  </div>
                </v-card-text>
              </div>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <div class="pt-16">
      <h2 class="text-h4 font-weight-bold">맛집 후기글</h2>

      <div>
        <v-row v-for="(review, index) in topThreeReviews" :key="index" class="py-4">
          <v-col cols="12" md="4">
            <v-card flat height="100%">
              <v-img
                :aspect-ratio="16 / 9"
                height="100%"
                :src="'http://192.168.120.81:8080/' + review.imageNames[0]"
              >
              </v-img>
            </v-card>
          </v-col>

          <v-col>
            <div>
              <v-btn color="accent" depressed>{{ index + 1 }}번째 리뷰</v-btn>

              <h3 class="text-h5 font-weight-bold pt-3">{{ review.writer }}님의 후기</h3>

              <p class="text-h6 font-weight-regular pt-3 text--secondary">
                {{ review.storeComment }}
              </p>

              <div class="d-flex align-center">
                <v-avatar color="accent" size="36">
                  <v-icon dark>mdi-feather</v-icon>
                </v-avatar>

                <div class="pl-2">{{ review.writer }}</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  font-family: "omyu_pretty" !important;
}
</style>
