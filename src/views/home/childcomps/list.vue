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
  width: 45%;
  font-size: 10 px;
  background-color: #fff;
  border-radius: 10px;
  margin: 5px 0;
  box-shadow: 0px 2px 2px #888888;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>