<template>
  <div>
    <div
      class="item"
      v-for="(item, i) in child"
      :key="i"
      @click="userpub(item)"
    >
      <span
        v-if="item.userinfo && item.userinfo.name"
        class="name"
        @click="tovis(item.userinfo)"
        >{{ item.userinfo.name }}
        <img v-if="reid === item.user_id" src="~assets/img/up.svg" />
      </span>
      <span v-else>此用户未命名</span>
      <span class="text">:{{ item.comment_content }} </span>
    </div>
  </div>
</template>

<script>
import { tovis } from "common/mixin.js";
export default {
  name: "middle",
  data() {
    return {};
  },

  props: ["child", "reid"],

  components: {},

  computed: {},

  methods: {
    tovis(val) {
      tovis(val);
      this.$router.push("/vistor/" + val.id);
    },
    userpub(item) {
      this.$emit("userpub", item);
    },
  },
};
</script>
<style scoped>
.name img {
  height: 16px;
  width: 16px;
  margin-left: 5px;
}
.item {
  margin: 3px 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.name {
  color: rgb(37, 136, 175);
}
</style>