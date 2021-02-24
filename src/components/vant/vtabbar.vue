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
  },

  components: {},

  computed: {},

  methods: {
    setitem(item) {
      sessionStorage.setItem("active", item.path);
    },
    getitem() {
      if (sessionStorage.getItem("active")) {
        this.active = sessionStorage.getItem("active");
      }
    },
  },
};
</script>
<style scoped>
</style>