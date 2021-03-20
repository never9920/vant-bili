<template>
  <div>
    <vrefresh
      @refresh="refresh"
      :loading="loading"
      @loadingchange="loadingchange"
    >
      <vlist
        @load="loadmore"
        :finished="hometab[0].finished"
        :care="hometab[0].loading"
        v-if="show"
        @changecare="changecare"
      >
        <div class="top" v-show="firsttab[0].swipeshow">
          <vswipe :banner="banner" :shadow="true" hight="100px"></vswipe>
        </div>
        <div class="icons">
          <vgrid :icons="icons" :num="5" :danhang="true"></vgrid>
        </div>
        <div class="center">
          <img src="~assets/img/zhibo.svg" alt="" />
          推荐直播
        </div>
        <list
          v-if="show"
          :hometab="firsttab[0].list"
          type="zhibo"
          :danhang="true"
          gaodu="140px"
        ></list>
        <list
          v-if="show"
          :hometab="hometab[0].list"
          type="zhibo"
          :danhang="true"
          gaodu="140px"
        ></list>
      </vlist>
    </vrefresh>
  </div>
</template>

<script>
import vrefresh from "components/vant/vrefresh.vue";
import vswipe from "components/vant/vswipe.vue";
import list from "../list";
import vlist from "components/vant/vlist.vue";
import vgrid from "components/vant/vgrid.vue";
import { getcategory, getdetails } from "network/gethome.js";
export default {
  name: "zhibo",
  data() {
    return {
      banner: [
        require("@/assets/img/zhibo1.jpg"),
        require("@/assets/img/zhibo2.jpg"),
        require("@/assets/img/zhibo3.jpg"),
        require("@/assets/img/zhibo4.jpg"),
      ],
      hometab: {},
      show: false,
      loading: false,
      firsttab: {},
      icons: [
        { title: "王者荣耀", img: require("@/assets/img/wz.jpg") },
        { title: "全屏直播", img: require("@/assets/img/zb.svg") },
        { title: "英雄联盟", img: require("@/assets/img/yx.jpg") },
        { title: "娱乐影视", img: require("@/assets/img/yule.svg") },
        { title: "单机游戏", img: require("@/assets/img/youxi.svg") },
        { title: "电台直播", img: require("@/assets/img/diantai.svg") },
        { title: "虚拟直播", img: require("@/assets/img/xn.svg") },
        { title: "英雄联盟手游", img: require("@/assets/img/yxsy.jpg") },
        { title: "视屏唱见", img: require("@/assets/img/cj.svg") },
        { title: "全部标签", img: require("@/assets/img/fl.svg") },
      ],
    };
  },

  created() {
    this.gethome();
  },

  components: { vrefresh, vswipe, list, vlist, vgrid },

  computed: {},

  methods: {
    refresh() {
      this.loading = true;
      scrollTo(0, 0);
      setTimeout(() => {
        this.loading = false;
        this.firsttab[0].swipeshow = false;
        this.unshiftdetail(0);
      }, 1000);
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
      for (let i in this.hometab) {
        this.getdetail(i);
        this.firsttab[i] = {};
        this.firsttab[i].list = [];
        this.firsttab[i].swipeshow = true;
      }
      //console.log(this.firsttab)
    },
    async getdetail(id) {
      const page = this.hometab[id].page + 1;
      const res = await getdetails(this.hometab[id]._id, {
        page,
        pagesize: 10,
      });
      this.hometab[id].list.push(...res);
      this.hometab[id].page += 1;
      this.hometab[id].loading = false;
      if (res.length < 10) {
        this.hometab[id].finished = true;
      }
      this.show = true;
      //console.log(this.hometab)
    },
    async unshiftdetail(id) {
      const page = this.hometab[id].page + 1;
      const res = await getdetails(this.hometab[id]._id, {
        page,
        pagesize: 10,
      });
      this.hometab[id].list.unshift(...this.firsttab[id].list);
      this.firsttab[id].list = res;
      this.hometab[id].page += 1;
      this.hometab[id].loading = false;
      if (res.length < 10) {
        this.hometab[id].finished = true;
      }
      this.show = true;
      //console.log(this.hometab[id].list)
    },

    loadingchange(val) {
      this.loading = val;
    },
    loadmore() {
      setTimeout(() => {
        this.getdetail(0);
      }, 1000);
    },
    changecare(val) {
      //console.log(val);
      this.hometab[0].loading = val;
    },
  },
};
</script>
<style scoped>
.top {
  margin: 8px 10px 0 8px;
}
.icons {
  margin: 10px 8px;
  border-radius: 5px;
  overflow: hidden;
}
.center {
  display: flex;
  font-size: 15px;
  align-items: center;
  margin: 10px 8px 10px;
}
.center img {
  height: 15px;
  width: 15px;
  margin-right: 10px;
}
</style>