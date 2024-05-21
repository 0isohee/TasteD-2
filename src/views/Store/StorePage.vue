<script>
export default {
  name: "StoreBoardPage",
  props: {
    pageNo: {
      type: Number,
      required: true,
    },
  },
  created() {
    this.fetchData();
  },
  watch: {
    pageNo() {
      this.fetchData();
    },
  },
  methods: {
    fetchData() {
      console.log(`Fetching data for page ${this.pageNo}`);
      // 예: this.$store.dispatch('getStoreList', this.pageNo);
    },
  },
};
</script>

<template>
  <div>
    <!-- 여기에 페이지 번호에 따른 내용을 렌더링합니다. -->
    <p>현재 페이지: {{ pageNo }}</p>
  </div>
</template>

<style scoped></style>
