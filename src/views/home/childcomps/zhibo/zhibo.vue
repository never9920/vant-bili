<template>
  <div id="zhibo">
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
          @delitem="delitem"
        ></list>
        <list
          v-if="show"
          :hometab="hometab[0].list"
          type="zhibo"
          :danhang="true"
          gaodu="140px"
          @delitem="delitem"
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
import { usersinfo } from "common/const.js";
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
      loading: false,
      icons: [
        {
          title: "王者荣耀",
          img: require("@/assets/img/wz.jpg"),
          path: "/zhibo/game",
        },
        {
          title: "全屏直播",
          img: require("@/assets/img/zb.svg"),
        },
        {
          title: "英雄联盟",
          img: require("@/assets/img/yx.jpg"),
          path: "/zhibo/quanping",
        },
        {
          title: "娱乐影视",
          img: require("@/assets/img/yule.svg"),
          path: "/zhibo/yule",
        },
        {
          title: "单机游戏",
          img: require("@/assets/img/youxi.svg"),
          path: "/zhibo/danji",
        },
        {
          title: "电台直播",
          img: require("@/assets/img/diantai.svg"),
          path: "/zhibo/diantai",
        },
        {
          title: "虚拟直播",
          img: require("@/assets/img/xn.svg"),
          path: "/zhibo/xuni",
        },
        {
          title: "英雄联盟手游",
          img: require("@/assets/img/yxsy.jpg"),
          path: "/zhibo/game",
        },
        {
          title: "视屏唱见",
          img: require("@/assets/img/cj.svg"),
          path: "/zhibo/yule",
        },
        {
          title: "全部标签",
          img: require("@/assets/img/fl.svg"),
          path: "/zhibo/quanbu",
        },
      ],
    };
  },

  mixins: [usersinfo],

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
    delitem(id) {
      for (let i in this.hometab[0].list) {
        if (id === this.hometab[0].list[i].id) {
          this.hometab[0].list.splice(i, 1);
          return
        }
      }
      for (let j in this.firsttab[0].list) {
        if (id === this.firsttab[0].list[j].id) {
          this.firsttab[0].list.splice(j, 1);
          console.log(this.firsttab[0].list)
          return
        }
      }
    },
  },
};
</script>
<style scoped>
#zhibo {
  background-color: #f6f6f6;
}
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