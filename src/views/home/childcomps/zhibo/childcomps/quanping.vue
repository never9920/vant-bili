<template>
  <div>
    <div class="navbar">
      <vicon
        name="arrow-left"
        size="20px"
        color="white"
        @click.native="toback"
      ></vicon>
      <div class="text">网游</div>
      <vicon
        name="search"
        size="20px"
        color="white"
        @click.native="tosearch"
        class="right"
      ></vicon>
    </div>
    <div class="tabbar">
      <tabcon
        :titles="tabs"
        @tabclick="tabclick"
        :current="current"
        ref="tab"
      ></tabcon>
      <div @click="openpop" class="fenlei">
        <img src="@/assets/img/heng.svg" alt="" />
      </div>
    </div>
    <vrefresh
      @refresh="refresh"
      :loading="loading"
      @loadingchange="loadingchange"
    >
      <vlist
        @load="loadmore"
        :finished="hometab[current].finished"
        :care="hometab[current].loading"
        v-if="show"
        @changecare="changecare"
      >
        <list
          v-if="show"
          :hometab="hometab[current].list"
          :danhang="true"
          gaodu="120px"
          type="nei"
        ></list>
      </vlist>
    </vrefresh>
    <vpopup
      :morestatus="morestatus"
      @statusch="statusch"
      height="80%"
      :over="true"
    >
      <div class="shang">
        <div @click="toquan">全部</div>
        <div>网游</div>
        <div @click="closepop">×</div>
      </div>
      <div class="xia">
        <div
          v-for="(item, i) in tabs"
          :key="i"
          @click="totabs(i)"
          class="items"
        >
          <img :src="item.img" alt="" />
          <div>{{ item.title }}</div>
        </div>
      </div>
    </vpopup>
  </div>
</template>

<script>
import vicon from "components/vant/vicon.vue";
import { usersdata } from "common/const.js";
import list from "../../list.vue";
import vrefresh from "components/vant/vrefresh.vue";
import vlist from "components/vant/vlist.vue";
import vpopup from "components/vant/vpopup.vue";
import tabcon from "./tabcon.vue";
export default {
  name: "quanping",
  data() {
    return {
      pagesize: 10,
      numsize: 9,
      loading: false,
      current: 2,
      tabs: [
        { title: "全部", img: require("@/assets/img/fl.svg") },
        { title: "绝地求生", img: require("@/assets/img/fupin.svg") },
        { title: "英雄联盟", img: require("@/assets/img/yx.jpg") },
        { title: "DOTA2", img: require("@/assets/img/xiaokang.svg") },
        { title: "DOTA", img: require("@/assets/img/zhongguo.svg") },
        { title: "穿越火线", img: require("@/assets/img/feiyi.svg") },
        { title: "CS:GO", img: require("@/assets/img/qiyao.svg") },
        { title: "DNF", img: require("@/assets/img/yiliao.svg") },
        { title: "炉石传说", img: require("@/assets/img/bao.svg") },
      ],
      morestatus: false,
    };
  },

  mixins: [usersdata],

  components: { vicon, list, vrefresh, vlist, vpopup, tabcon },

  computed: {},

  methods: {
    tosearch() {
      this.$router.push("/search");
    },
    toback() {
      this.$router.back();
    },
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
    changecare(val) {
      //console.log(val);
      this.hometab[this.current].loading = val;
    },
    loadmore() {
      setTimeout(() => {
        this.getdetail(this.current);
      }, 1000);
    },
    openpop() {
      this.morestatus = true;
    },
    closepop() {
      this.morestatus = false;
    },
    statusch(val) {
      this.morestatus = val;
    },
    totabs(i) {
      this.current = i;
      this.morestatus = false;
      scrollTo(0, 0);
      if (i > 3) {
        this.$refs.tab.$refs.conrol.scrollTo({
          left: 45 * i,
          behavior: "smooth",
        });
      } else {
        this.$refs.tab.$refs.conrol.scrollTo({ left: 0, behavior: "smooth" });
      }
    },
    tabclick(i) {
      this.current = i;
    },
    toquan() {
      this.$router.push("/zhibo/quanbu");
    },
  },
};
</script>
<style scoped>
.navbar {
  height: 44px;
  background-color: #fb7299;
  padding: 0 10px;
  display: flex;
  align-items: center;
  color: #fff;
}
.text {
  margin-left: 10px;
}
.right {
  margin-left: auto;
}
.tabs {
  position: relative;
}
.fenlei {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 1;
  height: 40px;
  padding: 0;
  margin: 0;
}
.fenlei img {
  height: 40px;
  width: 30px;
  box-shadow: -2px 0 1px #ddd;
  padding: 0;
  margin: 0;
}
.shang {
  display: flex;
  height: 44px;
  padding: 0 10px;
  box-shadow: 0 2px 2px #f4f4f4;
  align-items: center;
  justify-content: space-between;
  color: #fb7299;
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
.tabbar {
  position: sticky;
  z-index: 1;
  top: 0;
  box-shadow: 0 1px 1px #ddd;
  margin-bottom: 5px;
}
</style>