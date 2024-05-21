<template>
  <div>
    <v-card app color="footerColor" dark flat>
      <v-container>
        <v-row align="start">
          <v-col cols="12" md="4">
            <div class="headerContainer">
              <h4 class="text-h5 font-weight-bold">유맛대전</h4>
              <p class="text-body-1">대전 맛집에 대한 정보를 공유합니다.</p>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <v-list color="transparent" flat>
              <v-subheader class="text-h6">LeeJiSu</v-subheader>
              <v-list-item-group color="footerColor">
                <v-list-item
                  v-for="(item, i) in LeeJiSu"
                  :key="i"
                  :href="item.href"
                  dense
                  target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-body-1" v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>

          <v-col cols="12" md="4">
            <v-list color="transparent" flat>
              <v-subheader class="text-h6">LeeSoHee</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item
                  v-for="(item, i) in LeeSoHee"
                  :key="i"
                  :href="item.href"
                  dense
                  target="_black"
                >
                  <v-list-item-content>
                    <v-list-item-title class="text-body-1" v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>

        <div class="text-center mt-6">
          Copyright &copy;
          <a
            class="white--text"
            href="https://edu.ssafy.com"
            rel="noopener noreferrer"
            target="_blank"
            >TasteD</a
          >
          {{ new Date().getFullYear() }}. All rights reserved.
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    LeeJiSu: [
      {
        text: "Github",
        href: "https://github.com/leejisu",
      },
      {
        text: "Velog",
        href: "https://velog.com",
      },
    ],
    LeeSoHee: [
      {
        text: "Github",
        href: "https://github.com/0isohee",
      },
      {
        text: "Velog",
        href: "https://velog.com/0isohee",
      },
    ],
  }),
};
</script>

<style scoped>
.v-card {
  position: relative;
}
.headerContainer {
  margin-top: 18px;
}
</style>
