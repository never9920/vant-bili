<template>
  <div>
    <div class="video">
      <video
        :src="model.content"
        controls="controls"
        :onerror="changevideo"
      ></video>
    </div>
    <detailtab @typech="typech"></detailtab>
    <introduce :model="model" v-show="current === 0" :show2="show2"></introduce>
    <detailcomment v-show="current === 1" :reid="model.userid"></detailcomment>
  </div>
</template>

<script>
import detailcomment from "./detailcomment.vue";
import detailtab from "./detailtab.vue";
import introduce from "./introduce.vue";
import { getidstorage, gettokenstorage } from "common/mixin.js";
import { getarticle, getsub } from "network/gethome.js";
export default {
  name: "detailinfo",
  data() {
    return {
      model: [],
      changevideo: 'this.src="' + require("@/assets/img/lego.mp4") + '"',
      current: 0,
      show2: true,
    };
  },
  created() {
    this.getvideo();
  },

  watch: {
    $route() {
      //console.log('bianhua')
      this.getvideo();
      scrollTo(0, 0);
    },
  },

  components: { detailtab, introduce, detailcomment },

  computed: {},

  methods: {
    async getvideo() {
      const res = await getarticle(this.$route.params.id);
      this.model = res[0];
      //console.log(this.model);
      this.folinit();
    },
    async folinit() {
      let a = gettokenstorage();
      let b = getidstorage();
      if (a && b) {
        const res = await getsub(b, {
          sub_id: this.model.userid,
        });
        //console.log(res)
        this.show2 = !res.success;
      }
    },
    typech(val) {
      this.current = val;
    },
  },
};
</script>
<style scoped>
.video {
  width: 100%;
}
.video video {
  width: 100%;
}
</style>