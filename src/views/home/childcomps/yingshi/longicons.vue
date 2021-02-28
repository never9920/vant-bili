<template>
  <div id="long">
    <div v-for="(item, i) in icons" :key="i" class="item">
      <img :src="item.icon" alt="" />
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "longicons",
  data() {
    return {};
  },

  props: ["icons"],

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
#long {
  display: flex;
  padding: 25px 10px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  border-bottom: solid 1px #ebebeb;
}
#long::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.item {
  text-align: center;
  padding-right: 20px;
  font-size: 12px;
}
.item img {
  width: 40px;
  height: 40px;
}
</style>