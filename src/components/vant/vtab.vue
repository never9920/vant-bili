<template>
  <div :class="{ btns: btns }">
    <van-tabs
      v-model="activename"
      title-active-color="#fb7a9f"
      color="#fff"
      swipeable
      sticky
    >
      <van-tab
        :title="item.title"
        v-for="(item, i) in tabs"
        :key="i"
        :name="item.name"
      >
        <slot>{{ item.title }}</slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "vtab",
  data() {
    return {
      activename: 1,
    };
  },

  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    homecurrent: {
      type: Number,
    },
    btns: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    activename() {
      this.$emit("change", this.activename);
    },
    homecurrent(val) {
      this.activename = val;
    },
  },

  components: {},

  computed: {},

  methods: {},
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