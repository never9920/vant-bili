<template>
  <div :class="{ btns: btns }">
    <van-tabs
      v-model="activename"
      title-active-color="#fb7a9f"
      color="#fff"
      swipeable
      sticky
      animated
    >
      <van-tab
        :title="item.title"
        v-for="(item, i) in tabs"
        :key="i"
        :name="item.name"
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
      activename: 1,
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

  mounted(){
    this.$bus.$on('totuijian',()=>{
      this.activename = 1
    })
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