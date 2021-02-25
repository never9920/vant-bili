<!--  -->
<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in titles"
      :class="{ active: index === currentindex }"
      :key="index"
      class="controlitem"
      @click="itemclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcontrol",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentindex: 0,
    };
  },

  components: {},

  computed: {},

  methods: {
    itemclick(index) {
      this.currentindex = index;
      this.$emit("tabclick", index);
    },
  },
};
</script>
<style>
.tabcontrol {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
}
.controlitem {
  flex: 1;
}
.controlitem span {
  padding: 5px;
}
.active {
  color: white;
  background-color: #fb7299;
  border-radius: 15px;
}
</style>