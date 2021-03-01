<template>
  <div>
    <div class="items">
      <div
        v-for="(item, i) in homedata"
        :key="i"
        class="item"
        @click="tovideo(item.id)"
      >
        <div class="shang">
          <img v-if="item.img" :src="item.img" :onerror="changeimg" />
        </div>
        <div class="xia">
          <div class="title">{{ item.id }}{{ item.name }}</div>
          <div class="gengxin">更新至第23话</div>
        </div>
      </div>
    </div>
    <div class="wanzhen">查看完整时间表&nbsp;＞</div>
  </div>
</template>

<script>
export default {
  name: "zhoutui",
  data() {
    return {
      changeimg: 'this.src="' + require("@/assets/img/tidai.jpg") + '"',
    };
  },

  props: ["homedata"],

  components: {},

  computed: {},

  methods: {
    tovideo(id) {
      this.$router.push("/detail/" + id);
    },
  },
};
</script>
<style scoped>
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.item {
  width: 75px;
}
.shang img {
  width: 75px;
  height: 75px;
  border-radius: 10px;
}
.title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
}
.gengxin {
  color: #aaa;
  font-size: 12px;
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
</style>