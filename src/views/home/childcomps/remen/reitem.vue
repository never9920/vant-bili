<template>
  <div class="listitem">
    <div class="zuo">
      <img
        v-if="hometab.img"
        :src="hometab.img"
        class="detailimg"
        :onerror="changeimg"
      />
      <div class="time">00:30</div>
    </div>
    <div class="you">
      <div class="title">{{ hometab.id }}{{ hometab.name }}</div>
      <div class="fang">百万播放</div>
      <div class="up">
        <img src="~assets/img/up.svg" alt="" />
        <p>{{ hometab.id }}</p>
      </div>
      <div class="shijian">
        <img src="~assets/img/bofan.svg" alt="" />
        <p>2333万播放·02-23</p>
        <div class="dian">
          <img src="~assets/img/dian.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listitem",
  data() {
    return {
      value: [],
      changeimg: 'this.src="' + require("@/assets/img/tidai.jpg") + '"',
    };
  },

  props: {
    hometab: {
      type: Object,
    },
  },

  watch: {
    hometab(val) {
      this.value = val;
    },
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
.listitem {
  display: flex;
}
.zuo img {
  height: 100px;
  width: 160px;
  border-radius: 5px;
  margin: 5px 10px;
}
.zuo {
  position: relative;
}
.time {
  position: absolute;
  bottom: 15px;
  right: 15px;
  font-size: 12px;
  background-color: rgb(22, 22, 22, 0.4);
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: white;
}
.title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  line-height: 1.25;
  margin: 5px 0 0 0;
  height: 34px;
}
.fang {
  padding: 3px 5px;
  border: solid 1px orange;
  font-size: 12px;
  color: orange;
  width: 50px;
  margin: 5px 0;
  border-radius: 5px;
}
.you img {
  width: 12px;
  height: 12px;
}
.up,
.shijian {
  display: flex;
  align-items: center;
  margin-bottom: 3px;
}
.you p {
  margin: 0 5px;
  font-size: 12px;
  color: #aaa;
}
.dian {
  flex: 1;
  text-align: right;
}
.shijian {
  width: 175px;
}
</style>