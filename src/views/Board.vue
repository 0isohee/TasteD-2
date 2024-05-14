<script>
export default {
  name: "Board",
  methods : {
    goToBoardDetail() {
      this.$router.push({ name : 'BoardDetail'})
    },
  },
  components: {
    // siderbar: () => import("@/components/details/sidebar"),
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
              <h2 class="text-h4 font-weight-bold text-center">사용자 게시판</h2>

              <h4 class="text-h6 text-center">좋았던 장소와 후기를 남겨주세요</h4>
            </div>

            <v-divider class="my-4"></v-divider>
            <v-row>
              <v-col cols="12" md="6" lg="4" v-for="i in 18" :key="i">
                <v-hover
                  v-slot:default="{ hover }"
                  open-delay="50"
                  close-delay="50"
                >
                  <div>
                    <v-card
                      flat
                      :color="hover ? 'white' : 'transparent'"
                      :elevation="hover ? 12 : 0"
                      hover
                      @click.prevent="goToBoardDetail"
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
                        <div class="text-h5 font-weight-bold primary--text">
                          대전 제일 맛집
                        </div>

                        <div class="text-body-1 py-4">
                          아주 맛있었던 곳이에요
                        </div>

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
        </div>
      </v-col>

      <!-- <v-col>
        <div>
          <siderbar />
        </div>
      </v-col> -->
    </v-row>
  </div>
</template>

<style scoped>

</style>