<template>
  <div class="navbar">
    <div class="left">
      <img :src="imgsrc" alt="" @click="tomine" />
    </div>
    <div class="center" @click="tosearch">
      <vicon name="search" size="16px"></vicon>
    </div>
    <div class="right" @click="tomessage">
      <vicon name="comment-circle-o" size="20px"></vicon>
    </div>
  </div>
</template>

<script>
import vicon from "../vant/vicon.vue";
export default {
  name: "navbar",
  data() {
    return {};
  },

  props: {
    imgsrc: {
      type: String,
    },
  },

  components: { vicon },

  computed: {},

  methods: {
    tomine() {
      this.$router.push("/mine");
    },
    tosearch() {
      this.$router.push("/search");
    },
    tomessage() {
      this.$router.push("/message");
    },
  },
};
</script>
<style scoped>
.navbar {
  width: 100%;
  background-color: #fff;
  height: 44px;
  display: flex;
  align-items: center;
}
.navbar img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.left {
  display: flex;
  align-items: center;
  margin: 0 20px 0 10px;
}
.center {
  width: 70%;
  height: 30px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  border-radius: 15px;
}
.right {
  margin: 0 auto;
}
</style>