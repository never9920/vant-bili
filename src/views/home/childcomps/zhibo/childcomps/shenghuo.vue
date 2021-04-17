<template>
  <div>
    <div class="navbar">
      <vicon
        name="arrow-left"
        size="20px"
        color="white"
        @click.native="toback"
      ></vicon>
      <div class="text">生活</div>
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
          gaodu="140px"
          type="zhibo"
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
        <div>全部</div>
        <div>生活</div>
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
  name: "shenghuo",
  data() {
    return {
      pagesize: 10,
      numsize: 6,
      loading: false,
      current: 2,
      tabs: [
        { title: "全部", img: require("@/assets/img/fl.svg") },
        { title: "美食", img: require("@/assets/img/time.svg") },
        { title: "萌宠", img: require("@/assets/img/zongyi.svg") },
        { title: "时尚", img: require("@/assets/img/qiuzhu.svg") },
        { title: "影音馆", img: require("@/assets/img/pai.svg") },
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
.xia:after {
  display: inline-block;
  content: "";
  height: 0;
  width: 100px;
  margin: 10px;
}
</style>