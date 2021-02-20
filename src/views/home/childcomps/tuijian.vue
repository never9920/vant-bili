<template>
  <div>
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
        <list v-if="show" :hometab="hometab[1].list"></list>
      </vlist>
    </vrefresh>
  </div>
</template>

<script>
import vicon from "components/vant/vicon.vue";
import vrefresh from "components/vant/vrefresh.vue";
import vswipe from "components/vant/vswipe.vue";
import list from "./list";
import vlist from "components/vant/vlist.vue";
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
      hometab: {},
      show: false,
      loading: false,
      firsttab: {},
    };
  },

  created() {
    this.gethome();
  },

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
    async unshiftdetail(id) {
      const page = this.hometab[id].page + 1;
      const { data: res } = await this.$http.get(
        "/detail/" + this.hometab[id]._id,
        {
          params: { page, pagesize: 10 },
        }
      );
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
.top {
  margin: 5px 10px 0 5px;
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