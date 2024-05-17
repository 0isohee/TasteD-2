<!-- ReviewBoardInsert.vue -->
<script>
import { ref } from "vue";
export default {
  name: "ReviewBoardInsert",
  data() {
    return {
      formData: ref({
        title: "후기 등록",
        images: [], // 사용자 입력을 받을 이미지 URL 배열 변수
        tag: "", // 사용자 입력을 받을 태그 변수
        storeName: "", // 사용자 입력을 받을 가게 이름 변수
        storeAddress: "",
        storeComment: "", // 사용자 입력을 받을 설명 변수
        writer: "SoHee Lee", // 사용자 입력을 받을 작성자 이름 변수
        date: "10 May 2024", // 사용자 입력을 받을 작성일 변수
        icon: "mdi-heart", // 사용자 입력을 받을 아이콘 변수
        eyeIcon: "mdi-eye", // 사용자 입력을 받을 조회수 아이콘 변수
        eyeCount: "1.4k", // 사용자 입력을 받을 조회수 변수
        commentIcon: "mdi-comment-outline", // 사용자 입력을 받을 댓글 아이콘 변수
        commentCount: "7 Comment", // 사용자 입력을 받을 댓글 수 변수
        tag: "", // 사용자 입력을 받을 태그 변수
        tags: [], // 사용자가 입력한 태그를 저장할 배열
      }),
      maxImageCount: 3, // 최대 이미지 업로드 가능 개수,
      startwidth: "20px",
    };
  },
  methods: {
    confirmInsert() {
      // Confirm dialog
      if (confirm("해당 리뷰를 등록하시겠습니까?")) {
        // If "네" is selected
        console.log(this.formData); // 출력 formData
      } else {
        // If "아니요" is selected
        // Do nothing
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
                  <v-row>
                    <!-- 각 이미지를 표시 -->
                    <v-col
                      v-for="(image, index) in formData.images"
                      :key="index"
                      cols="12"
                      sm="6"
                      md="4"
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
                          >* JPG 또는 PNG 파일만 등록 가능하며, 파일 크기는 2MB
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
                          v-model="formData.storeName"
                          type="text"
                          placeholder="제목을 입력해주세요"
                          style="width: 500px; border-bottom: 0.1px solid black"
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
                          style="width: 28%; border-bottom: 0.1px solid black; margin-bottom: 20px"
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
                      <v-btn color="accent">글 등록</v-btn>
                      <v-btn color="accent">글 목록</v-btn>
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
}
.imgContainer div {
  margin-bottom: 10px;
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
</style>
