<template>
  <div>
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
        <v-col v-for="i in 3" :key="i" cols="6" lg="4">
          <v-card dark flat>
            <v-img
              :aspect-ratio="16 / 9"
              class="elevation-2 fill-height"
              gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
              height="600px"
              src="/images/no_file.jpg"
            >
              <div class="d-flex flex-column justify-space-between fill-height">
                <v-card-text>
                  <v-btn color="accent">Best</v-btn>
                </v-card-text>

                <v-card-text>
                  <div class="text-h5 py-3 font-weight-bold" style="line-height: 1.2">
                    레전드맛집..먹고기절
                  </div>

                  <div class="d-flex align-center">
                    <v-avatar color="accent" size="36">
                      <v-icon dark>mdi-feather</v-icon>
                    </v-avatar>

                    <div class="pl-2">Yan Lee · 03 Jan 2019</div>
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
        <v-row v-for="i in 6" :key="i" class="py-4">
          <v-col cols="12" md="4">
            <v-card flat height="100%">
              <v-img
                :aspect-ratio="16 / 9"
                height="100%"
                src="https://cdn.pixabay.com/photo/2021/01/27/06/54/nova-scotia-duck-tolling-retriever-5953883_1280.jpg"
              ></v-img>
            </v-card>
          </v-col>

          <v-col>
            <div>
              <v-btn color="accent" depressed>TRAVEL</v-btn>

              <h3 class="text-h4 font-weight-bold pt-3">
                Ut enim blandit volutpat maecenas volutpat blandit
              </h3>

              <p class="text-h6 font-weight-regular pt-3 text--secondary">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>

              <div class="d-flex align-center">
                <v-avatar color="accent" size="36">
                  <v-icon dark>mdi-feather</v-icon>
                </v-avatar>

                <div class="pl-2">Yan Lee · 03 Jan 2019</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
    siderbar: () => import("@/components/details/sidebar"),
  },
};
</script>
