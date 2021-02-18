<template>
  <div>
    <navbar :imgsrc="imgsrc"></navbar>
    <div class="center">
      <vtab :tabs="tabs" :current="current" @change="change">
        <div class="top">
          <vswipe :banner="banner" hight="165px"></vswipe>
        </div>
        <list v-if="show" :hometab="hometab[current].list"></list>
      </vtab>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/content/navbar.vue";
import vswipe from "../../components/vant/vswipe.vue";
import vtab from "../../components/vant/vtab.vue";
import list from "./childcomps/list.vue";
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
    };
  },

  created() {
    this.getuser(), this.gethome();
  },

  components: { navbar, vtab, vswipe, list },
  computed: {},

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
      }
      //console.log(this.hometab)
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
</style>