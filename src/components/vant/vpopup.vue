<template>
  <div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: height }"
      :overlay="over"
    >
      <slot></slot>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "vpopup",
  data() {
    return {
      show: false,
    };
  },

  props: {
    morestatus: {
      type: Boolean,
    },
    height: {
      type: String,
      default: "100%",
    },
    over: {
      type: Boolean,
      default: false,
    },
  },

  watch: {
    morestatus(val) {
      this.show = val;
    },
    show(val) {
      this.$emit("statusch", val);
    },
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
</style>