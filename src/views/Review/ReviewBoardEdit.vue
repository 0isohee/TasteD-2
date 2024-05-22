<script>
import { useReviewStore } from "@/stores/review";

export default {
  name: "ReviewBoardEdit",
  data() {
    return {
      editedReview: {
        images: ["dddddd"], // 이미지 배열을 초기화
        tags: [], // 태그 배열을 초기화
      },
      newTag: "", // 새 태그를 추가하기 위한 데이터
    };
  },
  created() {
    const reviewStore = useReviewStore();
    const reviewId = this.$route.params.id;
    // 리뷰 데이터를 가져와 수정할 객체에 복사
    const bringreview = reviewStore.reviews.find((review) => review.no === reviewId);
    if (bringreview) {
      this.editedReview = { ...bringreview };
      // 태그 문자열을 배열로 변환
      this.editedReview.tags = bringreview.tag.split(" ");
    }
  },
  methods: {
    saveReview() {
      const reviewStore = useReviewStore();
      // 태그 배열을 공백으로 구분된 문자열로 변환
      this.editedReview.tag = this.editedReview.tags.join(" ");
      // 수정된 리뷰를 리뷰 스토어에 업데이트

      console.log(this.editedReview);
      reviewStore.editReview(this.editedReview.no, this.editedReview);

      //수정 완료 알람창
      alert("수정 완료");
      // 저장 후 리뷰 목록 화면으로 이동
      this.$router.push("/reviewboard");
    },
    removeImage(index) {
      if (this.editedReview.images) {
        this.editedReview.images.splice(index, 1);
      }
    },
    removeTag(tag) {
      const index = this.editedReview.tags.indexOf(tag);
      if (index !== -1) {
        this.editedReview.tags.splice(index, 1);
        this.$forceUpdate();
      }
      console.log(this.editedReview.tags);
    },
    addTag() {
      if (this.newTag && !this.editedReview.tags.includes(this.newTag)) {
        this.editedReview.tags.push(this.newTag);
        this.newTag = "";
      }
    },
    goToBoard() {
      this.$router.push("/reviewboard");
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
            <v-row v-if="editedReview && editedReview.images" justify="center">
              <v-col v-for="(img, index) in editedReview.images.slice(0, 3)" :key="index">
                <div style="position: relative">
                  <v-img
                    :src="img"
                    :aspect-ratio="1 / 1"
                    gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                    width="100%"
                    style="border: 1px solid #ccc; border-radius: 8px; margin: 10px"
                  ></v-img>
                  <v-icon
                    color="red"
                    small
                    style="position: absolute; top: 10px; right: 10px; cursor: pointer"
                    @click="removeImage(index)"
                  >
                    mdi-close-circle
                  </v-icon>
                </div>
              </v-col>
              <!-- 이미지 추가 버튼 -->
              <v-col v-if="editedReview.images.length < 3" cols="auto">
                <div style="display: flex; justify-content: center; align-items: center">
                  <div
                    style="
                      position: relative;
                      width: 100px;
                      height: 100px;
                      margin: 10px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      border: 1px dashed #ccc;
                      border-radius: 8px;
                      cursor: pointer;
                    "
                  >
                    <v-icon @click="$refs.fileInput.click()" size="100" style="font-size: 2.5rem">
                      mdi-plus
                    </v-icon>
                    <input
                      ref="fileInput"
                      type="file"
                      accept="image/*"
                      style="display: none"
                      @change="addImage"
                    />
                  </div>
                </div>
              </v-col>
            </v-row>

            <v-card-text v-if="editedReview">
              <div class="mt-1">
                <v-row>
                  <v-col v-for="(tag, index) in editedReview.tags" :key="index" cols="auto">
                    <v-chip color="accent" close @click:close="removeTag(tag)">{{ tag }}</v-chip>
                  </v-col>
                </v-row>
              </div>
              <div style="margin-top: 10px">
                <v-text-field
                  v-model="newTag"
                  label="해시태그 추가"
                  type="text"
                  placeholder="추가하고 싶은 해시태그를 입력해주세요"
                  @keyup.enter="addTag"
                  outlined
                />
              </div>

              <div class="text-h3 font-weight-bold primary--text pt-4">
                <v-text-field
                  v-model="editedReview.title"
                  label="리뷰 제목 수정"
                  outlined
                ></v-text-field>
              </div>

              <div class="text-h4 font-weight-bold py-4">
                <v-text-field
                  v-model="editedReview.storeName"
                  label="맛집 이름 수정"
                  outlined
                ></v-text-field>
              </div>
              <div class="d-flex align-center justify-space-between">
                <div class="d-flex text-align-right">
                  <v-text-field
                    v-model="editedReview.storeAddress"
                    label="맛집 위치 수정"
                    outlined
                  ></v-text-field>
                </div>
              </div>

              <div class="textArea">
                <v-text-field
                  v-model="editedReview.storeComment"
                  label="맛집 코멘트 수정"
                  outlined
                  class="commentField"
                ></v-text-field>
              </div>

              <div class="btnContainer" style="display: flex; justify-content: center">
                <!-- <v-btn color="hover" @click="goToBoard">취소</v-btn> -->
                <v-btn color="#a99b95" @click="saveReview">수정</v-btn>
              </div>
            </v-card-text>
            <!-- 수정된 리뷰를 저장하는 버튼 -->
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
.v-text-field .v-input__control .v-input__slot .v-label {
  font-size: 1.25rem; /* 글씨 크기를 키움 */
}
.v-chip .v-chip__content .v-chip__text {
  font-size: 1.1rem; /* 태그 글씨 크기 조정 */
}
.v-text-field .v-input__control .v-input__slot .v-label {
  font-size: 1.5rem; /* 제목 글씨 크기를 더 키움 */
}
.commentField .v-text-field__slot input {
  min-height: 500px; /* 최소 높이를 500px로 설정 */
  height: auto !important; /* 자동으로 높이가 조절되도록 설정 */
  resize: vertical; /* 사용자가 수직으로만 조절할 수 있도록 설정 */
}
.btnContainer button {
  margin-left: 10px;
}
</style>
