<template>
  <div>
    <vtabbar :bardata="bardata"></vtabbar>
  </div>
</template>

<script>
import vtabbar from "../vant/vtabbar.vue";
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
      if (sessionStorage.getItem("activename")) {
        this.bardata[0].path = sessionStorage.getItem("activename");
      }
    },
  },
};
</script>
<style scoped>
</style>