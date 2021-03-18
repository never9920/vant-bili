<template>
  <div>
    <vtabbar :bardata="bardata"></vtabbar>
  </div>
</template>

<script>
import vtabbar from "../vant/vtabbar.vue";
import { getnamestorage } from "common/mixin.js";
export default {
  name: "tabbar",
  data() {
    return {
      bardata: [
        { title: "首页", icon: "wap-home-o", path: "/tuijian" },
        { title: "频道", icon: "apps-o", path: "/category" },
        { title: "动态", icon: "orders-o", path: "/updata" },
        { title: "会员购", icon: "shop-o", path: "/buy" },
        { title: "我的", icon: "user-circle-o", path: "/mine" },
      ],
    };
  },

  created() {
    this.getact();
  },

  mounted() {
    this.$bus.$on("setpath", (name) => {
      this.bardata[0].path = name;
    });
  },

  components: { vtabbar },

  computed: {},

  methods: {
    getact() {
      let a= getnamestorage()
      if (a) {
        this.bardata[0].path = getnamestorage();
      }
    },
  },
};
</script>
<style scoped>
</style>