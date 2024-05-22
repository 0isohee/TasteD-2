<!-- ReviewBoardInsert.vue -->
<script>
import { ref } from "vue";
import { useReviewStore } from "@/stores/review";
import { useUserStore } from "@/stores/user";
const reviewStore = useReviewStore();
const userStore = useUserStore();

export default {
  name: "ReviewBoardInsert",
  data() {
    return {
      formData: ref({
        id: "",
        title: "",
        images: [], // 사용자 입력을 받을 이미지 URL 배열 변수
        storeName: "", // 사용자 입력을 받을 가게 이름 변수
        storeAddress: "",
        storeComment: "", // 사용자 입력을 받을 설명 변수
        tag: "", // 사용자 입력을 받을 태그 변수
        tags: [], // 사용자가 입력한 태그를 저장할 배열
      }),
      maxImageCount: 3, // 최대 이미지 업로드 가능 개수,
      startwidth: "20px",
    };
  },
  methods: {
    confirmInsert() {
      if (confirm("해당 리뷰를 등록하시겠습니까?")) {
        const tagsString = this.formData.tags.join(" ");
        const formData = new FormData();
        // 이미지 파일들을 FormData에 추가
        this.formData.images.forEach((image, index) => {
          formData.append(`images[${index}]`, image);
        });
        const data = {
          id: this.formData.id,
          title: this.formData.title,
          storeName: this.formData.storeName,
          storeAddress: this.formData.storeAddress,
          storeComment: this.formData.storeComment,
          tag: tagsString,
          writer: "ssafy",
        };
        // 나머지 폼 데이터를 FormData에 추가
        // formData.append("id", this.formData.id);
        // formData.append("title", this.formData.title);
        // formData.append("storeName", this.formData.storeName);
        // formData.append("storeAddress", this.formData.storeAddress);
        // formData.append("storeComment", this.formData.storeComment);
        // formData.append("tag", tagsString);
        // formData.append("writer", "ssafy");
        formData.append(
          "post",
          new Blob([JSON.stringify(data)], {
            type: "application/json",
          })
        );

        console.log(formData);
        // reviewStore에 전달
        reviewStore.addReview(formData);

        alert("글 등록 완료");

        this.goToList();
      }
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
        // 파일 객체를 FormData에 직접 추가
        this.formData.images.push(file);
      }
    },

    removeImage(index) {
      this.formData.images.splice(index, 1);
    },
    goToList() {
      this.$router.push({ name: "ReviewBoard" });
    },
  },
};
</script>

