<template>
  <div class="list">
    <div
      v-for="(item, i) in hometab"
      :key="i"
      class="detail"
      @click="tovideo(item)"
    >
      <listitem :hometab="item"></listitem>
    </div>
  </div>
</template>

<script>
import listitem from "./listitem.vue";
export default {
  name: "list",
  data() {
    return {};
  },

  props: {
    hometab: {
      type: Array,
    },
  },

  components: { listitem },

  computed: {},

  methods: {
    tovideo(val) {
      this.$router.push("/video/" + val.id);
    },
  },
};
</script>
<style scoped>
.detail {
  width: 47%;
  font-size: 10 px;
  background-color: #fff;
  border-radius: 10px;
  margin: 5px 0;
  box-shadow: 0px 2px 2px #888888;
  border: solid 1px #aaa;
  overflow: hidden;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>