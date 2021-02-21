<template>
  <div :class="{ btns: btns }">
    <van-tabs
      v-model="activename"
      title-active-color="#fb7a9f"
      color="#fff"
      swipeable
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
export default {
  name: "vtab",
  data() {
    return {
      activename: "/zhibo",
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
  },

  mounted() {
    this.getact();
  },

  components: {},

  computed: {},

  methods: {
    setact(name) {
      sessionStorage.setItem("activename", name);
      this.$bus.$emit("setpath", name);
    },
    getact() {
      if (sessionStorage.getItem("activename")) {
        this.activename = sessionStorage.getItem("activename");
      }
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