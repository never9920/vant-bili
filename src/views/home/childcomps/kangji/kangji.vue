<template>
  <div id="kangji" v-if="show">
    <vrefresh
      @refresh="refresh"
      :loading="loading"
      @loadingchange="loadingchange"
    >
      <vswipe :banner="banner" hight="165px" class="top" :shadow="true"></vswipe>
      <vgrid :icons="icons" :num="5" class="grid"></vgrid>
      <fouritem
        title="要点聚焦"
        :hometab="hometab[1].list"
        :xiashow="true"
        gaodu="140px"
        type="kangji"
      ></fouritem>
      <fouritem
        title="病毒溯源"
        :hometab="hometab[2].list"
        gaodu="140px"
        type="kangji"
      ></fouritem>
      <fouritem
        title="疫苗动态"
        :hometab="hometab[3].list"
        :xiashow="true"
        gaodu="140px"
        type="kangji"
      ></fouritem>
      <fouritem
        title="战役日记"
        :hometab="hometab[4].list"
        :xiashow="true"
        gaodu="140px"
        type="kangji"
      ></fouritem>
      <fouritem
        title="科普知识"
        :hometab="hometab[5].list"
        :xiashow="true"
        gaodu="140px"
        type="kangji"
      ></fouritem>
      <div class="empty"></div>
    </vrefresh>
  </div>
</template>

<script>
import vrefresh from "components/vant/vrefresh.vue";
import vswipe from "components/vant/vswipe.vue";
import vgrid from "components/vant/vgrid.vue";
import fouritem from "./fouritem.vue";
export default {
  name: "kangji",
  data() {
    return {
      hometab: {},
      show: false,
      loading: false,
      icons: [
        { title: "疫情速报", img: require("@/assets/img/subao.svg") },
        { title: "上海疫情", img: require("@/assets/img/shanghai.svg") },
        { title: "医疗天使", img: require("@/assets/img/yiliao.svg") },
        { title: "求助", img: require("@/assets/img/qiuzhu.svg") },
        { title: "辟谣平台", img: require("@/assets/img/qiyao.svg") },
      ],
      banner: [
        require("@/assets/img/kangji1.jpg"),
        require("@/assets/img/kangji2.jpg"),
        require("@/assets/img/kangji3.jpg"),
        require("@/assets/img/kangji4.jpg"),
      ],
    };
  },

  created() {
    this.gethome();
  },

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
    async gethome() {
      const { data: res } = await this.$http.get("/category");
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
      for (let i = 0; i < 6; i++) {
        this.getdetail(i);
      }
      //console.log(this.firsttab)
    },
    async getdetail(id) {
      const page = this.hometab[id].page + 1;
      const { data: res } = await this.$http.get(
        "/detail/" + this.hometab[id]._id,
        {
          params: { page, pagesize: 4 },
        }
      );
      this.hometab[id].list.push(...res);
      this.hometab[id].page += 1;
      this.hometab[id].loading = false;
      if (res.length < 10) {
        this.hometab[id].finished = true;
      }
      this.show = true;
      //console.log(this.hometab)
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
#kangji {
  background-color: #fff;
}
.grid {
  margin: 10px 0;
}
.empty {
  height: 50px;
}
</style>