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
import navbar from "../../components/content/navbar.vue";
import vtab from "../../components/vant/vtab.vue";
export default {
  name: "home",
  data() {
    return {
      imgsrc: "",
      tabs: [
        { title: "直播", name: 0, path: "/home/zhibo" },
        { title: "推荐", name: 1, path: "/home/tuijian" },
        { title: "热门", name: 2, path: "/home/remen" },
        { title: "追番", name: 3, path: "/home/zhuifan" },
        { title: "影视", name: 4, path: "/home/yingshi" },
        { title: "抗击肺炎", name: 5, path: "/home/kangji" },
        { title: "小康", name: 6, path: "/home/xiaokan" },
      ],
    };
  },

  created() {
    this.getuser();
  },

  components: { navbar, vtab },

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
  },
};
</script>
<style scoped>
.center {
  background-color: #f6f6f6;
}
</style>