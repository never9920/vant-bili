<template>
  <div>
      <div class="video">
        <video
          :src="model.content"
          controls="controls"
          :onerror="changevideo"
        ></video>
      </div>
      <detailtab @typech="typech"></detailtab>
    <div class="detailinfo" v-show="current === 0">
      <div v-if="model.category" class="detailin">
        <span class="first">{{ model.category.title }}</span>
        <span>{{ model.name }}</span>
      </div>
      <div v-if="model.userinfo" class="detailfo">
        <img src="~assets/img/up.svg" />
        <span class="third" @click="tovis(model.userid)">{{
          model.userinfo.name
        }}</span>
        <span class="second">168万次播放</span>
        <span class="second">6688弹幕</span>
        <span class="second">{{ model.date }}</span>
      </div>
      <div class="icons">
        <div @click="postcoll">
          <img v-if="show1" src="~assets/img/shou.svg" />
          <img v-else src="~assets/img/shoupink.svg" />
          <span>收藏</span>
        </div>
        <div @click="tobi">
          <img src="~assets/img/xia.svg" />
          <span>缓存</span>
        </div>
        <div @click="tobi">
          <img src="~assets/img/fen.svg" />
          <span>分享</span>
        </div>
        <div class="cares" v-if="show2" @click="postfol">
          <img src="~assets/img/jia.svg" />
          <span>关注</span>
        </div>
        <div class="caresless" v-else @click="postfol">
          <img src="~assets/img/yi.svg" />
          <span>取消关注</span>
        </div>
      </div>
    </div>
    <div v-show="current === 1">评论</div>
  </div>
</template>

<script>
import detailtab from './detailtab.vue';
export default {
  name: "detailinfo",
  data() {
    return {
      model: [],
      show1: true,
      show2: true,
      changevideo: 'this.src="' + require("@/assets/img/lego.mp4") + '"',
      current:0
    };
  },
  created() {
       this.getvideo(), this.collectioninit(),this.folinit();
  },

  watch: {
    $route() {
      //console.log('bianhua')
      this.getvideo(), this.collectioninit();
      scrollTo(0, 0);
    },
  },

  components: {detailtab},

  computed: {},

  methods: {
    async getvideo() {
      const { data: res } = await this.$http(
        "/article/" + this.$route.params.id
      );
      this.model = res[0];
      //console.log(this.model);
      this.folinit();
    },
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
          this.show2 = !this.show2;
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
    async folinit() {
      if (sessionStorage.getItem("id") && sessionStorage.getItem("token")) {
        const { data: res } = await this.$http.get(
          "/sub_scription/" + sessionStorage.getItem("id"),
          {
            params: {
              sub_id: this.model.userid,
            },
          }
        );
        //console.log(res)
        this.show2 = !res.success;
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
    typech(val){
      this.current = val
    }
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
  padding: 15px 10px 15px 3px;
  display: flex;
  justify-items: center;
  align-items: center;
}
.detailfo img {
  width: 16px;
  height: 16px;
  padding-right: 5px;
}
.second {
  color: #aaa;
  font-size: 12px;
  flex: 1;
}
.third {
  color: black;
  font-size: 14px;
  padding-right: 10px;
  height: 20px;
  display: flex;
  align-items: center;
}
.icons {
  display: flex;
  font-size: 12px;
  height: 30px;
}
.icons div {
  display: flex;
  margin-right: 15px;
  align-items: center;
  justify-items: center;
}
.icons img {
  height: 20px;
  width: 20px;
  margin-right: 3px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.cares {
  position: absolute;
  border: solid 1px #fb7299;
  right: 10px;
  padding: 5px 15px;
  border-radius: 10px;
  color: #fb7299;
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
  border-radius: 10px;
  color: white;
  background-color: #aaa;
}
.caresless img {
  height: 12px;
  width: 12px;
}
.video {
  width: 100%;
}
.video video {
  width: 100%;
}
</style>