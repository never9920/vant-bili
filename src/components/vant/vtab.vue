<template>
  <div :class="{ btns: btns }">
    <van-tabs
      v-model="activename"
      title-active-color="#fb7a9f"
      color="#fff"
      sticky
      animated
      @click="setact"
    >
      <van-tab
        :title="item.title"
        v-for="(item, i) in tabs"
        :key="i"
        :name="item.path"
        :to="item.path"
      >
        <router-view></router-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { activestorage, namestorage, getnamestorage } from "common/mixin.js";
export default {
  name: "vtab",
  data() {
    return {
      activename: "/tuijian",
    };
  },

  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    btns: {
      type: Boolean,
      default: false,
    },
  },

  created() {
    this.getact();
    this.routerpath();
  },

  mounted() {
    this.getact();
  },

  components: {},

  computed: {},

  methods: {
    setact(name) {
      this.$bus.$emit("setpath", name);
      namestorage(name);
      activestorage(name);
    },
    getact() {
      let a = getnamestorage();
      if (a) {
        this.activename = getnamestorage();
      }
    },
    routerpath() {
      this.activename = this.$route.path;
    },
  },
};
</script>
<style>
.btns .van-sticky {
  width: calc(100% - 30px);
}
.btns .van-sticky--fixed {
  width: 100%;
}
</style>