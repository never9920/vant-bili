<template>
  <div>
    <div class="words">
      <div>热门榜单</div>
      <div class="right">查看更多 &nbsp; ＞</div>
    </div>
    <div class="tabcontrol">
      <div
        v-for="(item, index) in titles"
        :class="{ active: index === currentindex }"
        :key="index"
        class="controlitem"
        @click="itemclick(index)"
      >
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "yingshitab",
  data() {
    return {
      titles: ["热门电影", "热门纪录片", "热门电视剧", "热门综艺"],
      currentindex: 0,
    };
  },

  components: {},

  computed: {},

  methods: {
    itemclick(index) {
      this.currentindex = index;
      this.$emit("tabclick", index);
    },
  },
};
</script>
<style scoped>
.words {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 12px;
}
.right {
  color: #aaa;
}
.tabcontrol {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
}
.controlitem {
  flex: 1;
}
.controlitem span {
  padding: 5px;
  color: #aaa;
  font-size: 12px;
}
.active span {
  border-bottom: 2px solid #fb7299;
  color: black;
}
</style>