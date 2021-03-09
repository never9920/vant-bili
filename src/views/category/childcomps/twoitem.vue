<template>
  <div class="two">
    <div class="bar">
      <div>
        <div class="title">{{ title }}</div>
        <div class="gengxin">{{ time }}前更新</div>
      </div>
      <div class="ding">{{ num }}万&nbsp;订阅</div>
    </div>
    <list :hometab="hometab" type="dingyue"></list>
    <div class="more">精选视频1420个&nbsp;＞</div>
  </div>
</template>

<script>
import list from "../../home/childcomps/list.vue";
export default {
  name: "twoitem",
  data() {
    return {};
  },

  props: ["hometab", "title", "num", "time"],

  components: { list },

  computed: {},

  methods: {},
};
</script>
<style scoped>
.two {
  padding: 10px 0;
  border-bottom: solid 1px #e6e6e6;
}
.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 7px;
}
.title {
  font-size: 18px;
  margin: 5px 0;
}
.gengxin {
  color: #aaa;
  font-size: 12px;
}
.ding {
  font-size: 14px;
  color: #fb7299;
  border: solid 1px #fb7299;
  border-radius: 5px;
  padding: 5px 20px;
}
.more {
  font-size: 12px;
  color: #aaa;
  padding: 10px 0 0 7px;
}
</style>