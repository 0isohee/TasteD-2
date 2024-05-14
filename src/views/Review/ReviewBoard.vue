<script>
export default {
  name: "ReviewBoard",
  components: {
    ReviewBoardList: () => import("@/views/Review/ReviewBoardList.vue"),
  },
  methods: {},
};
</script>

<template>
  <div>
    <div class="totalContainer">
      <v-row justify="center">
        <v-col cols="12" lg="12" xl="8">
          <div>
            <div>
              <div>
                <h2 class="text-h4 font-weight-bold text-center">후기 게시판</h2>
                <h4 class="text-h6 text-center">좋았던 장소와 후기를 남겨주세요</h4>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <ReviewBoardList />
    </div>
  </div>
</template>

<style scoped>
.totalContainer {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
</style>
