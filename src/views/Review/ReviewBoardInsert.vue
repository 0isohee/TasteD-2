<!-- ReviewBoardInsert.vue -->
<script>
import { ref } from "vue";
export default {
  name: "ReviewBoardInsert",
  data() {
    return {
      formData: ref({
        title: "ddd",
        tag: "ddd", // 사용자 입력을 받을 태그 변수
        storeName: "ddd", // 사용자 입력을 받을 가게 이름 변수
        storeAddress: "ddd",
        storeComment: "ddd", // 사용자 입력을 받을 설명 변수
        writer: "ddd", // 사용자 입력을 받을 작성자 이름 변수
        date: "ddd", // 사용자 입력을 받을 작성일 변수
        tag: "ddddddd", // 사용자 입력을 받을 태그 변수

        tags: [], // 사용자가 입력한 태그를 저장할 배열
        images: [], // 사용자 입력을 받을 이미지 URL 배열 변수

        // icon: "mdi-heart", // 사용자 입력을 받을 아이콘 변수
        // eyeIcon: "mdi-eye", // 사용자 입력을 받을 조회수 아이콘 변수
        // eyeCount: "1.4k", // 사용자 입력을 받을 조회수 변수
        // commentIcon: "mdi-comment-outline", // 사용자 입력을 받을 댓글 아이콘 변수
        // commentCount: "7 Comment", // 사용자 입력을 받을 댓글 수 변수
      }),
      maxImageCount: 3, // 최대 이미지 업로드 가능 개수,
      startwidth: "20px",
    };
  },
  methods: {
    confirmInsert() {
      if (confirm("해당 리뷰를 등록하시겠습니까?")) {
        const newReview = {
          title: this.formData.title,
          tag: this.formData.tag,
          storeName: this.formData.storeName,
          storeAddress: this.formData.storeAddress,
          storeComment: this.formData.storeComment,
          writer: this.formData.writer,
          date: this.formData.date,
          tags: [...this.formData.tags], // 태그 배열 복사
          images: [...this.formData.images], // 이미지 URL 배열 복사
        };

        // ReviewBoard에 리뷰 데이터 전달
        this.$emit("review-inserted", newReview);

        // 리뷰 등록 완료 메시지 표시
        alert("리뷰 등록 완료");

        // ReviewBoardList로 이동
        this.$router.push({ name: "ReviewBoardList" });
      }
    },
    goToReviewList() {
      this.$router.push({ name: "ReviewBoard" });
    },
    onTagInput() {
      // 입력된 태그를 배열에 추가
      if (this.formData.tag.trim() !== "") {
        this.formData.tags.push(this.formData.tag);
        // 입력값 초기화
        this.formData.tag = "";
      }
    },
    onFileChange(event) {
      const files = event.target.files;
      if (this.formData.images.length + files.length > this.maxImageCount) {
        // 이미지 업로드 개수가 최대 이미지 개수를 초과할 때 알림창 표시
        alert("사진 세 개 이상 안된다고 했다.");
        return;
      }
      const remainingSlots = this.maxImageCount - this.formData.images.length;
      for (let i = 0; i < files.length && i < remainingSlots; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = () => {
          this.formData.images.push(reader.result);
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage(index) {
      this.formData.images.splice(index, 1);
    },
    removeTag(index) {
      this.formData.tags.splice(index, 1);
    },
  },
};
</script>

<template>
  <div>
    <div>
      <div class="titleContainer">
        <h3 class="text-h4 font-weight-medium pb-4">후기 등록</h3>
      </div>
      <v-divider></v-divider>
    </div>

    <v-row justify="center">
      <v-col cols="12" lg="12" xl="8">
        <div>
          <div align="center">
            <v-card flat color="transparent">
              <v-img
                src=""
                :aspect-ratio="16 / 9"
                width="100vh"
                gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                style="border-radius: 16px"
              ></v-img>

              <v-card-text>
                <form>
                  <div>
                    <label>태그 등록 : d </label>
                    <input v-model="formData.tag" type="text" placeholder="태그" />
                  </div>

                  <div class="text-h4 font-weight-bold primary--text pt-4">
                    <label>가게명 등록 : </label>
                    <input v-model="formData.storeName" type="text" placeholder="가게 이름" />
                  </div>

                  <div class="text-body-1 py-4">
                    <label>가게 위치 : </label>
                    <input v-model="formData.description" type="text" placeholder="설명" />
                  </div>

                  <div class="d-flex align-center justify-space-between">
                    <div class="d-flex align-center">
                      <v-avatar color="accent" size="36">
                        <v-icon dark>mdi-heart</v-icon>
                      </v-avatar>

                      <div class="pl-2 text-body-1">SoHee Lee · 10 May 2024</div>
                    </div>

                    <div class="d-flex align-center">
                      <div>
                        <v-chip small color="transparent">
                          <v-icon left>mdi-eye</v-icon>1.4k
                        </v-chip>

                        <v-chip small color="transparent">
                          <v-icon left>mdi-comment-outline</v-icon>7 Comment
                        </v-chip>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p class="text-subtitle-1 primary--text font-weight-medium">안뇽하세요</p>
                  </div>

                  <div class="py-4">
                    <v-alert
                      class="font-italic text-h6 text-center"
                      border="left"
                      colored-border
                      color="accent"
                    >
                      안뇽하세요
                    </v-alert>
                  </div>
                </form>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </v-col>

      <v-col>
        <div>
          <siderbar />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.titleContainer {
  align-content: center;
  text-align: center;
  height: 10vh;
}
</style>
