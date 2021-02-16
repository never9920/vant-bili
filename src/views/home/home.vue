<template>
  <div>
    <navbar :imgsrc="imgsrc"></navbar>
    <div class="center">
      <vtab :tabs="tabs" :homecurrent="homecurrent" @change="change"></vtab>
    </div>
  </div>
</template>

<script>
import navbar from "../../components/content/navbar.vue";
import vtab from '../../components/vant/vtab.vue';
export default {
  name: "home",
  data() {
    return {
      imgsrc: "",
      homecurrent:1,
      tabs:[
        {title:'直播'},
        {title:'推荐'},
        {title:'热门'},
        {title:'追番'},
        {title:'影视'},
        {title:'抗击肺炎'},
        {title:'小康'},
        ]
    };
  },

  created() {
    this.getuser();
  },

  components: { navbar, vtab },

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
        this.imgsrc = "//s1.hdslb.com/bfs/static/jinkela/long/images/login.png@48w_48h_1c.png";
        //console.log(this.imgsrc)
      }
    },
    change(val){
      this.homecurrent = val
    }
  },
};
</script>
<style scoped>
.center{
  background-color: #f4f4f4;
}
</style>