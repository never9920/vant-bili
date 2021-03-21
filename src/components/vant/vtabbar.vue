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
import { getactivestorage, activestorage } from "common/mixin.js";
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
    },
    getitem() {
      let a = getactivestorage();
      if (a) {
        this.active = getactivestorage();
      }
    },
  },
};
</script>
<style scoped>
</style>