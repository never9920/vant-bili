<template>
  <div>
    <div class="xiangzhui">
      <div class="words">
        <div>猜你想追</div>
        <div class="right">查看全部 &nbsp; ＞</div>
      </div>
      <div class="test">
        <div v-for="(item, i) in hometab" :key="i">
          <zhuiitem
            :hometab="item"
            :title="title"
            @click.native="tovideo(item)"
          ></zhuiitem>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import zhuiitem from "./zhuiitem";
export default {
  name: "xiangzhui",
  data() {
    return {};
  },

  props: ["hometab", "title"],

  components: { zhuiitem },

  computed: {},

  methods: {
    tovideo(item) {
      this.$router.push("/detail/" + item.id);
    },
  },
};
</script>
<style scoped>
.test {
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  margin-left: 5px;
}
.test::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.xiangzhui {
  border-bottom: solid 1px #ebebeb;
  margin-top: 10px;
}
.words {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 12px;
}
.right {
  color: #aaa;
}
</style>