<template>
  <div>
    <div class="totalContainer">
      <div class="titleContainer">
        <h3 class="text-h4 font-weight-medium pb-4">> 대전 맛집을 공유해주세요 <</h3>
      </div>
      <!-- <v-divider></v-divider> -->
    </div>

    <div class="Container">
      <v-row justify="center">
        <v-col cols="12" lg="12" xl="8">
          <div>
            <div align="center">
              <v-card flat color="transparent">
                <v-card-text>
                  <v-row justify="center">
                    <!-- 각 이미지를 표시 -->
                    <v-col
                      v-for="(image, index) in formData.images"
                      :key="index"
                      cols="auto"
                      sm="6"
                      md="4"
                      lg="3"
                    >
                      <v-img
                        :src="image"
                        :aspect-ratio="1 / 1"
                        width="100%"
                        style="border-radius: 16px; margin-bottom: 10px"
                      >
                        <v-btn icon color="error" class="removeButton" @click="removeImage(index)">
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-img>
                    </v-col>
                    <!-- 이미지가 없을 때 기본 이미지 표시 -->
                    <v-img
                      v-if="formData.images.length === 0"
                      src="/images/no_file.jpg"
                      aspect-ratio="1 / 1"
                      width="100%"
                      style="border-radius: 16px; margin-bottom: 10px"
                    ></v-img>
                  </v-row>

                  <form>
                    <div class="imgContainer">
                      <!-- 추가 전 -->
                      <img
                        v-if="!formData.images.length"
                        src="/images/no_file.jpg"
                        alt="Default Image"
                        style="
                          max-width: 100%;
                          max-height: 100px;
                          border: 1px solid #ccc;
                          border-radius: 8px;
                          margin: 10px;
                        "
                      />
                      <!-- 이미지가 등록될 곳 -->
                      <div>
                        <label for="imageInput">이미지 추가: </label>
                        <input
                          type="file"
                          id="imageInput"
                          accept="image/*"
                          multiple
                          @change="onFileChange"
                        />
                      </div>
                      <div class="imgText">
                        <small>* 사진은 최대 3개까지 업로드 가능합니다.</small>
                        <small>* 중복된 파일 업로드 불가능합니다.</small>
                        <small
                          >* JPG 또는 PNG 파일만 등록 가능하며, 파일 크기는 50MB
                          이하여야합니다.</small
                        >
                      </div>
                    </div>

                    <div class="textContainer">
                      <div
                        class="text-h5 font-weight black--text pt-4"
                        style="margin-left: startwidth"
                      >
                        <label>제목 : </label>
                        <input
                          v-model="formData.title"
                          type="text"
                          placeholder="제목을 입력해주세요"
                          style="width: 500px; border-bottom: 0.1px solid black"
                        />
                      </div>

                      <div
                        class="text-body-1 py-3"
                        style="margin-left: startwidth; margin-top: 6px"
                      >
                        <label>가게명 : </label>
                        <input
                          v-model="formData.storeName"
                          type="text"
                          placeholder="맛집명을 입력해주세요"
                          style="
                            margin-left: startwidth;
                            border-bottom: 0.1px solid black;
                            width: 500px;
                          "
                        />
                      </div>
                      <div class="text-body-1 py-3" style="margin-left: startwidth">
                        <label>주소 : </label>
                        <input
                          v-model="formData.storeAddress"
                          type="text"
                          placeholder="도로명 주소로 입력해주세요"
                          style="
                            margin-left: startwidth;
                            border-bottom: 0.1px solid black;
                            width: 500px;
                          "
                        />
                      </div>

                      <div class="text-h6 font-weight black--text" style="margin-left: startwidth">
                        <label>후기 작성란 </label>
                        <textarea
                          v-model="formData.storeComment"
                          placeholder="이 곳을 다녀온 후기를 자유롭게 적어주세요"
                          style="
                            width: 100%;
                            height: 300px;
                            vertical-align: top;
                            border: 0.1px solid black;
                          "
                        ></textarea>
                      </div>
                    </div>

                    <div class="tagContainer">
                      <div>
                        <label color="black">관련 해시태그 등록 : </label>
                        <input
                          v-model="formData.tag"
                          type="text"
                          placeholder="#해시태그 입력 뒤 엔터를 누르면 등록"
                          @keyup.enter="onTagInput"
                          style="width: 40%; border-bottom: 0.1px solid black; margin-bottom: 20px"
                        />
                        <v-row>
                          <v-col
                            class="flex-shrink-0"
                            cols="auto"
                            v-for="(tag, index) in formData.tags"
                            :key="index"
                          >
                            <v-chip color="accent" class="chip">
                              {{ tag }}
                              <v-icon @click="removeTag(index)">mdi-close</v-icon>
                            </v-chip>
                          </v-col>
                        </v-row>
                      </div>
                    </div>
                    <div class="btnContainer">
                      <v-btn color="hover" @click="confirmInsert">글 등록</v-btn>
                      <v-btn color="#cab8a8" @click="goToList">글 목록</v-btn>
                    </div>
                  </form>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.Container {
  /* border: 1px solid black; */
  width: 100%;
  background-color: white;
}
.totalContainer {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.titleContainer {
  align-content: center;
  text-align: center;
  height: 10vh;
  margin-bottom: 10px;
}
.removeButton {
  position: absolute;
  top: 5px;
  right: 5px;
}
.imgContainer {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid;
  border-radius: 15px;
  flex-wrap: wrap; /* 줄바꿈 처리 */
  justify-content: center; /* 가운데 정렬 */
}
.imgContainer div {
  margin-bottom: 5px;
}
.imgText {
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}
.imgText small {
  display: block;
  text-align: left;
}
.textContainer {
  display: block;
  justify-content: center;
  width: 80%;
  text-align: left;
  margin-bottom: 20px;
}
.tagContainer {
  text-align: left;
  width: 80%;
  text-align: left;
}
.btnContainer {
  margin-top: 20px;
}
.btnContainer button {
  margin-left: 10px;
}
</style>
