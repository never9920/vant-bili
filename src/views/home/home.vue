<template>
  <div>
    <navbar :imgsrc="imgsrc"></navbar>
    <div class="center">
      <vtab :tabs="tabs">
        <router-view></router-view>
      </vtab>
    </div>
  </div>
</template>

<script>
import navbar from "components/content/navbar.vue";
import vtab from "components/vant/vtab.vue";
import { getidstorage, gettokenstorage } from "common/mixin.js";
import { getimg } from "network/gethome.js";
export default {
  name: "home",
  data() {
    return {
      imgsrc: "",
      tabs: [
        { title: "直播", name: "zhibo", path: "/zhibo" },
        { title: "推荐", name: "tuijian", path: "/tuijian" },
        { title: "热门", name: "remen", path: "/remen" },
        { title: "追番", name: "zhuifan", path: "/zhuifan" },
        { title: "影视", name: "yingshi", path: "/yingshi" },
        { title: "抗击肺炎", name: "kangji", path: "/kangji" },
        { title: "小康", name: "xiaokan", path: "/xiaokan" },
      ],
    };
  },

  created() {
    this.getuser();
  },

  components: { navbar, vtab },

  methods: {
    async getuser() {
      let a = gettokenstorage();
      let b = getidstorage();
      if (a && b) {
        const res = await getimg(b);
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
  },
};
</script>
<style scoped>
.center {
  background-color: white;
}
</style>