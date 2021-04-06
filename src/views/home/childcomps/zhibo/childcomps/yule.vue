<template>
  <div>
    <div class="navbar">
      <vicon
        name="arrow-left"
        size="20px"
        color="white"
        @click.native="toback"
      ></vicon>
      <div class="text">娱乐</div>
      <vicon
        name="search"
        size="20px"
        color="white"
        @click.native="tosearch"
        class="right"
      ></vicon>
    </div>
    <vtabs
      :tabs="tabs"
      :current="current"
      @change="change"
      class="tabs"
      :btn="true"
    >
      <div @click="openpop" class="fenlei">
        <img src="@/assets/img/heng.svg" alt="" />
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
    </vtabs>
    <vpopup
      :morestatus="morestatus"
      @statusch="statusch"
      height="80%"
      :over="true"
    ></vpopup>
  </div>
</template>

<script>
import vicon from "components/vant/vicon.vue";
import vtabs from "components/vant/vtabs.vue";
import { usersdata } from "common/const.js";
import list from "../../list.vue";
import vrefresh from "components/vant/vrefresh.vue";
import vlist from "components/vant/vlist.vue";
import vpopup from "components/vant/vpopup.vue";
export default {
  name: "game",
  data() {
    return {
      pagesize: 10,
      numsize: 6,
      loading: false,
      current: "1",
      tabs: [
        { title: "全部", name: "0" },
        { title: "视屏唱见", name: "1" },
        { title: "视屏聊天", name: "2" },
        { title: "舞见", name: "3" },
        { title: "户外", name: "4" },
        { title: "日常", name: "5" },
      ],
      morestatus: false,
    };
  },

  mixins: [usersdata],

  components: { vicon, vtabs, list, vrefresh, vlist, vpopup },

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
    change(val) {
      this.current = val;
      //console.log(val)
    },
    openpop() {
      this.morestatus = true;
    },
    statusch(val) {
      this.morestatus = val;
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
  height: 44px;
  padding: 0;
  margin: 0;
}
.fenlei img {
  height: 44px;
  width: 30px;
  box-shadow: -2px 0 1px #ddd;
  padding: 0;
  margin: 0;
}
</style>