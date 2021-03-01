<template>
  <div class="items">
    <div class="name">
      {{ title }}
    </div>
    <div
      v-for="(item, i) in hometab.slice(0, 3)"
      :key="i"
      class="item"
      @click="tovideo(item.id)"
    >
      <div class="left">
        <img :src="item.img" :onerror="changeimg" />
        <div class="like" v-if="show[i].likeshow" @click="changelike(i)">
          <img src="~assets/img/xin.svg" alt="" />
        </div>
        <div class="like" v-else @click="changelike(i)">
          <img src="~assets/img/xin1.svg" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="idname">{{ item.id }}{{ item.name }}</div>
        <div class="fen">6888&nbsp;综合评分</div>
      </div>
      <img
        :src="require('@/assets/img/di' + i + '.svg')"
        alt=""
        class="noimg"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "bangitem",
  data() {
    return {
      changeimg: 'this.src="' + require("@/assets/img/tidai.jpg") + '"',
      show: [{ likeshow: false }, { likeshow: false }, { likeshow: false }],
    };
  },

  props: ["hometab", "title"],

  components: {},

  computed: {},

  methods: {
    changelike(i) {
      this.show[i].likeshow = !this.show[i].likeshow;
    },
    tovideo(id) {
      this.$router.push("/detail/" + id);
    },
  },
};
</script>
<style scoped>
.items {
  background-color: rgb(233, 233, 233);
  margin-right: 10px;
  border-radius: 5px;
}
.idname {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.left {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}
.left img {
  width: 120px;
  height: 60px;
  border-radius: 5px;
}
.item {
  display: flex;
  margin-left: 10px;
  margin-bottom: 10px;
}
.name {
  padding: 10px 0;
  margin-left: 10px;
  font-size: 12px;
}
.right {
  font-size: 12px;
  margin-left: 5px;
  width: 110px;
  position: relative;
}
.noimg {
  width: 20px;
  height: 15px;
  margin: 5px;
}
.fen {
  position: absolute;
  bottom: 5px;
  color: #aaa;
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