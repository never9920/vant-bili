<template>
  <div id="yingshidan">
    <div class="test">
      <div v-for="(item, i) in hometab" :key="i" @click="tovideo(item.id)">
        <div class="item">
          <div class="shang">
            <img v-if="item.img" :src="item.img" :onerror="changeimg" />
            <div
              class="like"
              v-if="show[i].likeshow"
              @click.stop="changelike(i)"
            >
              <img src="~assets/img/xin.svg" alt="" />
            </div>
            <div class="like" v-else @click.stop="changelike(i)">
              <img src="~assets/img/xin1.svg" alt="" />
            </div>
            <div class="nei">NO.{{ i + 1 }}</div>
          </div>
          <div class="xia">
            <div class="title">{{ item.id }}{{ item.name }}</div>
            <div style="color: #aaa">综合评分&nbsp;233万</div>
          </div>
        </div>
      </div>
      <div class="more">更多&nbsp;＞</div>
    </div>
  </div>
</template>

<script>
import { gettokenstorage, getidstorage } from "common/mixin.js";
export default {
  name: "yingshidan",
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
        { likeshow: false },
        { likeshow: false },
      ],
    };
  },
  props: ["hometab"],

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
#yingshidan {
  border-bottom: solid 1px #ebebeb;
}
.test {
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  margin: 5px;
}

.test::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
.item {
  margin: 5px 5px 15px 5px;
  width: 100px;
  border-radius: 5px;
  overflow: hidden;
}
.shang img {
  width: 100px;
  height: 130px;
  border-radius: 5px;
}
.shang {
  position: relative;
}
.nei {
  font-size: 10px;
  color: white;
  position: absolute;
  background-color: grey;
  padding: 0 5px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
  bottom: 4px;
  left: 0px;
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
.more {
  background-color: rgb(197, 197, 197);
  width: 100px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-radius: 5px;
  color: grey;
  padding: 0 24px;
}
</style>