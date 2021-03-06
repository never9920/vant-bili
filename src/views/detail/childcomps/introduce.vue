<template>
  <div>
    <div class="detailinfo">
      <div v-if="model.userinfo" class="detailfo">
        <img
          :src="model.userinfo.user_img"
          v-if="model.userinfo.user_img"
          alt=""
        />
        <img src="~assets/img/touxiang.jpg" alt="" v-else />
        <div @click="tovis(model.userid)">
          <div class="third">{{ model.userinfo.name }}</div>
          <div class="namexia">
            <span>2333粉丝</span>
            <span>23视屏</span>
          </div>
        </div>
        <div class="cares" v-if="show" @click="postfol">
          <img src="~assets/img/jiawhite.svg" />
          <span>关注</span>
        </div>
        <div class="caresless" v-else @click="postfol">
          <span>取消关注</span>
        </div>
      </div>
      <vcollapse @typech="typech" class="zhedie">
        <div slot="title" v-if="model.category">
          <div :class="{ danhang: csstype }">
            <span class="first">{{ model.category.title }}</span>
            <span>{{ model.name }}</span>
          </div>
          <div class="detailin">
            <img src="~assets/img/bofangaaa.svg" />
            <span class="second">168万</span>
            <img src="~assets/img/danmuaaa.svg" />
            <span class="second">6688</span>
            <span class="second">{{ model.date }}</span>
            <span class="second">BV{{ model.id }}</span>
          </div>
        </div>
        <div slot="nei">
          <div>视屏简介来啦</div>
          <div>视屏简介来啦</div>
          <div>视屏简介来啦</div>
          <div>视屏简介来啦</div>
          <div>视屏简介来啦</div>
        </div>
      </vcollapse>
      <div class="icons">
        <div class="icon">
          <div v-if="dianzan" @click="chdian">
            <img src="~assets/img/dianzan.svg" alt="" />
            <div>688</div>
          </div>
          <div v-else @click="chdian">
            <img src="~assets/img/dianzanpink.svg" alt="" />
            <div>689</div>
          </div>
        </div>
        <div class="icon">
          <div v-if="bu" @click="chbu">
            <img src="~assets/img/bu.svg" alt="" />
            <div>2</div>
          </div>
          <div v-else @click="chbu">
            <img src="~assets/img/bupink.svg" alt="" />
            <div>3</div>
          </div>
        </div>
        <div class="icon">
          <div v-if="bi" @click="chbi">
            <img src="~assets/img/bi.svg" alt="" />
            <div>168</div>
          </div>
          <div v-else @click="chbi">
            <img src="~assets/img/bipink.svg" alt="" />
            <div>169</div>
          </div>
        </div>
        <div @click="postcoll" class="icon">
          <div v-if="show1">
            <img src="~assets/img/shou.svg" />
          </div>
          <div v-else>
            <img src="~assets/img/shoupink.svg" />
          </div>
          <div>2333</div>
        </div>
        <div @click="tobi" class="icon">
          <div>
            <img src="~assets/img/fen.svg" />
          </div>
          <div>168</div>
        </div>
      </div>
    </div>
    <relist :hometab="comment"></relist>
  </div>
</template>

