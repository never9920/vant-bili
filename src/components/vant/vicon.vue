<template>
  <div class="vicon">
    <van-icon :name="name" :size="size" :color="color"></van-icon>
  </div>
</template>

<script>
export default {
  name: "vicon",
  data() {
    return {};
  },

  props: {
    name: {
      type: String,
    },
    size: {
      type: String,
    },
    color:{
      type:String
    }
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
.vicon{
  padding: 0;
  height: 16px;
  width: 16px;
}
</style>