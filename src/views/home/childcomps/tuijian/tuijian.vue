<template>
  <div id="tuijian">
    <vrefresh
      @refresh="refresh"
      :loading="loading"
      @loadingchange="loadingchange"
    >
      <vlist
        @load="loadmore"
        :finished="hometab[1].finished"
        :care="hometab[1].loading"
        v-if="show"
        @changecare="changecare"
      >
        <list v-if="show" :hometab="firsttab[1].list"></list>
        <div v-show="!firsttab[1].swipeshow" @click="refresh" class="text">
          <vicon name="replay"></vicon>
          上次刷新到这里，点击再次刷新
        </div>
        <div class="top" v-show="firsttab[1].swipeshow">
          <vswipe :banner="banner" hight="165px"></vswipe>
        </div>
        <list
          v-if="show"
          :hometab="hometab[1].list"
          gaodu="165px"
          type="tuijian"
        ></list>
      </vlist>
    </vrefresh>
  </div>
</template>

<script>
import vicon from "components/vant/vicon.vue";
import vrefresh from "components/vant/vrefresh.vue";
import vswipe from "components/vant/vswipe.vue";
import list from "../list";
import vlist from "components/vant/vlist.vue";
import { usersinfo } from "common/const.js";
export default {
  name: "tuijian",
  data() {
    return {
      banner: [
        require("@/assets/img/1.png"),
        require("@/assets/img/2.png"),
        require("@/assets/img/3.png"),
        require("@/assets/img/4.png"),
      ],
      loading: false,
    };
  },

  mixins: [usersinfo],

  components: { vicon, vrefresh, vswipe, list, vlist },

  computed: {},

  methods: {
    refresh() {
      this.loading = true;
      scrollTo(0, 0);
      setTimeout(() => {
        this.loading = false;
        this.firsttab[1].swipeshow = false;
        this.unshiftdetail(1);
      }, 1000);
    },
    loadingchange(val) {
      this.loading = val;
    },
    loadmore() {
      setTimeout(() => {
        this.getdetail(1);
      }, 1000);
    },
    changecare(val) {
      //console.log(val);
      this.hometab[1].loading = val;
    },
  },
};
</script>
<style scoped>
#tuijian {
  background-color: #f6f6f6;
}
.top {
  margin: 10px 8px 0 8px;
}
.top img {
  border-radius: 10px;
}
.text {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fb7a9f;
}
</style>