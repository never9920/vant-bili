<template>
  <div>
    <div class="navbar">
      <vicon
        name="arrow-left"
        size="20px"
        color="white"
        @click.native="toback"
      ></vicon>
      <div class="text">虚拟主播</div>
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
        :btns="false"
      ></tabcon>
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
          gaodu="140px"
          type="zhibo"
        ></list>
      </vlist>
    </vrefresh>
  </div>
</template>

<script>
import vicon from "components/vant/vicon.vue";
import { usersdata } from "common/const.js";
import list from "../../list.vue";
import vrefresh from "components/vant/vrefresh.vue";
import vlist from "components/vant/vlist.vue";
import tabcon from "./tabcon.vue";
export default {
  name: "xuni",
  data() {
    return {
      pagesize: 10,
      numsize: 3,
      loading: false,
      current: 1,
      tabs: [
        { title: "全部", img: require("@/assets/img/fl.svg") },
        { title: "虚拟主播", img: require("@/assets/img/diantai.svg") },
        { title: "赛博朋克2077虚拟区", img: require("@/assets/img/fen.svg") },
      ],
    };
  },

  mixins: [usersdata],

  components: { vicon, list, vrefresh, vlist, tabcon },

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
    tabclick(i) {
      this.current = i;
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
.tabbar {
  position: sticky;
  z-index: 1;
  top: 0;
  box-shadow: 0 1px 1px #ddd;
  margin-bottom: 5px;
}
</style>