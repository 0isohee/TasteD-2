<script>
import { onMounted, ref, watchEffect } from "vue";
import { useStoreStore } from "@/stores/store.js";
import { useRoute } from "vue-router/composables";

export default {
  name: "StoreBoardDetail",
  setup() {
    const storeStore = useStoreStore();
    const router = useRoute();
    const nowStore = storeStore.stores[router.params.id - 1]; // 현재 상점 데이터를 저장할 변수

    onMounted(() => {
      // nowStore = null;
    });
    console.log(nowStore);
    return {
      nowStore,
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
            <v-card flat color="transparent">
              <v-img
                src="/"
                :aspect-ratio="16 / 9"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 16px"
              ></v-img>

              <v-card-text>
                <div>
                  <v-btn color="accent">Best</v-btn>
                </div>

                <div class="text-h4 font-weight-bold black--text pt-4">
                  <h3>{{ nowStore.restname }}</h3>
                  <h6>{{ nowStore.addr }}</h6>
                </div>

                <div class="text-h6 font-weight mainColor--text py-4">
                  추천메뉴 : {{ nowStore.recommend }}
                </div>

                <div class="text-h6 font-weight mainColor--text mb-4">
                  휴무일 : {{ nowStore.hldyguide }}
                </div>

                <!-- <div class="d-flex align-center justify-space-between">
                  <div class="d-flex align-center">
                    <v-avatar color="accent" size="36">
                      <v-icon dark>mdi-heart</v-icon>
                    </v-avatar>
                  </div>

                  <div class="d-flex align-center">
                    <div>
                      <v-chip small color="transparent"> <v-icon left>mdi-eye</v-icon>1.4k </v-chip>

                      <v-chip small color="transparent">
                        <v-icon left>mdi-comment-outline</v-icon>7 Comment
                      </v-chip>
                    </div>
                  </div>
                </div> -->

                <v-divider class="my-4"></v-divider>

                <!-- <div>
                  <p class="text-subtitle-1 mainColor--text font-weight-medium">
                    {{ nowStore.info }}
                  </p>
                </div> -->

                <div class="py-4">
                  <v-alert
                    class="font-italic text-h text-center"
                    border="left"
                    colored-border
                    color="white"
                  >
                    {{ nowStore.info }}
                  </v-alert>
                </div>

                <!-- <div class="text-h5 primary--text font-weight-bold">
                  바꿀 예정
                  <p class="text-subtitle-1 primary--text font-weight-medium mt-5">준비중</p>
                </div>

                <div class="my-4">
                  <v-row>
                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_1280.jpg"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>

                    <v-col cols="6">
                      <v-card>
                        <v-img
                          src="https://cdn.pixabay.com/photo/2019/11/01/11/08/landscape-4593909_1280.jpg"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                        ></v-img>
                      </v-card>
                    </v-col>
                  </v-row>
                </div>

                <div class="text-h5 primary--text font-weight-bold">
                  준비중
                  <div class="text-subtitle-1 primary--text font-weight-medium mt-5">
                    <ul>
                      <li class="my-2">준비중</li>

                      <li class="my-2">준비중</li>

                      <li class="my-2">준비중</li>
                    </ul>

                    <p>준비중</p>
                  </div>
                </div> 

                <div class="d-flex align-center justify-space-between mt-8">
                  <div>
                    <v-row>
                      <v-col class="flex-shrink-0" cols="auto">
                        <v-chip color="accent">#Bakery</v-chip>
                      </v-col>

                      <v-col class="flex-shrink-0" cols="auto">
                        <v-chip color="accent">#Cafe</v-chip>
                      </v-col>

                      <v-col class="flex-shrink-0" cols="auto">
                        <v-chip color="accent">#Coffee</v-chip>
                      </v-col>
                    </v-row>
                  </div>
                </div>

                 <div class="text-h5">
                    Share >
                    <v-btn icon large>
                      <v-icon large color="primary">mdi-instagram</v-icon>
                    </v-btn>
                    <v-btn icon large>
                      <v-icon large color="primary">mdi-facebook</v-icon>
                    </v-btn>

                    <v-btn icon large>
                      <v-icon large color="primary">mdi-twitter</v-icon>
                    </v-btn>

                    <v-btn icon large>
                      <v-icon large color="primary">mdi-youtube</v-icon>
                    </v-btn>
                  </div>
                </div> -->

                <!-- <div>
                  <v-row justify="space-between">
                    <v-col cols="12" md="6" lg="4">
                      <div class="d-flex align-center">
                        <div>
                          <v-icon>mdi-arrow-left</v-icon>
                        </div>

                        <div class="text-h6 primary--text pl-2">
                          <div class="text-subtitle-1">이전 게시글</div>
                          이번 맛집 레전드
                        </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6" lg="4">
                      <div class="d-flex align-center text-right">
                        <div class="text-h6 primary--text pr-2">
                          <div class="text-subtitle-1">다음 게시글</div>
                          다음 맛집도 레전드
                        </div>

                        <div>
                          <v-icon>mdi-arrow-right</v-icon>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div> -->
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
