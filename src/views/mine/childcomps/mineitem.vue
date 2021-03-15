<template>
  <div>
    <vgrid :icons="icons" :num="4"></vgrid>
    <div class="fabu">
      <div class="zuo">
        <div class="title"><img src="~assets/img/up.svg" alt="" />发布你的第一个视频</div>
        <div class="futitle">领限定头像挂件，赢活动奖金</div>
      </div>
      <div class="you"><img src="~assets/img/fabu.svg" alt="" />发布有奖</div>
    </div>
    <div class="biaoti">推荐服务</div>
    <vgrid :icons="tuijian" :num="4"></vgrid>
    <div class="biaoti">更多服务</div>
    <div class="item">
      <div class="left">
        <img src="~assets/img/kefu.svg" alt="" />
        <span>联系客服</span>
      </div>
      <div class="right">＞</div>
    </div>
    <div class="item">
      <div class="left">
        <img src="~assets/img/ketang.svg" alt="" />
        <span>课堂模式</span>
      </div>
      <div class="right">＞</div>
    </div>
    <div class="item">
      <div class="left">
        <img src="~assets/img/qing.svg" alt="" />
        <span>青少年模式</span>
      </div>
      <div class="right">＞</div>
    </div>
    <div class="item">
      <div class="left">
        <img src="~assets/img/she.svg" alt="" />
        <span>设置</span>
      </div>
      <div class="right">＞</div>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
import vgrid from "components/vant/vgrid.vue";
export default {
  name: "mineitem",
  data() {
    return {
      icons: [
        { title: "离线缓存", img: require("@/assets/img/huan.svg") },
        { title: "历史记录", img: require("@/assets/img/lishi.svg") },
        { title: "我的收藏", img: require("@/assets/img/shoublue.svg") },
        { title: "稍后再看", img: require("@/assets/img/shao.svg") },
      ],
      tuijian: [
        { title: "我的课程", img: require("@/assets/img/ke.svg") },
        { title: "免流量", img: require("@/assets/img/mian.svg") },
        { title: "个性装扮", img: require("@/assets/img/ge.svg") },
        { title: "好友红包", img: require("@/assets/img/yao.svg") },
        { title: "我的钱包", img: require("@/assets/img/qian.svg") },
        { title: "会员购", img: require("@/assets/img/gou.svg") },
        { title: "直播中心", img: require("@/assets/img/zb.svg") },
        { title: "创作中心", img: require("@/assets/img/chuang.svg") },
        { title: "反馈论坛", img: require("@/assets/img/fan.svg") },
        { title: "充能福利", img: require("@/assets/img/fu.svg") },
      ],
    };
  },

  components: { vgrid },

  computed: {},

  methods: {},
};
</script>
<style scoped>
.biaoti {
  font-size: 14px;
  margin: 5px 10px;
}
.item {
  display: flex;
  padding: 10px;
  justify-content: space-between;
}
.left {
  display: flex;
  align-items: center;
  font-size: 12px;
}
.left img {
  height: 20px;
  width: 20px;
  margin-right: 5px;
}
.empty {
  height: 50px;
}
.right {
  color: #aaa;
  font-size: 12px;
}
.fabu{
  display: flex;
  background: linear-gradient(90deg, white, pink);
  margin: 10px;
  padding: 10px 5px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}
.fabu img{
  height: 15px;
  width: 15px;
  margin-right: 5px;
}
.title{
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-bottom: 3px;
}
.futitle{
  font-size: 12px;
  color: #aaa;
}
.you{
  background-color: #fb7299;
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 15px;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
}
</style>