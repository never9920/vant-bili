<template>
  <div id="bangdan">
    <div class="words">
      <div>热门榜单</div>
      <div class="right">查看更多 &nbsp; ＞</div>
    </div>
    <div class="test">
      <bangitem :hometab="hometab[1].list" title="热门番剧"></bangitem>
      <bangitem :hometab="hometab[2].list" title="热门国创"></bangitem>
      <bangitem :hometab="hometab[3].list" title="热门国创相关"></bangitem>
    </div>
    <div class="wanzhen">查看完整榜单&nbsp;＞</div>
  </div>
</template>

<script>
import bangitem from "./bangitem.vue";
export default {
  name: "bangdan",
  data() {
    return {};
  },

  props: ["hometab"],

  components: { bangitem },

  computed: {},

  methods: {},
};
</script>
<style scoped>
#bangdan {
  border-bottom: solid 1px #ebebeb;
}
.wanzhen {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #fb7299;
  height: 30px;
  margin: 5px;
}
.words {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 12px;
}
.right {
  color: #aaa;
}
.test {
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  margin: 0 10px;
}
.test::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>