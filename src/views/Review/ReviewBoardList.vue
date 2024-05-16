<script>
// const review = ref({
//   img : '',
//   category : 'bakery',
//   icon : 'mdi mdi-baguette',
//   title : '도안동 빵집 | 이 곳을 공유합니당',
//   writer : 'So Hee Lee',
//   writeDate : '13 May 2024'
// })

export default {
  name: "ReviewBoardList",
  data() {
    return {
      review: [
        {
          img: "../images/preview.png",
          category: "bakery",
          icon: "mdi-baguette",
          title: "도안동 빵집 | 이 곳을 공유합니당",
          writer: "So Hee Lee",
          writeDate: "13 May 2024",
        },
        // Add more review objects as needed
      ],
    };
  },
  methods: {
    goToStoreDetail(i) {
      this.$router.push({ name: "ReviewBoardDetail", params: { id: i } });
    },
    addReview() {
      this.$router.push({ name: "ReviewBoardInsert" });
    },
  },
};
</script>

<template>
  <div>
    <div>
      <div class="titleContainer">
        <h3 class="text-h5 font-weight-medium pb-4">인기 게시글</h3>
        <v-btn
          @click.prevent="addReview"
          depressed
          medium
          style="background-color: black; color: white"
          >후기 작성</v-btn
        >
      </div>
      <v-divider></v-divider>
      <div>
        <v-row v-for="i in 5" :key="i" class="py-2">
          <v-col cols="12" md="6" lg="5">
            <v-card height="100%" flat @click.prevent="goToStoreDetail(i)">
              <v-img :src="review[0].img" :aspect-ratio="16 / 9" height="100%"></v-img>
            </v-card>
          </v-col>

          <v-col>
            <div>
              <v-btn depressed color="accent" small>{{ review[0].category }}</v-btn>
              <h3 class="text-h6 font-weight-bold titleColor--text py-3">
                {{ review[0].title }}
              </h3>

              <div class="d-flex align-center">
                <v-avatar color="accent" size="24">
                  <v-icon dark small>mdi-{{ review[0].icon }}</v-icon>
                </v-avatar>
                <div class="pl-2">{{ review[0].writer }} · {{ review[0].title }}</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<style scoped>
.titleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
