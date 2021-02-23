<template>
  <div class="list">
    <div
      v-for="(item, i) in hometab"
      :key="i"
      class="detail"
      @click="tovideo(item)"
    >
      <reitem :hometab="item"></reitem>
    </div>
  </div>
</template>

<script>
import reitem from "./reitem.vue";
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

  components: { reitem },

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
  background-color: #fff;
  border-bottom: solid 1px #ebebeb;
  padding: 0 10px;
  height: 124px;
}
</style>