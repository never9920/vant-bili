<template>
  <div>
    <div class="guding">
      <div class="top" :class="{ bgcch: bgcch }">
        <vicon
          name="arrow-left"
          size="20px"
          color="white"
          @click.native="toback"
          class="vicons"
        ></vicon>
        <img src="~assets/img/whitedian.svg" alt="" />
      </div>
      <detailinfo></detailinfo>
    </div>
  </div>
</template>

<script>
import vicon from "components/vant/vicon.vue";
import detailinfo from "./childcomps/detailinfo.vue";
export default {
  name: "home",
  data() {
    return {
      bgcch: false,
    };
  },

  components: {
    vicon,
    detailinfo,
  },

  mounted() {
    window.addEventListener("scroll", this.backshow);
  },

  computed: {},

  methods: {
    toback() {
      this.$router.back();
    },
    backshow() {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 180) {
        this.bgcch = true;
      } else {
        this.bgcch = false;
      }
    },
  },
};
</script>
<style scoped>
.guding {
  position: relative;
}
.top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  position: absolute;
  top: 0;
}
.top img {
  width: 20px;
  height: 20px;
  padding: 10px;
}
.vicons {
  padding: 10px;
}
.bgcch {
  position: sticky;
  background-color: #fb7299;
  top: 0;
}
</style>