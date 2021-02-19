<template>
  <div>
    <div class="itemimg">
      <img
        v-if="hometab.img"
        :src="hometab.img"
        class="detailimg"
        :onerror="changeimg"
      />
      <div class="kankan">
        <span class="video">
          <img src="~assets/img/bofang.svg" />
          168万
        </span>
        <span class="comment">
          <img src="~assets/img/comment.svg" />
          66万
        </span>
        <span class="time"> 00:30 </span>
      </div>
    </div>
    <div class="name">{{ hometab.id }}{{ hometab.name }}</div>
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
.detailimg {
  width: 100%;
  height: 95px;
  border-radius: 5px;
}
.name {
  margin: 5px;
  font-size: 10px;
}
.itemimg {
  position: relative;
}
.kankan {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85));
  display: flex;
  color: white;
  align-items: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
  font-size: 10px;
}
.kankan img {
  width: 14px;
  height: 14px;
}
.video,
.comment {
  margin-left: 7px;
  display: flex;
  align-items: center;
}
.time {
  flex: 1;
  text-align: right;
  padding-right: 5px;
}
</style>