<template>
  <div :class="{ three: three }">
    <div class="words">
      <div>{{ title }}</div>
      <div class="right" v-if="zuoshow">{{ name }} &nbsp; ＞</div>
    </div>
    <div class="items">
      <div
        v-for="(item, i) in hometab.slice(0, 3)"
        :key="i"
        class="item"
        @click="tovideo(item.id)"
      >
        <div class="left">
          <img v-if="item.img" :src="item.img" :onerror="changeimg" />
          <div class="nei">2333万追番</div>
          <div
            class="like"
            v-if="chlike[i].likeshow"
            @click.stop="changelike(i)"
          >
            <img src="~assets/img/xin.svg" alt="" />
          </div>
          <div class="like" v-else @click.stop="changelike(i)">
            <img src="~assets/img/xin1.svg" alt="" />
          </div>
        </div>
        <div>
          <div class="idname">{{ item.id }}{{ item.name }}</div>
          <div class="jishu">全23话</div>
        </div>
      </div>
    </div>
    <div class="shua" v-if="xiashow">
      <img src="~assets/img/shua.svg" alt="" />
      <div>换一换</div>
    </div>
  </div>
</template>

<script>
import { gettokenstorage, getidstorage } from "common/mixin.js";
export default {
  name: "threeitem",
  data() {
    return {
      changeimg: 'this.src="' + require("@/assets/img/tidai.jpg") + '"',
      chlike: [{ likeshow: false }, { likeshow: false }, { likeshow: false }],
    };
  },

  props: {
    three: {
      type: Boolean,
      default: true,
    },
    hometab: {
      type: Array,
    },
    title: {
      type: String,
    },
    zuoshow: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "查看更多",
    },
    xiashow: {
      type: Boolean,
      default: true,
    },
  },

  components: {},

  computed: {},

  methods: {
    changelike(i) {
      let b = getidstorage();
      let a = gettokenstorage();
      if (a && b) {
        this.show[i].likeshow = !this.show[i].likeshow;
      } else {
        this.$toast.fail("请先登录");
        setTimeout(() => {
          this.$router.push("/login");
        }, 500);
      }
    },
    tovideo(id) {
      this.$router.push("/detail/" + id);
    },
  },
};
</script>
<style scoped>
.three {
  border-bottom: solid 1px #ebebeb;
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
.items {
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
}
.item {
  width: 100px;
  overflow: hidden;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.left {
  position: relative;
}
.left img {
  width: 100px;
  height: 130px;
  border-radius: 5px;
}
.idname {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
}
.like {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
}
.like img {
  height: 20px;
  width: 20px;
}
.nei {
  font-size: 10px;
  color: white;
  position: absolute;
  background-color: rgb(22, 22, 22, 0.4);
  width: 70px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  bottom: 5px;
  right: 3px;
}
.jishu {
  color: #aaa;
  font-size: 10px;
  margin: 3px 0;
}
.shua img {
  height: 10px;
  width: 10px;
  margin-right: 5px;
}
.shua {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  color: #fb7299;
  height: 30px;
  margin-bottom: 5px;
}
</style>