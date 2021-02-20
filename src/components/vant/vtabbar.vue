<template>
  <div>
    <van-tabbar active-color="#fb7299" v-model="active" @change="tohome">
      <van-tabbar-item
        replace
        :to="item.path"
        :icon="item.icon"
        v-for="(item, i) in bardata"
        :key="i"
        >{{ item.title }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "vtabbar",
  props: {
    bardata: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      active: 0,
    };
  },

  watch: {},

  components: {},

  computed: {},

  methods: {
    tohome(val) {
      if (val === 0) {
        this.$bus.$emit("totuijian");
      }
    },
  },
};
</script>
<style scoped>
</style>