<script>
export default {
  name: "ReviewBoardDetail",
  props: {
    selectedReview: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" lg="12" xl="8">
        <div>
          <v-card flat color="transparent">
            <v-img
              v-for="link in images"
              :src="link"
              :aspect-ratio="1 / 1"
              gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
              width="100%"
              style="border-radius: 16px; margin-bottom: 10px"
            ></v-img>

            <v-card-text>
              <div class="d-flex align-center justify-space-between mt-1">
                <div>
                  <v-row v-for="tag in selectedReview.tags">
                    <v-col class="flex-shrink-0" cols="auto">
                      <v-chip color="accent">{{ tag }}</v-chip>
                    </v-col>
                  </v-row>
                </div>
              </div>

              <div class="text-h4 font-weight-bold primary--text pt-4">
                <h4>{{ selectedReview.title }}</h4>
              </div>

              <div class="text-body-1 py-4">{{ selectedReview.storeComment }}</div>

              <div class="d-flex align-center justify-space-between">
                <div class="d-flex align-center">
                  <v-avatar color="accent" size="36">
                    <v-icon dark>mdi-heart</v-icon>
                  </v-avatar>

                  <div class="pl-2 text-body-1">{{ selectedReview.date }}</div>
                </div>

                <div class="d-flex align-center">
                  <div>
                    <v-chip small color="transparent">
                      <v-icon left>mdi-eye</v-icon>{{ selectedReview.tag }}</v-chip
                    >
                  </div>
                </div>
              </div>

              <v-divider class="my-4"></v-divider>

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

              <div class="textArea">
                <p class="text-subtitle-1 primary--text font-weight-medium">안뇽하세요</p>
              </div>

              <div>
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
                    <div class="d-flex justify-end">
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
              </div>
            </v-card-text>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.textArea {
  text-align: center;
}
</style>
