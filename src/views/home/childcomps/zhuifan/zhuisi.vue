<template>
  <div>
    <div class="words">
      <div>{{ title }}</div>
      <div class="right" v-if="isshow">{{ name }} &nbsp; ＞</div>
    </div>
    <div class="items">
      <div
        v-for="(item, i) in hometab.slice(0, num)"
        :key="i"
        class="item"
        @click="tovideo(item.id)"
      >
        <div class="shang">
          <img v-if="item.img" :src="item.img" :onerror="changeimg" />
          <div class="nei">2333万追番</div>
          <div class="like" v-if="show[i].likeshow" @click.stop="changelike(i)">
            <img src="~assets/img/xin.svg" alt="" />
          </div>
          <div class="like" v-else @click.stop="changelike(i)">
            <img src="~assets/img/xin1.svg" alt="" />
          </div>
        </div>
        <div class="xia">
          <div class="title">{{ item.id }}{{ item.name }}</div>
          <div style="color: #aaa">更新至第233话</div>
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
  name: "zhuisi",
  data() {
    return {
      changeimg: 'this.src="' + require("@/assets/img/tidai.jpg") + '"',
      show: [
        { likeshow: false },
        { likeshow: false },
        { likeshow: false },
        { likeshow: false },
        { likeshow: false },
        { likeshow: false },
      ],
    };
  },

  props: {
    title: {
      type: String,
    },
    hometab: {
      type: Array,
    },
    num: {
      type: Number,
      default: 4,
    },
    isshow: {
      type: Boolean,
      default: true,
    },
    xiashow: {
      type: Boolean,
      default: true,
    },
    name: {
      type: String,
      default: "查看更多",
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
  flex-wrap: wrap;
  display: flex;
  justify-content: space-between;
  margin: 5px 8px;
}
.item {
  width: 48.5%;
  margin: 5px 0;
  border-radius: 5px;
  overflow: hidden;
  background-color: #f9f9f9;
}
.shang {
  position: relative;
}
.shang img {
  width: 100%;
  height: 100px;
  border-radius: 5px;
}
.xia {
  font-size: 10px;
}
.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 2px;
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
  right: 5px;
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
.like {
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
}
.like img {
  height: 20px;
  width: 20px;
}
</style>