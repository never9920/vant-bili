<!--  -->
<template>
  <div class="tabcontrol" ref="conrol" :class="{ btns: btns }">
    <div
      v-for="(item, index) in titles"
      :class="{ active: index === current }"
      :key="index"
      class="controlitem"
      @click="itemclick(index)"
    >
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabcon",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
    current: {
      type: Number,
    },
    btns: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    itemclick(index) {
      this.$emit("tabclick", index);
      if (index > 3) {
        this.$refs.conrol.scrollTo({ left: 45 * index, behavior: "smooth" });
      } else {
        this.$refs.conrol.scrollTo({ left: 0, behavior: "smooth" });
      }
    },
  },
};
</script>
<style>
.tabcontrol {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
.btns {
  width: calc(100% - 32px);
}
.tabcontrol::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.controlitem {
  flex: 1;
  margin: 0 5px;
}
.controlitem span {
  padding: 5px;
}
.active {
  color: #fb7299;
}
.active span {
  border-bottom: solid 1px #fb7299;
}
</style>