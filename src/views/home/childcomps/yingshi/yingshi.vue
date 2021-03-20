<template>
  <div id="yingshi" v-if="show">
    <vrefresh
      @refresh="refresh"
      :loading="loading"
      @loadingchange="loadingchange"
    >
      <div class="top">
        <vswipe :banner="banner" hight="180px" :shadow="true"></vswipe>
      </div>
      <longicons :icons="icons"></longicons>
      <xiangzhui :hometab="hometab[4].list" title="全23集"></xiangzhui>
      <zhuisi
        :hometab="hometab[5].list"
        title="正在热播"
        :num="6"
        :isshow="false"
        :xiashow="false"
        class="dixian"
      ></zhuisi>
      <zhuisi
        :hometab="hometab[6].list"
        title="综艺热播"
        :num="6"
        :xiashow="false"
        class="dixian"
        name="全部综艺"
      ></zhuisi>
      <sixitem
        :hometab="hometab[7].list"
        title="电影热播"
        name="全部电影"
      ></sixitem>
      <yingshitab @tabclick="tabclick"></yingshitab>
      <yingshidan :hometab="hometab[current].list"></yingshidan>
      <sixitem
        :hometab="hometab[8].list"
        title="纪录片热播"
        name="全部纪录片"
      ></sixitem>
      <zhuisi
        :hometab="hometab[9].list"
        title="电视剧热播"
        :num="6"
        :xiashow="false"
        class="dixian"
        name="全部电视剧"
      ></zhuisi>
      <threeitem
        :hometab="hometab[0].list"
        title="怪兽电影合集"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[1].list"
        title="大开眼界！职场图鉴大赏"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[2].list"
        title="盘点2020年度豆瓣高分影视内容！"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[3].list"
        title="小众高分纪录片"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[4].list"
        title="高智商犯罪题材电影"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[5].list"
        title="给社畜以岁月静好"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[6].list"
        title="在？进来看老婆啦！"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[7].list"
        title="胆小勿入！不思异全系列来啦！"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[8].list"
        title="走胃走心很治愈，感恩有你陪伴！"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[9].list"
        title="中国影视最卖座电影"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[0].list"
        title="天冷了，窝被子里看部治愈片吧"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[1].list"
        title="豆瓣'评价'人数超100万的电影"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[2].list"
        title="金鸡奖最佳故事片"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[3].list"
        title="浴室必备！流行金曲"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[4].list"
        title="论吃货的自我修养"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[5].list"
        title="宝藏大叔【松重丰】"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[6].list"
        title="我的老师，我的青春！"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[7].list"
        title="欢迎来到【艺术剧场】"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[8].list"
        title="太烧脑，根本停不下来！"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[9].list"
        title="进击的地球"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[0].list"
        title="脑洞超大！"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[1].list"
        title="贝爷勇闯天涯"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <threeitem
        :hometab="hometab[2].list"
        title="新年新气象"
        :zuoshow="true"
        :xiashow="false"
      ></threeitem>
      <zhuisi
        :hometab="hometab[3].list"
        title="猜你喜欢"
        :isshow="false"
        class="dixian"
      ></zhuisi>
      <div class="di">╮(╯3╰)╭&nbsp;再怎么找也没有啦</div>
    </vrefresh>
  </div>
</template>

<script>
import vswipe from "components/vant/vswipe.vue";
import vrefresh from "components/vant/vrefresh.vue";
import xiangzhui from "../zhuifan/xiangzhui.vue";
import longicons from "./longicons.vue";
import zhuisi from "../zhuifan/zhuisi.vue";
import sixitem from "./sixitem.vue";
import threeitem from "../zhuifan/threeitem.vue";
import yingshitab from "./yingshitab.vue";
import yingshidan from "./yingshidan.vue";
import { getcategory, getdetails } from "network/gethome.js";
export default {
  name: "yingshi",
  data() {
    return {
      show: false,
      loading: false,
      banner: [
        require("@/assets/img/yingshi1.jpg"),
        require("@/assets/img/yingshi2.jpg"),
        require("@/assets/img/yingshi3.jpg"),
        require("@/assets/img/yingshi4.jpg"),
        require("@/assets/img/yingshi5.jpg"),
      ],
      hometab: {},
      icons: [
        { name: "全部内容", icon: require("@/assets/img/fl.svg") },
        { name: "电影", icon: require("@/assets/img/chun.svg") },
        { name: "电视剧", icon: require("@/assets/img/dianshi.svg") },
        { name: "纪录片", icon: require("@/assets/img/jilu.svg") },
        { name: "综艺", icon: require("@/assets/img/zongyi.svg") },
        { name: "一起看", icon: require("@/assets/img/together.svg") },
        { name: "奇食记", icon: require("@/assets/img/qiyu1.svg") },
        { name: "抱抱独播", icon: require("@/assets/img/bao.svg") },
      ],
      current: 0,
    };
  },

  created() {
    this.gethome();
  },

  components: {
    vswipe,
    vrefresh,
    xiangzhui,
    longicons,
    zhuisi,
    sixitem,
    threeitem,
    yingshitab,
    yingshidan,
  },

  computed: {},

  methods: {
    refresh() {
      this.loading = true;
      scrollTo(0, 0);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    loadingchange(val) {
      this.loading = val;
    },
    async gethome() {
      const res = await getcategory();
      //console.log(res)
      this.changedata(res);
      //console.log(typeof(this.current))
    },
    changedata(val) {
      const category = val.map((item, index) => {
        item.list = [];
        item.page = -1;
        item.loading = false;
        item.finished = false;
        return item;
      });
      this.hometab = category;
      for (var i = 0; i < 10; i++) {
        this.getdetail(i, 8);
      }
    },
    async getdetail(id, pagesize) {
      const page = this.hometab[id].page + 1;
      const res = await getdetails(this.hometab[id]._id, {
        page,
        pagesize: pagesize,
      });
      this.hometab[id].list = res;
      this.hometab[id].page += 1;
      this.hometab[id].loading = false;
      if (res.length < 10) {
        this.hometab[id].finished = true;
      }
      this.show = true;
    },
    tabclick(index) {
      this.current = index;
    },
  },
};
</script>
<style scoped>
#yingshi {
  background-color: #fff;
}
.top {
  padding: 10px 8px 0 8px;
}
.top img {
  border-radius: 10px;
}
.dixian {
  border-bottom: solid 1px #ebebeb;
}
.di {
  width: 100%;
  height: 70px;
  font-size: 12px;
  padding: 10px;
  color: #aaa;
  text-align: center;
}
</style>