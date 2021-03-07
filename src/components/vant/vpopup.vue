<template>
  <div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '100%' }"
      :overlay="false"
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

  props: ["morestatus"],

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