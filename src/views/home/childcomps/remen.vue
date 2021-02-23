<template>
  <div>
    <vgrid :icons="icons" :num="4"></vgrid>
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
        <relist
          v-if="show"
          :hometab="hometab[2].list"
          type="zhibo"
          :danhang="true"
          gaodu="140px"
        ></relist>
      </vlist>
    </vrefresh>
  </div>
</template>

<script>
import vgrid from "../../../components/vant/vgrid.vue";
import relist from "./relist.vue";
import vrefresh from "components/vant/vrefresh.vue";
import vlist from "components/vant/vlist.vue";
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
      hometab: {},
      show: false,
      loading: false,
    };
  },

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
    async gethome() {
      const { data: res } = await this.$http.get("/category");
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
      this.getdetail(2);
      //console.log(this.firsttab)
    },
    async getdetail(id) {
      const page = this.hometab[id].page + 1;
      const { data: res } = await this.$http.get(
        "/detail/" + this.hometab[id]._id,
        {
          params: { page, pagesize: 10 },
        }
      );
      this.hometab[id].list.push(...res);
      this.hometab[id].page += 1;
      this.hometab[id].loading = false;
      if (res.length < 10) {
        this.hometab[id].finished = true;
      }
      this.show = true;
      //console.log(this.hometab)
    },

    loadingchange(val) {
      this.loading = val;
    },
    loadmore() {
      setTimeout(() => {
        this.getdetail(2);
      }, 1000);
    },
    changecare(val) {
      //console.log(val);
      this.hometab[2].loading = val;
    },
  },
};
</script>
<style scoped>
</style>