<script>
import vcollapse from "components/vant/vcollapse.vue";
import relist from "../../home/childcomps/remen/relist.vue";
export default {
  name: "introduce",
  data() {
    return {
      show1: true,
      show: true,
      csstype: true,
      dianzan: true,
      bu: true,
      bi: true,
      comment: [],
    };
  },

  created() {
    this.collectioninit(), this.getcomment();
  },

  props: ["model", "show2"],

  components: {
    vcollapse,
    relist,
  },
  computed: {},

  watch: {
    $route() {
      //console.log('bianhua')
      this.collectioninit(), this.getcomment();
      scrollTo(0, 0);
    },
    show2(val) {
      this.show = val;
    },
    /*show(val){
        this.$emit()
    }*/
  },

  methods: {
    async postcoll() {
      if (sessionStorage.getItem("id") && sessionStorage.getItem("token")) {
        //console.log("kkk+++++++");
        const { data: res } = await this.$http.post(
          "/collection/" + sessionStorage.getItem("id"),
          { article_id: this.$route.params.id }
        );
        //console.log(res)
        if (res.code === 200) {
          this.$toast.success(res.msg);
          this.show1 = !this.show1;
        } else {
          this.$toast.fail("收藏失败");
        }
      } else {
        this.$toast.fail("请先登录");
        setTimeout(() => {
          this.$router.push("/login");
        }, 500);
      }
    },
    async collectioninit() {
      if (sessionStorage.getItem("id") && sessionStorage.getItem("token")) {
        const { data: res } = await this.$http.get(
          "/collection/" + sessionStorage.getItem("id"),
          {
            params: {
              article_id: this.$route.params.id,
            },
          }
        );
        //console.log(res)
        this.show1 = !res.success;
      }
    },
    async postfol() {
      if (sessionStorage.getItem("id") && sessionStorage.getItem("token")) {
        //console.log("kkk+++++++");
        const { data: res } = await this.$http.post(
          "/sub_scription/" + sessionStorage.getItem("id"),
          { sub_id: this.model.userid }
        );
        //console.log(res)
        if (res.code === 200) {
          this.$toast.success(res.msg);
          this.show = !this.show;
        } else {
          this.$toast.fail("关注失败");
        }
      } else {
        this.$toast.fail("请先登录");
        setTimeout(() => {
          this.$router.push("/login");
        }, 500);
      }
    },
    tobi() {
      window.open("https://www.bilibili.com/", "_self");
    },
    tovis(val) {
      //console.log(val)
      sessionStorage.setItem("img", this.model.userinfo.user_img);
      sessionStorage.setItem("gender", this.model.userinfo.gender);
      sessionStorage.setItem("visid", this.model.userinfo.id);
      sessionStorage.setItem("name", this.model.userinfo.name);
      sessionStorage.setItem("desc", this.model.userinfo.user_desc);
      this.$router.push("/vistor/" + val);
    },
    typech(val) {
      if (val === 1) {
        this.csstype = false;
      } else {
        this.csstype = true;
      }
    },
    chdian() {
      this.dianzan = !this.dianzan;
    },
    chbu() {
      this.bu = !this.bu;
    },
    chbi() {
      this.bi = !this.bi;
    },
    async getcomment() {
      const { data: res } = await this.$http.get("/commend");
      this.comment = res;
      //console.log(res)
    },
  },
};
</script>
<style scoped>
.detailinfo {
  padding: 15px;
}
.first {
  padding: 5px 10px;
  margin-right: 10px;
  color: #fb7299;
  background-color: #f4f4f4;
  border-radius: 10px;
  font-size: 12px;
}
.detailfo {
  padding: 5px 10px 5px 3px;
  display: flex;
  justify-items: center;
  align-items: center;
}
.detailfo img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}
.second {
  color: #aaa;
  font-size: 12px;
  margin-right: 15px;
}
.third {
  color: black;
  font-size: 16px;
  margin: 3px 0;
}
.namexia {
  color: #aaa;
  font-size: 12px;
}
.namexia span {
  margin-right: 10px;
}
.cares {
  position: absolute;
  background-color: #fb7299;
  right: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  display: flex;
  align-items: center;
}
.cares img {
  height: 12px;
  width: 12px;
}
.caresless {
  position: absolute;
  border: solid 1px #aaa;
  right: 10px;
  padding: 5px 15px;
  border-radius: 5px;
  color: white;
  background-color: #aaa;
  font-size: 12px;
}
.danhang {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 320px;
}
.detailin img {
  width: 12px;
  height: 12px;
}
.detailin {
  display: flex;
  align-items: center;
}
.icons {
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  color: #aaa;
  padding-bottom: 10px;
  border-bottom: solid 1px #f4f4f4;
}
.icons img {
  width: 20px;
  height: 20px;
  padding: 5px;
}
.zhedie {
  margin: 5px 0;
}
.icon {
  text-align: center;
  padding: 0;
}
</style>