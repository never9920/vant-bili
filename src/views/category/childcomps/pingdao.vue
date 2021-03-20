<template>
  <div v-if="show">
    <div class="top">
      <div class="mine">
        <vicon name="search" size="16px" class="icons"></vicon>
        <input
          type="text"
          placeholder="搜索你喜欢的频道"
          ref="insearch"
          v-model="content"
        />
      </div>
      <div class="more">
        <div class="zuo">
          <div class="circle1">2719<br />个频道</div>
          <div>全部频道</div>
        </div>
        <div>
          <div class="circle2"><img src="~assets/img/add.svg" alt="" /></div>
          <div>添加订阅</div>
        </div>
      </div>
    </div>
    <div class="remen">
      <div class="nav">
        <div>热门频道</div>
        <div class="huan">换一换<img src="~assets/img/shua.svg" alt="" /></div>
      </div>
      <div class="liebiao">
        <div v-for="(item, i) in liebiaos" :key="i" class="lieitem">
          <img :src="item.img" alt="" />
          <div>{{ item.name }}</div>
        </div>
      </div>
    </div>
    <twoitem
      :hometab="hometab[2].list"
      title="手工"
      num="14.7"
      time="32分钟"
    ></twoitem>
    <twoitem
      :hometab="hometab[0].list"
      title="摄影"
      num="23"
      time="1小时"
    ></twoitem>
    <twoitem
      :hometab="hometab[1].list"
      title="历史"
      num="68"
      time="3小时"
    ></twoitem>
    <twoitem
      :hometab="hometab[4].list"
      title="科学"
      num="123.2"
      time="5分钟"
    ></twoitem>
    <twoitem
      :hometab="hometab[1].list"
      title="汽车"
      num="13.9"
      time="6小时"
    ></twoitem>
    <div class="change">
      <div class="huan"><img src="~assets/img/shua.svg" alt="" />换一换</div>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
import vicon from "components/vant/vicon.vue";
import twoitem from "./twoitem.vue";
import { getcategory, getdetails } from "network/gethome.js";
export default {
  name: "pingdao",
  data() {
    return {
      content: "",
      liebiaos: [
        { img: require("@/assets/img/shougong.jpg"), name: "手工" },
        { img: require("@/assets/img/sheying.jpg"), name: "摄影" },
        { img: require("@/assets/img/lishi.jpg"), name: "历史" },
        { img: require("@/assets/img/kexue.jpg"), name: "科学" },
        { img: require("@/assets/img/qiche.jpg"), name: "汽车" },
      ],
      hometab: {},
      show: false,
      loading: false,
    };
  },

  created() {
    this.gethome();
  },

  components: { vicon, twoitem },

  computed: {},

  methods: {
    async gethome() {
      const res = await getcategory();
      //console.log(res)
      this.changedata(res);
      //console.log(typeof(this.current))
    },
    changedata(val) {
      const category = val.map((item, index) => {
        item.list = [];
        item.page = -1;
        item.loading = false;
        item.finished = false;
        return item;
      });
      this.hometab = category;
      for (let i = 0; i < 5; i++) {
        this.getdetail(i);
      }
      //console.log(this.firsttab)
    },
    async getdetail(id) {
      const page = this.hometab[id].page + 1;
      const res = await getdetails(this.hometab[id]._id, { page, pagesize: 2 });
      this.hometab[id].list.push(...res);
      this.hometab[id].page += 1;
      this.hometab[id].loading = false;
      if (res.length < 10) {
        this.hometab[id].finished = true;
      }
      this.show = true;
      //console.log(this.hometab)
    },
  },
};
</script>
<style scoped>
.top {
  padding: 20px 10px 0px;
  border-bottom: solid 10px #eee;
}
.remen {
  padding: 10px;
}
.mine {
  display: flex;
  align-items: center;
  background-color: #eee;
  padding: 5px;
  width: 97%;
  margin-right: 10px;
  border-radius: 15px;
  height: 20px;
}
.mine input {
  outline: none;
  border: 0;
  padding: 0 10px 0 10px;
  font-size: 12px;
  width: 100%;
  height: 100%;
  background-color: #eee;
}
.more {
  display: flex;
  margin: 20px 0 10px;
  font-size: 12px;
  text-align: center;
}
.circle1 {
  background-color: #fb7299;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
  margin-bottom: 10px;
}
.circle2 img {
  width: 30px;
  height: 30px;
}
.circle2 {
  width: 48px;
  height: 48px;
  border: dashed 1px #aaa;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.zuo {
  margin-right: 20px;
}
.nav {
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin-bottom: 10px;
}
.huan {
  color: #fb7299;
  display: flex;
  align-items: center;
}
.huan img {
  width: 12px;
  height: 12px;
  margin: 0 5px;
}
.liebiao {
  display: flex;
  justify-content: space-between;
  text-align: center;
}
.lieitem img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 5px;
}
.empty {
  height: 50px;
}
.change {
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>