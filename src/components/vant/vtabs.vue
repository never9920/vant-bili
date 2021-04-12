<template>
  <div :class="{ btn: btn }">
    <van-tabs
      v-model="activename"
      title-active-color="#fb7a9f"
      color="#fb7a9f"
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
  name: "vtabs",
  data() {
    return {
      activename: null,
    };
  },

  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    current: {
      type: String,
    },
    homecurrent: {
      type: Number,
    },
    btn: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    activename() {
      this.$emit("change", this.activename);
    },
    current() {
      this.activename = this.current;
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
.btn .van-tabs__nav {
  width: calc(100% - 50px);
}
</style>