<template>
  <div id="zhuifan" v-if="show">
    <vrefresh
      @refresh="refresh"
      :loading="loading"
      @loadingchange="loadingchange"
    >
      <div class="top">
        <vswipe :banner="banner" hight="165px" :shadow="true"></vswipe>
      </div>
      <div class="grids">
        <vgrid :icons="icons" :num="5"></vgrid>
      </div>
      <xiangzhui :hometab="hometab[3].list" title="更新至第233话"></xiangzhui>
      <div class="fanju">
        <zhuisi :hometab="hometab[3].list" title="番剧推荐"></zhuisi>
      </div>
      <div class="fanju">
        <zhuisi :hometab="hometab[3].list" title="国创推荐"></zhuisi>
      </div>
      <tabcontrol
        @tabclick="tabclick"
        :titles="titles"
        class="tabcon"
      ></tabcontrol>
      <div class="tui">
        <zhoutui :homedata="hometab[current].list"></zhoutui>
      </div>
      <bangdan :hometab="hometab"></bangdan>
      <threeitem :hometab="hometab[4].list" title="搞笑·番剧"></threeitem>
      <threeitem :hometab="hometab[5].list" title="热血·番剧"></threeitem>
      <threeitem
        :hometab="hometab[6].list"
        title="校园·番剧"
        :three="false"
      ></threeitem>
      <div class="di">╮(╯3╰)╭&nbsp;再怎么找也没有啦</div>
    </vrefresh>
  </div>
</template>

<script>
import vswipe from "components/vant/vswipe.vue";
import vrefresh from "components/vant/vrefresh.vue";
import vgrid from "components/vant/vgrid.vue";
import zhuisi from "./zhuisi";
import tabcontrol from "components/content/tabcontrol.vue";
import zhoutui from "./zhoutui.vue";
import bangdan from "./bangdan.vue";
import threeitem from "./threeitem.vue";
import xiangzhui from "./xiangzhui.vue";
import { usersdata } from "common/const.js";
export default {
  name: "zhuifan",
  data() {
    return {
      loading: false,
      banner: [
        require("@/assets/img/zhuifan1.png"),
        require("@/assets/img/zhuifan2.png"),
        require("@/assets/img/zhuifan3.png"),
        require("@/assets/img/zhuifan4.png"),
        require("@/assets/img/zhuifan5.jpg"),
      ],
      icons: [
        { title: "全部内容", img: require("@/assets/img/fl.svg") },
        { title: "番剧", img: require("@/assets/img/bofan.svg") },
        { title: "国创", img: require("@/assets/img/guo.svg") },
        { title: "时间表", img: require("@/assets/img/time.svg") },
        { title: "一月新番", img: require("@/assets/img/xin.svg") },
      ],
      hometab: {},
      show: false,
      titles: ["一", "二", "三", "四", "五", "六", "日"],
      current: 0,
      pagesize: 8,
      numsize: 7,
    };
  },

  mixins: [usersdata],

  components: {
    vswipe,
    vrefresh,
    vgrid,
    zhuisi,
    tabcontrol,
    zhoutui,
    bangdan,
    threeitem,
    xiangzhui,
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
    tabclick(index) {
      //console.log(index)
      this.titles = ["一", "二", "三", "四", "五", "六", "日"];
      this.titles[index] = "周" + this.titles[index];
      this.current = index;
    },
  },
};
</script>
<style scoped>
#zhuifan {
  background-color: #fff;
}
.top {
  padding: 10px 8px 0 8px;
}
.top img {
  border-radius: 10px;
}
.fanju,
.grids {
  border-bottom: solid 1px #ebebeb;
  margin-top: 10px;
}
.di {
  width: 100%;
  height: 70px;
  font-size: 12px;
  padding: 10px;
  color: #aaa;
  text-align: center;
}
.tabcon,
.tui {
  padding: 20px 20px 0 20px;
}
.tui {
  border-bottom: solid 1px #ebebeb;
}
</style>