<template>
  <div>
    <div class="words">
      <div>{{ title }}</div>
      <div class="right">查看全部 &nbsp; ＞</div>
    </div>
    <div class="items">
      <div v-for="(item, i) in hometab.slice(0, 4)" :key="i" class="item">
        <div class="shang">
          <img v-if="item.img" :src="item.img" :onerror="changeimg" />
          <div class="nei">2333万追番</div>
        </div>
        <div class="xia">
          <div class="title">{{ item.id }}{{ item.name }}</div>
          <div style="color: #aaa">更新至第233话</div>
        </div>
      </div>
    </div>
    <div class="shua">
      <img src="~assets/img/shua.svg" alt="" />
      <div>换一换</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zhuisi",
  data() {
    return {
      changeimg: 'this.src="' + require("@/assets/img/tidai.jpg") + '"',
    };
  },

  props: ["title", "hometab"],

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
.words {
  display: flex;
  justify-content: space-between;
  margin: 5px 10px;
  font-size: 12px;
}
.right {
  color: #aaa;
}
.items {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  margin: 5px 8px;
}
.item {
  width: 48.5%;
  margin: 5px 0;
}
.shang {
  position: relative;
}
.shang img {
  width: 100%;
  height: 100px;
  border-radius: 5px;
}
.xia {
  font-size: 10px;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 2px;
}
.nei {
  font-size: 10px;
  color: white;
  position: absolute;
  background-color: rgb(22, 22, 22, 0.4);
  width: 70px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  bottom: 5px;
  right: 5px;
}
.shua img {
  height: 10px;
  width: 10px;
  margin-right: 5px;
}
.shua {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #fb7299;
  height: 30px;
}
</style>