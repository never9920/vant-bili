<template>
  <div class="tabs">
    <div class="left">
      <div class="item" :class="{ huodong: current === 0 }" @click="to0">
        简介
      </div>
      <div class="item" :class="{ huodong: current === 1 }" @click="to1">
        评论({{ numlength }})
      </div>
    </div>
    <div class="right">
      <div class="text">点我发弹幕</div>
      <div class="img" @click="danmu" v-if="isshow">
        <img src="~assets/img/dankai.svg" alt="" />
      </div>
      <div class="img" @click="danmu" v-else>
        <img src="~assets/img/danguan.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { getcomment } from "network/gethome.js";
export default {
  name: "detailtab",
  data() {
    return {
      isshow: true,
      numlength: 0,
      current: 0,
    };
  },

  created() {
    this.getcomitem();
  },

  watch: {
    $route() {
      this.getcomitem();
    },
  },

  components: {},

  computed: {},

  methods: {
    danmu() {
      this.isshow = !this.isshow;
      if (this.isshow) {
        this.$toast("弹幕已打开");
      } else {
        this.$toast("弹幕已关闭");
      }
    },
    async getcomitem() {
      //console.log(this.$route.params.id);
      const res = await getcomment(this.$route.params.id);
      //console.log(res);
      if (res) {
        this.numlength = res.length;
      }
      //console.log(this.commdentdata);
    },
    to0() {
      this.current = 0;
      this.$emit("typech", 0);
    },
    to1() {
      this.current = 1;
      this.$emit("typech", 1);
    },
  },
};
</script>
<style scoped>
.tabs {
  display: flex;
  padding: 5px 15px;
  justify-content: space-between;
  height: 30px;
  box-shadow: 0 2px 2px #f4f4f4;
  position: sticky;
  top: 40px;
  z-index: 1;
  background-color: #fff;
}
.left {
  font-size: 12px;
  display: flex;
}
.item {
  padding: 6px 0;
  margin: 0 15px;
}
.right {
  font-size: 14px;
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  color: #aaa;
  padding: 10px 0 10px 10px;
  border-radius: 15px;
}
.right img {
  width: 30px;
  height: 20px;
  padding: 0 5px;
}
.text {
  padding: 0 5px;
}
.img {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 30px;
  padding: 0 3px;
  border-radius: 0 15px 15px 0;
  border: solid 1px #f1f1f1;
}
.huodong {
  color: #fb7299;
  background-color: #fff;
  border-bottom: solid 2px #fb7299;
}
</style>