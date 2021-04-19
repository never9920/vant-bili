<template>
  <div :style="{ height: gaodu }" class="listitem">
    <div class="itemimg">
      <img
        v-if="hometab.img"
        :src="hometab.img"
        class="detailimg"
        :onerror="changeimg"
      />
      <div
        class="kankan"
        v-if="
          type === 'tuijian' ||
          type === 'kangji' ||
          type === 'xiaokang' ||
          type === 'dingyue'
        "
      >
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
      <div class="kankan" v-if="type === 'zhibo' || type === 'nei'">
        <span class="video">
          {{ hometab.id }}
        </span>
        <span class="renshu">
          <img src="~assets/img/renshu.svg" />
          2333
        </span>
      </div>
    </div>
    <div class="name" :class="{ danhang: danhang }">
      {{ hometab.id }}{{ hometab.name }}
    </div>
    <div class="xia" v-if="type === 'tuijian'">
      <span>推荐视频都一样啦</span>
      <img src="~assets/img/dian.svg" alt="" />
    </div>
    <div class="zhiboxia" v-if="type === 'zhibo'">
      <span>直播电台</span>
      <img @click.stop="delitem" src="~assets/img/cha.svg" alt="" />
    </div>
    <div class="zhiboxia" v-if="type === 'xiaokang'">
      <span>热点</span>
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
    type: {
      type: String,
    },
    danhang: {
      type: Boolean,
      default: false,
    },
    gaodu: {
      type: String,
    },
  },

  watch: {
    hometab(val) {
      this.value = val;
    },
  },

  components: {},

  computed: {},

  methods: {
    delitem(){
      this.$emit('delitem')
    }
  },
};
</script>
<style scoped>
.listitem {
  position: relative;
}
.detailimg {
  width: 100%;
  height: 95px;
  border-radius: 5px;
}
.name {
  padding: 5px;
  font-size: 10px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
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
.renshu {
  display: flex;
  flex: 1;
  padding-left: 110px;
}
.danhang {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.xia {
  width: 96%;
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #aaa;
  position: absolute;
  bottom: 2px;
  margin: 0 5px;
  justify-content: space-between;
}
.xia img {
  height: 15px;
  width: 15px;
}
.zhiboxia {
  width: 92%;
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #aaa;
  position: absolute;
  bottom: 2px;
  margin: 0 5px;
  justify-content: space-between;
}
.zhiboxia img {
  width: 10px;
  height: 10px;
}
</style>