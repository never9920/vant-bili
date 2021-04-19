<template>
  <div class="list">
    <div
      v-for="(item, i) in hometab"
      :key="i"
      class="detail"
      @click="tovideo(item)"
    >
      <listitem
        :hometab="item"
        :type="type"
        :danhang="danhang"
        :gaodu="gaodu"
        @delitem="delitem(item.id)"
      ></listitem>
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
    type: {
      type: String,
    },
    danhang: {
      type: Boolean,
    },
    gaodu: {
      type: String,
    },
  },

  components: { listitem },

  computed: {},

  methods: {
    tovideo(val) {
      this.$router.push("/detail/" + val.id);
    },
    delitem(i){
      this.$emit('delitem',i)
    }
  },
};
</script>
<style scoped>
.detail {
  width: 48.5%;
  font-size: 10px;
  background-color: #fff;
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
</style>