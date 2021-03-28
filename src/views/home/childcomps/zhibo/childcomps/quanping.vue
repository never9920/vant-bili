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
    <vtabs :tabs="tabs" :current="current" @change="change">
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
    </vtabs>
  </div>
</template>

<script>
import vicon from "components/vant/vicon.vue";
import vtabs from "components/vant/vtabs.vue";
import { usersdata } from "common/const.js";
import list from "../../list.vue";
import vrefresh from "components/vant/vrefresh.vue";
import vlist from "components/vant/vlist.vue";
export default {
  name: "game",
  data() {
    return {
      pagesize: 10,
      numsize: 9,
      loading: false,
      current: "0",
      tabs: [
        { title: "全部", name: "0" },
        { title: "绝地求生", name: "1" },
        { title: "英雄联盟", name: "2" },
        { title: "DOTA2", name: "3" },
        { title: "DOTA", name: "4" },
        { title: "穿越火线", name: "5" },
        { title: "CS:GO", name: "6" },
        { title: "DNF", name: "7" },
        { title: "炉石传说", name: "8" },
      ],
    };
  },

  mixins: [usersdata],

  components: { vicon, vtabs, list, vrefresh, vlist },

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
</style>