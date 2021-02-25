<template>
  <div class="item">
    <div class="shang">
      <img v-if="hometab.img" :src="hometab.img" :onerror="changeimg" />
      <div class="nei">更新至第233话</div>
    </div>
    <div class="xia">
      <div class="title">{{ hometab.id }}{{ hometab.name }}</div>
      <div style="color: #aaa">2333万追番</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zhuiitem",
  data() {
    return {
      changeimg: 'this.src="' + require("@/assets/img/tidai.jpg") + '"',
    };
  },

  props: ["hometab"],

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
.item {
  margin: 3px;
  width: 150px;
}
.shang img {
  width: 150px;
  height: 80px;
  border-radius: 5px;
}
.shang {
  position: relative;
}
.nei {
  font-size: 10px;
  color: white;
  position: absolute;
  background-color: rgb(22, 22, 22, 0.4);
  width: 90px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  bottom: 5px;
  right: 5px;
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
</style>