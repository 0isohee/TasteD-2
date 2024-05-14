<script>
import { ref } from 'vue';
export default {
  name: "ReviewBoardList",
  data() {
    return {
        formData : ref({
            title: "후기 등록",
            images: [], // 사용자 입력을 받을 이미지 URL 배열 변수
            tag: "Best", // 사용자 입력을 받을 태그 변수
            storeName: "대전 빵집 | 호두베이크샵", // 사용자 입력을 받을 가게 이름 변수
            description: "휘낭시에와 스콘 맛집입니다", // 사용자 입력을 받을 설명 변수
            writer: "SoHee Lee", // 사용자 입력을 받을 작성자 이름 변수
            date: "10 May 2024", // 사용자 입력을 받을 작성일 변수
            icon: "mdi-heart", // 사용자 입력을 받을 아이콘 변수
            eyeIcon: "mdi-eye", // 사용자 입력을 받을 조회수 아이콘 변수
            eyeCount: "1.4k", // 사용자 입력을 받을 조회수 변수
            commentIcon: "mdi-comment-outline", // 사용자 입력을 받을 댓글 아이콘 변수
            commentCount: "7 Comment", // 사용자 입력을 받을 댓글 수 변수
        }),
        maxImageCount: 3 // 최대 이미지 업로드 가능 개수
    }
  },
  methods: {
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
    }
  }
}
</script>

<template>
    <div>
        <div>
            <div class="titleContainer">
              <h3 class="text-h4 font-weight-medium pb-4">후기 등록</h3>
            </div>
          <!-- <v-divider></v-divider> -->
        </div>

        <v-row justify="center">
          <v-col cols="12" lg="12" xl="8">
            <div>
              <div align="center">
                <v-card flat color="transparent">
                  <v-row>
                    <!-- 각 이미지를 표시 -->
                    <v-col v-for="(image, index) in formData.images" :key="index" cols="12" sm="6" md="4">
                      <v-img
                        :src="image"
                        :aspect-ratio="16 / 9"
                        width="100%"
                        style="border-radius: 16px; margin-bottom: 10px;"
                      >
                        <v-btn
                          icon
                          color="error"
                          class="removeButton"
                          @click="removeImage(index)"
                        >
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-img>
                    </v-col>
                  </v-row>
    
                  <v-card-text class="Container">
                    <form>
                      <div class="imgContainer">
                        <div>
                          <label for="imageInput">이미지 추가: </label>
                          <input type="file" id="imageInput" accept="image/*" multiple @change="onFileChange">
                        </div>
                        <div class="imgText">
                          <small>* 사진은 최대 3개까지 업로드 가능합니다.</small>
                          <small>* JPG 또는 GIF 파일만 등록 가능하며, 파일 크기는 2MB 이하여야 합니다.</small>
                        </div>
                      </div>
                      <div>
                        <label>태그 등록 :  </label>
                        <input v-model="formData.tag" type="text" placeholder="태그">
                      </div>
      
                      <div class="text-h5 font-weight black--text pt-4">
                        <label>맛집의 이름을 입력해주세요 :  </label>
                        <input v-model="formData.storeName" type="text" placeholder="가게 이름">
                      </div>
      
                      <div class="text-body-1 py-4">
                        <label>가게 위치 :  </label>
                        <input v-model="formData.description" type="text" placeholder="설명">
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
                        <p class="text-subtitle-1 primary--text font-weight-medium">
                          안녕하세요
                        </p>
                      </div>
    
                      <div class="py-4">
                        <v-alert
                          class="font-italic text-h6 text-center"
                          border="left"
                          colored-border
                          color="accent"
                        >
                          안녕하세요
                        </v-alert>
                      </div>
                    </form>
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
</template>

<style scoped>
.Container {
  width: 100%;
  background-color: white;
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>
