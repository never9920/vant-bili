<template>
  <div id="fouritem">
    <div class="title">{{ title }}</div>
    <div class="list">
      <div
        v-for="(item, i) in hometab"
        :key="i"
        class="detail"
        @click="tovideo(item)"
      >
        <listitem :hometab="item" :gaodu="gaodu" :type="type"></listitem>
      </div>
    </div>
    <div v-if="xiashow" class="more">查看更多</div>
  </div>
</template>

<script>
import listitem from "../listitem.vue";
export default {
  name: "fouritem",
  data() {
    return {};
  },

  props: {
    title: {
      type: String,
    },
    hometab: {
      type: Array,
    },
    xiashow: {
      type: Boolean,
      default: false,
    },
    gaodu: {
      type: String,
    },
    type: {
      type: String,
    },
  },

  components: { listitem },

  computed: {},

  methods: {
    tovideo(val) {
      this.$router.push("/detail/" + val.id);
    },
  },
};
</script>
<style scoped>
#fouritem{
    margin-bottom: 10px;
}
.detail {
  width: 48.5%;
  font-size: 10px;
  background-color: #f9f9f9;
  border-radius: 5px;
  margin: 3px 0;
  box-shadow: 0px 2px 2px #f6f6f6;
  border: solid 1px #f9f9f9;
  overflow: hidden;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 8px;
}
.title {
  margin: 10px;
  font-size: 12px;
}
.more {
  margin: 10px;
  background-color: #fb7299;
  color: white;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>