<template>
  <div id="remen">
    <vrefresh
      @refresh="refresh"
      :loading="loading"
      @loadingchange="loadingchange"
    >
      <vlist
        @load="loadmore"
        :finished="hometab[2].finished"
        :care="hometab[2].loading"
        v-if="show"
        @changecare="changecare"
      >
        <vgrid :icons="icons" :num="4"></vgrid>
        <relist v-if="show" :hometab="hometab[2].list"></relist>
      </vlist>
    </vrefresh>
  </div>
</template>

<script>
import vgrid from "components/vant/vgrid.vue";
import relist from "./relist.vue";
import vrefresh from "components/vant/vrefresh.vue";
import vlist from "components/vant/vlist.vue";
import { usersdata } from "common/const.js";
export default {
  name: "remen",
  data() {
    return {
      icons: [
        { title: "日排行榜", img: require("@/assets/img/pai.svg") },
        { title: "每周必看", img: require("@/assets/img/zhou.svg") },
        { title: "入站必刷", img: require("@/assets/img/jiang.svg") },
        { title: "春节电影", img: require("@/assets/img/chun.svg") },
      ],
      loading: false,
      pagesize: 10,
      numsize: 3,
    };
  },

  mixins: [usersdata],

  created() {
    this.gethome();
  },

  components: { vgrid, relist, vrefresh, vlist },

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
    changecare(val) {
      //console.log(val);
      this.hometab[2].loading = val;
    },
    loadmore() {
      setTimeout(() => {
        this.getdetail(2);
      }, 1000);
    },
  },
};
</script>
<style scoped>
#remen {
  background-color: #fff;
}
</style>