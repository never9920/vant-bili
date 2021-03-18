<template>
  <div class="comment">
    <div class="mine">
      <input
        type="text"
        placeholder="发表友善的评论"
        v-model="content"
        ref="cominput"
      />
      <button @click="checkuser">发表</button>
    </div>
  </div>
</template>

<script>
import { getidstorage,gettokenstorage  } from "common/mixin.js";
export default {
  name: "comment",
  data() {
    return {
      content: "",
    };
  },

  props: {
    status: {
      type: Number,
    },
  },

  watch: {
    status() {
      this.content = "";
    },
  },

  components: {},

  computed: {},

  methods: {
    checkuser() {
      let a = gettokenstorage()
      let b =getidstorage()
      if (!a && !b) {
        this.$toast.fail("请先登录");
        this.$router.push("/login");
        return;
      }
      this.$emit("posttext", this.content);
    },
    inputfoc() {
      //console.log(this.users)
      this.$refs.cominput.focus();
    },
  },
};
</script>
<style scoped>
.comment {
  height: 30px;
  box-shadow: 0 -1px 2px #ddd;
}
.mine {
  padding-left: 5px;
  display: flex;
  height: 100%;
}
.mine input {
  outline: none;
  border: 0;
  background-color: #f4f4f4;
  border-radius: 12.5px;
  padding: 0 10px 0 15px;
  margin-left: 10px;
  font-size: 12px;
  width: 70%;
}
.mine button {
  outline: none;
  border: 0;
  border-radius: 15px;
  background-color: #fb7299;
  color: white;
  font-size: 12px;
  padding: 0 15px;
  margin-left: 10px;
}
</style>