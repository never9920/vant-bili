<template>
  <div v-if="show" id="xiaokang">
    <vrefresh
      @refresh="refresh"
      :loading="loading"
      @loadingchange="loadingchange"
    >
      <div class="image">
        <img src="~assets/img/kangji1.jpg" alt="" />
      </div>
      <vgrid :icons="icons" :num="5" class="grid"></vgrid>
      <vswipe
        :banner="banner"
        hight="165px"
        class="top"
        :shadow="true"
      ></vswipe>
      <fouritem
        title="脱贫攻坚战取得全面胜利！"
        :hometab="hometab[1].list"
        gaodu="155px"
        type="xiaokang"
      ></fouritem>
      <fouritem
        title="致敬边疆战士"
        :hometab="hometab[2].list"
        gaodu="155px"
        type="xiaokang"
      ></fouritem>
      <fouritem
        title="习近平的扶贫故事"
        :hometab="hometab[3].list"
        gaodu="155px"
        type="xiaokang"
      ></fouritem>
      <fouritem
        title="《平“语”近人》"
        :hometab="hometab[4].list"
        gaodu="155px"
        type="xiaokang"
      ></fouritem>
      <fouritem
        title="十四五 新征程"
        :hometab="hometab[5].list"
        gaodu="155px"
        type="xiaokang"
      ></fouritem>
      <fouritem
        title="英国小哥下乡记"
        :hometab="hometab[6].list"
        gaodu="155px"
        type="xiaokang"
      ></fouritem>
      <fouritem
        title="美好生活|人间烟火"
        :hometab="hometab[7].list"
        gaodu="155px"
        type="xiaokang"
      ></fouritem>
      <fouritem
        title="扶贫Vlog"
        :hometab="hometab[8].list"
        gaodu="155px"
        type="xiaokang"
      ></fouritem>
      <fouritem
        title="健康扶贫，你我同行"
        :hometab="hometab[9].list"
        gaodu="155px"
        type="xiaokang"
      ></fouritem>
      <div class="empty"></div>
    </vrefresh>
  </div>
</template>

<script>
import vrefresh from "components/vant/vrefresh.vue";
import vswipe from "components/vant/vswipe.vue";
import vgrid from "components/vant/vgrid.vue";
import fouritem from "../kangji/fouritem.vue";
import { usersdata } from "common/const.js";
export default {
  name: "xiaokan",
  data() {
    return {
      hometab: {},
      show: false,
      loading: false,
      icons: [
        { title: "精准扶贫", img: require("@/assets/img/fupin.svg") },
        { title: "全面小康", img: require("@/assets/img/xiaokang.svg") },
        { title: "乡村振兴", img: require("@/assets/img/cun.svg") },
        { title: "美丽中国", img: require("@/assets/img/zhongguo.svg") },
        { title: "非遗传承", img: require("@/assets/img/feiyi.svg") },
      ],
      banner: [
        require("@/assets/img/xiaokang1.jpg"),
        require("@/assets/img/xiaokang2.jpg"),
        require("@/assets/img/xiaokang3.jpg"),
      ],
      pagesize: 4,
      numsize: 10,
    };
  },

  mixins: [usersdata],

  components: { vrefresh, vswipe, vgrid, fouritem },

  computed: {},

  methods: {
    refresh() {
      this.loading = true;
      scrollTo(0, 0);
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    loadingchange(val) {
      this.loading = val;
    },
  },
};
</script>
<style scoped>
.top {
  padding: 10px 8px 0 8px;
}
.top img {
  border-radius: 10px;
}
#xiaokang {
  background-color: #fff;
}
.empty {
  height: 50px;
}
.image img {
  height: 165px;
  border-radius: 5px;
  width: 100%;
}
.image {
  width: 355px;
  padding: 10px;
}
</style>