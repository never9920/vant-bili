<template>
  <div>
    <van-tabbar active-color="#fb7299" v-model="active">
      <van-tabbar-item
        replace
        :to="item.path"
        :icon="item.icon"
        v-for="(item, i) in bardata"
        :name="item.path"
        :key="i"
        @click="setitem(item)"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import { getactivestorage, activestorage,getnamestorage } from "common/mixin.js";
export default {
  name: "vtabbar",
  props: {
    bardata: {
      type: Array,
      default: () => [],
    },
    index: {
      type: String,
    },
  },
  data() {
    return {
      active: "/tuijian",
    };
  },

  created() {
    this.getitem();
  },

  mounted() {
    this.getitem();
    this.$bus.$on("tomine", () => {
      this.active = "/mine";
    });
  },

  components: {},

  computed: {},

  methods: {
    setitem(item) {
      activestorage(item.path);
      const kkk = getnamestorage()
      if(kkk){
        console.log('llll')
      }else{
        console.log('ppp')
      }
    },
    getitem() {
      if (sessionStorage.getItem("active")) {
        this.active = getactivestorage();
      }
    },
  },
};
</script>
<style scoped>
</style>