<template>
  <div>
    <navbar :imgsrc="imgsrc"></navbar>
    <div class="center">
      <vtab :tabs="tabs" :current="current" @change="change">
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
            <div class="top" v-show="firsttab[current].swipeshow">
              <vswipe :banner="banner" hight="165px"></vswipe>
            </div>
            <list v-if="show" :hometab="firsttab[current].list"></list>
            <div
              v-show="!firsttab[current].swipeshow"
              @click="refresh"
              class="text"
            >
              <vicon name="replay"></vicon>
              上次刷新到这里，点击再次刷新
            </div>
            <list v-if="show" :hometab="hometab[current].list"></list>
          </vlist>
        </vrefresh>
      </vtab>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/content/navbar.vue";
import vicon from "../../components/vant/vicon.vue";
import vrefresh from "../../components/vant/vrefresh.vue";
import vswipe from "../../components/vant/vswipe.vue";
import vtab from "../../components/vant/vtab.vue";
import list from "./childcomps/list.vue";
import vlist from "../../components/vant/vlist.vue";
export default {
  name: "home",
  data() {
    return {
      imgsrc: "",
      current: 1,
      tabs: [
        { title: "直播", name: 0 },
        { title: "推荐", name: 1 },
        { title: "热门", name: 2 },
        { title: "追番", name: 3 },
        { title: "影视", name: 4 },
        { title: "抗击肺炎", name: 5 },
        { title: "小康", name: 6 },
      ],
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
    this.getuser(), this.gethome();
  },

  components: { navbar, vtab, vswipe, list, vrefresh, vicon, vlist },

  methods: {
    async getuser() {
      if (sessionStorage.getItem("id")) {
        const { data: res } = await this.$http.get(
          "/user/" + sessionStorage.getItem("id")
        );
        //console.log(res)
        this.imgsrc = res[0].user_img;
        if (!this.imgsrc) {
          this.imgsrc = require("@/assets/img/touxiang.jpg");
        }
        //console.log(this.imgsrc)
      } else {
        this.imgsrc =
          "//s1.hdslb.com/bfs/static/jinkela/long/images/login.png@48w_48h_1c.png";
        //console.log(this.imgsrc)
      }
    },
    change(val) {
      this.current = val;
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
    refresh() {
      this.loading = true;
      scrollTo(0, 0);
      setTimeout(() => {
        this.loading = false;
        this.firsttab[this.current].swipeshow = false;
        this.unshiftdetail(this.current);
      }, 1000);
    },
    loadingchange(val) {
      this.loading = val;
    },
    loadmore() {
      setTimeout(() => {
        this.getdetail(this.current);
      }, 1000);
    },
    changecare(val) {
      //console.log(val);
      this.hometab[this.current].loading = val;
    },
  },
};
</script>
<style scoped>
.center {
  background-color: #f6f6f6;
}
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