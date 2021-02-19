<template>
  <div>
    <van-pull-refresh
      v-model="isLoading"
      @refresh="onRefresh"
      success-text="刷新成功"
    >
      <slot></slot>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  name: "vrefresh",
  data() {
    return {
      count: 0,
      isLoading: false,
    };
  },

  props: {
    loading: {
      type: Boolean,
    },
  },

  watch: {
    loading(val) {
      this.isLoading = val;
    },
    isLoading(val) {
      this.$emit("loadingchange", val);
    },
  },

  components: {},

  computed: {},

  methods: {
    onRefresh() {
      this.$emit("refresh");
    },
  },
};
</script>
<style scoped>
</style>