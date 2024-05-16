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

      <v-col>
        <div>
          <ReviewBoardList />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
