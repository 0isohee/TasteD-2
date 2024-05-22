<script>
import { useReviewStore } from "@/stores/review";
const reviewStore = useReviewStore();

export default {
  name: "ReviewBoardEdit",
  data() {
    return {
      editedReview: {
        imageNames: [],
        tags: [], // 태그 배열을 초기화
      },
      newTag: "", // 새 태그를 추가하기 위한 데이터
      previewImages: [], // 수정된 이미지의 미리보기 배열
    };
  },
  created() {
    const reviewStore = useReviewStore();
    const reviewId = this.$route.params.id;

    reviewStore.getReviewDetail(reviewId);
    const bringreview = reviewStore.review;

    if (bringreview) {
      this.editedReview = { ...bringreview };
      // 태그 문자열을 배열로 변환
      this.editedReview.tags = bringreview.tag.split(" ");
      // 이미지 미리보기 배열 초기화
      this.previewImages = this.editedReview.imageNames;
      // console.log(this.previewImages);
    }
  },
  methods: {
    saveReview() {
      // 태그 배열을 공백으로 구분된 문자열로 변환
      if (confirm("해당 리뷰를 수정하시겠습니까?")) {
        const tagsString = this.editedReview.tags.join(" ");
        const formData = new FormData();
        const names = [];

        const filesToUpload = [];
        this.previewImages.forEach((image) => {
          if (image instanceof File) {
            filesToUpload.push(image);
          } else {
            names.push(image);
          }
        });
        // 이미지 파일들을 FormData에 추가
        if (filesToUpload.length > 0) {
          filesToUpload.forEach((file) => {
            formData.append("images", file);
          });
        } else {
          formData.append("images", null);
        }

        console.log(names);
        // formData.append("imageNames", imageNames);
        const data = {
          id: this.editedReview.id,
          title: this.editedReview.title,
          writer: this.editedReview.writer,
          storeName: this.editedReview.storeName,
          storeAddress: this.editedReview.storeAddress,
          storeComment: this.editedReview.storeComment,
          tag: tagsString,
          imageNames: names,
        };

        // 나머지 폼 데이터를 FormData에 추가
        formData.append(
          "post",
          new Blob([JSON.stringify(data)], {
            type: "application/json",
          })
        );
        // reviewStore에 전달
        console.log(formData);
        reviewStore.editReview(this.editedReview.no, formData);
        alert("글 수정 완료");
      }
      // 저장 후 리뷰 목록 화면으로 이동
      this.$router.push("/reviewboard");
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
    addImage(event) {
      const files = event.target.files;
      const remainingSlots = 3 - this.previewImages.length;

      if (remainingSlots <= 0) {
        // 이미지 업로드 개수가 최대 이미지 개수를 초과할 때 알림창 표시
        alert("사진 세 개 이상 안된다고 했다.");
        return;
      }

      for (let i = 0; i < files.length && i < remainingSlots; i++) {
        const file = files[i];
        // 파일 객체인지 확인
        if (file instanceof File) {
          // 파일 객체를 배열에 추가
          this.previewImages.push(file);

          // 이미지 미리보기 URL 생성
          const reader = new FqqqqqileReader();
          reader.onload = (e) => {
            this.previewImages.push(e.target.result);
          };
          reader.readAsDataURL(file);
        }
      }
    },

    removeImage(index) {
      // this.editedReview.imageNames.splice(index, 1);
      // console.log(this.editedReview.imageNames);
      // 미리보기 배열에서도 삭제
      this.previewImages.splice(index, 1);
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
            <v-row v-if="editedReview && previewImages" justify="center">
              <v-col v-for="(img, index) in previewImages.slice(0, 3)" :key="index">
                <div style="position: relative">
                  <v-img
                    :src="'http://localhost:8080/' + img"
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
              <v-col v-if="previewImages.length < 3" cols="auto">
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
