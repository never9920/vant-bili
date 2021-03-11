<template>
  <div>
    <div class="fenqu">
      <div
        v-for="(item, i) in icons"
        :key="i"
        class="item"
        @click="todetail(i)"
      >
        <img :src="item.img" alt="" />
        <div class="title">{{ item.title }}</div>
      </div>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
export default {
  name: "fenqu",
  data() {
    return {
      icons: [
        { title: "番剧", img: require("@/assets/img/wz.jpg") },
        { title: "国创", img: require("@/assets/img/guo.svg") },
        { title: "放映厅", img: require("@/assets/img/yx.jpg") },
        { title: "纪录片", img: require("@/assets/img/yule.svg") },
        { title: "漫画", img: require("@/assets/img/youxi.svg") },
        { title: "专栏", img: require("@/assets/img/diantai.svg") },
        { title: "直播", img: require("@/assets/img/xn.svg") },
        { title: "课堂", img: require("@/assets/img/yxsy.jpg") },
        { title: "动画", img: require("@/assets/img/cj.svg") },
        { title: "音乐", img: require("@/assets/img/fl.svg") },
        { title: "舞蹈", img: require("@/assets/img/zb.svg") },
        { title: "游戏", img: require("@/assets/img/pai.svg") },
        { title: "知识", img: require("@/assets/img/zhou.svg") },
        { title: "数码", img: require("@/assets/img/jiang.svg") },
        { title: "生活", img: require("@/assets/img/chun.svg") },
        { title: "美食", img: require("@/assets/img/time.svg") },
        { title: "动物园", img: require("@/assets/img/xin.svg") },
        { title: "VLOG", img: require("@/assets/img/bofan.svg") },
        { title: "鬼畜", img: require("@/assets/img/chun.svg") },
        { title: "时尚", img: require("@/assets/img/dianshi.svg") },
        { title: "娱乐", img: require("@/assets/img/jilu.svg") },
        { title: "音乐PLUS", img: require("@/assets/img/zongyi.svg") },
        { title: "影视", img: require("@/assets/img/together.svg") },
        { title: "电影", img: require("@/assets/img/qiyu1.svg") },
        { title: "电视剧", img: require("@/assets/img/bao.svg") },
        { title: "会员购", img: require("@/assets/img/subao.svg") },
        { title: "专题中心", img: require("@/assets/img/shanghai.svg") },
        { title: "全区排行榜", img: require("@/assets/img/yiliao.svg") },
        { title: "活动中心", img: require("@/assets/img/qiuzhu.svg") },
        { title: "小黑屋", img: require("@/assets/img/qiyao.svg") },
        { title: "游戏中心", img: require("@/assets/img/fupin.svg") },
        { title: "游戏赛事", img: require("@/assets/img/xiaokang.svg") },
        { title: "音频", img: require("@/assets/img/cun.svg") },
      ],
    };
  },

  components: {},

  computed: {},

  methods: {
    todetail(i) {
      console.log(i);
    },
  },
};
</script>
<style scoped>
.fenqu {
  padding: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.item {
  width: 24%;
  height: 60px;
  text-align: center;
  padding: 10px 0;
}
.item img {
  width: 30px;
  height: 30px;
  margin-bottom: 10px;
}
.title {
  font-size: 12px;
}
.empty {
  height: 50px;
}
</style>