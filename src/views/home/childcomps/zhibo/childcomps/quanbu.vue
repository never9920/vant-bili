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
    <vtabs :tabs="tabs" :current="current" @change="change" class="vtab">
      <div class="xia">
        <div
          v-for="(item, i) in xiabiao[num]"
          :key="i"
          class="items"
          @click="todetail(i)"
        >
          <img :src="item.img" alt="" />
          <div>{{ item.title }}</div>
        </div>
      </div>
    </vtabs>
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
        { title: "网游", name: "quanping" },
        { title: "手游", name: "game" },
        { title: "单机游戏", name: "danji" },
        { title: "娱乐", name: "yule" },
        { title: "电台", name: "diantai" },
        { title: "虚拟主播", name: "xuni" },
        { title: "生活", name: "shenghuo" },
        { title: "学习", name: "xuexi" },
      ],
      current: "tuijian",
      num: 0,
      xiabiao: [
        [
          { title: "英雄联盟", img: require("@/assets/img/yx.jpg") },
          { title: "DOTA2", img: require("@/assets/img/xiaokang.svg") },
          { title: "DOTA", img: require("@/assets/img/zhongguo.svg") },
          { title: "穿越火线", img: require("@/assets/img/feiyi.svg") },
          { title: "王者荣耀", img: require("@/assets/img/wz.jpg") },
          { title: "和平精英", img: require("@/assets/img/zb.svg") },
          { title: "原神", img: require("@/assets/img/yx.jpg") },
          { title: "怀旧游戏", img: require("@/assets/img/xn.svg") },
          { title: "饥荒", img: require("@/assets/img/yule.svg") },
          { title: "植物大战僵尸", img: require("@/assets/img/yiliao.svg") },
          { title: "视屏唱见", img: require("@/assets/img/cj.svg") },
          { title: "视屏聊天", img: require("@/assets/img/zb.svg") },
          { title: "舞见", img: require("@/assets/img/yule.svg") },
          { title: "放松电台", img: require("@/assets/img/diantai.svg") },
          { title: "唱见电台", img: require("@/assets/img/fen.svg") },
          { title: "虚拟主播", img: require("@/assets/img/diantai.svg") },
          { title: "美食", img: require("@/assets/img/time.svg") },
          { title: "萌宠", img: require("@/assets/img/zongyi.svg") },
          { title: "人文社科", img: require("@/assets/img/shanghai.svg") },
          { title: "科技科普", img: require("@/assets/img/zongyi.svg") },
        ],
        [
          { title: "全部网游", img: require("@/assets/img/fl.svg") },
          { title: "绝地求生", img: require("@/assets/img/fupin.svg") },
          { title: "英雄联盟", img: require("@/assets/img/yx.jpg") },
          { title: "DOTA2", img: require("@/assets/img/xiaokang.svg") },
          { title: "DOTA", img: require("@/assets/img/zhongguo.svg") },
          { title: "穿越火线", img: require("@/assets/img/feiyi.svg") },
          { title: "CS:GO", img: require("@/assets/img/qiyao.svg") },
          { title: "DNF", img: require("@/assets/img/yiliao.svg") },
          { title: "炉石传说", img: require("@/assets/img/bao.svg") },
        ],
        [
          { title: "全部手游", img: require("@/assets/img/fl.svg") },
          { title: "王者荣耀", img: require("@/assets/img/wz.jpg") },
          { title: "和平精英", img: require("@/assets/img/zb.svg") },
          { title: "原神", img: require("@/assets/img/yx.jpg") },
          { title: "第五人格", img: require("@/assets/img/cj.svg") },
          { title: "LOL手游", img: require("@/assets/img/yxsy.jpg") },
          { title: "公主连结", img: require("@/assets/img/xn.svg") },
          { title: "火影忍者", img: require("@/assets/img/subao.svg") },
          { title: "明日方舟", img: require("@/assets/img/shanghai.svg") },
        ],
        [
          { title: "全部单机游戏", img: require("@/assets/img/fl.svg") },
          { title: "主机游戏", img: require("@/assets/img/zb.svg") },
          { title: "我的世界", img: require("@/assets/img/cj.svg") },
          { title: "独立游戏", img: require("@/assets/img/shanghai.svg") },
          { title: "恐怖游戏", img: require("@/assets/img/cun.svg") },
          { title: "怀旧游戏", img: require("@/assets/img/xn.svg") },
          { title: "饥荒", img: require("@/assets/img/yule.svg") },
          { title: "植物大战僵尸", img: require("@/assets/img/yiliao.svg") },
          { title: "格斗游戏", img: require("@/assets/img/subao.svg") },
        ],
        [
          { title: "全部娱乐", img: require("@/assets/img/fl.svg") },
          { title: "视屏唱见", img: require("@/assets/img/cj.svg") },
          { title: "视屏聊天", img: require("@/assets/img/zb.svg") },
          { title: "舞见", img: require("@/assets/img/yule.svg") },
          { title: "户外", img: require("@/assets/img/cun.svg") },
          { title: "日常", img: require("@/assets/img/xn.svg") },
        ],
        [
          { title: "全部电台", img: require("@/assets/img/fl.svg") },
          { title: "放松电台", img: require("@/assets/img/diantai.svg") },
          { title: "唱见电台", img: require("@/assets/img/fen.svg") },
          { title: "聊天电台", img: require("@/assets/img/add.svg") },
          { title: "配音", img: require("@/assets/img/bao.svg") },
        ],
        [
          { title: "全部虚拟主播", img: require("@/assets/img/fl.svg") },
          { title: "虚拟主播", img: require("@/assets/img/diantai.svg") },
          { title: "赛博朋克2077虚拟区", img: require("@/assets/img/fen.svg") },
        ],
        [
          { title: "全部生活", img: require("@/assets/img/fl.svg") },
          { title: "美食", img: require("@/assets/img/time.svg") },
          { title: "萌宠", img: require("@/assets/img/zongyi.svg") },
          { title: "时尚", img: require("@/assets/img/qiuzhu.svg") },
          { title: "影音馆", img: require("@/assets/img/pai.svg") },
        ],
        [
          { title: "全部学习", img: require("@/assets/img/fl.svg") },
          { title: "人文社科", img: require("@/assets/img/shanghai.svg") },
          { title: "科技科普", img: require("@/assets/img/zongyi.svg") },
          { title: "职业技能", img: require("@/assets/img/pai.svg") },
          { title: "陪伴学习", img: require("@/assets/img/diantai.svg") },
          { title: "绘画", img: require("@/assets/img/youxi.svg") },
        ],
      ],
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
      for (let i in this.tabs) {
        if (this.tabs[i].name === val) {
          this.num = i;
        }
      }
    },
    todetail(i) {
      if (this.current !== "tuijian") {
        this.$router.push("/zhibo/" + this.current);
      } else {
        if (i < 4) {
          this.$router.push("/zhibo/quanping");
        } else if (4 <= i && i < 7) {
          this.$router.push("/zhibo/game");
        } else if (7 <= i && i < 10) {
          this.$router.push("/zhibo/danji");
        } else if (10 <= i && i < 13) {
          this.$router.push("/zhibo/yule");
        } else if (13 <= i && i < 15) {
          this.$router.push("/zhibo/diantai");
        } else if (15 <= i && i < 16) {
          this.$router.push("/zhibo/xuni");
        } else if (16 <= i && i < 18) {
          this.$router.push("/zhibo/shenghuo");
        } else {
          this.$router.push("/zhibo/xuexi");
        }
      }
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
.xia {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.items {
  width: 100px;
  text-align: center;
  margin: 10px 5px;
  font-size: 14px;
  color: #666;
}
.items img {
  height: 40px;
  width: 40px;
}
.xia:after {
  display: inline-block;
  content: "";
  height: 0;
  width: 100px;
  margin: 10px;
}
</style>