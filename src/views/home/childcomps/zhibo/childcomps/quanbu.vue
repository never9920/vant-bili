<template>
  <div>
    <div class="navbar">
      <vicon
        name="arrow-left"
        size="20px"
        color="black"
        @click.native="toback"
      ></vicon>
      <div class="text">全部标签</div>
      <div class="right">编辑</div>
    </div>
    <vtabs
      :tabs="tabs"
      :current="current"
      @change="change"
      class="vtab"
    ></vtabs>
  </div>
</template>

<script>
import vicon from "components/vant/vicon.vue";
import vtabs from "components/vant/vtabs.vue";
export default {
  name: "quanbu",
  data() {
    return {
      tabs: [
        { title: "推荐", name: "tuijian" },
        { title: "网游", name: "wangyou" },
        { title: "手游", name: "shouyou" },
        { title: "单机游戏", name: "danji" },
        { title: "娱乐", name: "yule" },
        { title: "电台", name: "diantai" },
        { title: "虚拟主播", name: "xuni" },
        { title: "生活", name: "shenghuo" },
        { title: "学习", name: "xuexi" },
      ],
      current: "tuijian",
    };
  },

  components: { vicon, vtabs },

  computed: {},

  methods: {
    toback() {
      this.$router.back();
    },
    change(val) {
      this.current = val;
    },
  },
};
</script>
<style scoped>
.navbar {
  height: 44px;
  background-color: #fff;
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: black;
}
.text {
  margin-left: 10px;
}
.right {
  margin-left: auto;
}
.vtab {
  border-top: solid 1px #f4f4f4;
}
</style>