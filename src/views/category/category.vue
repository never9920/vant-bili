<template>
  <div>
    <div class="navbar">
      <div class="item" :class="{ huodong: current === 0 }" @click="to0">
        频道
      </div>
      <div class="item" :class="{ huodong: current === 1 }" @click="to1">
        分区
      </div>
    </div>
    <pingdao v-show="current === 0"></pingdao>
    <fenqu v-show="current === 1"></fenqu>
  </div>
</template>

<script>
import fenqu from "./childcomps/fenqu.vue";
import pingdao from "./childcomps/pingdao.vue";
export default {
  name: "category",
  data() {
    return {
      current: 0,
    };
  },

  components: { pingdao, fenqu },

  computed: {},

  methods: {
    to0() {
      this.current = 0;
    },
    to1() {
      this.current = 1;
    },
  },
};
</script>
<style scoped>
.navbar {
  display: flex;
  height: 44px;
  box-shadow: 0 2px 2px #f4f4f4;
  align-items: center;
  justify-content: space-around;
  padding: 0 90px;
  font-size: 16px;
}
.item {
  padding: 5px 3px;
}
.huodong {
  color: #fb7299;
  background-color: #fff;
  border-bottom: solid 2px #fb7299;
}
</style>