<template>
  <div>
    <navbar :imgsrc="imgsrc"></navbar>
    <img src="~assets/img/bgc.png" class="image" />
    <div ref="userdetail" class="zhangkai">
      <div class="detail">
        <div class="left">
          <img v-if="user_img !== 'null'" :src="user_img" />
          <img v-else src="~assets/img/touxiang.jpg" />
        </div>
        <div class="right">
          <div class="shang">
            <div>
              <div>0</div>
              <div class="text">粉丝</div>
            </div>
            <div class="center">
              <div>54</div>
              <div class="text">关注</div>
            </div>
            <div>
              <div>0</div>
              <div class="text">获赞</div>
            </div>
          </div>
          <div class="xia">
            <div class="btn" @click="addcom" v-if="show">＋关注</div>
            <div class="btn1" @click="addcom" v-else>取消关注</div>
          </div>
        </div>
      </div>
      <div class="introduce">
        <span class="pic">
          <h2>{{ name }}</h2>
          <img src="~assets/img/male.svg" v-if="gender === '1'" />
          <img src="~assets/img/female.svg" v-else-if="gender === '0'" />
        </span>
        <div>
          <p v-if="desc !== 'null'">{{ desc }}</p>
          <p v-else>这个人很神秘，什么都没有写</p>
          <p v-if="showid" class="showiid" @click="change">展开</p>
          <p v-else class="showiid" @click="change">收起</p>
        </div>
        <div class="iid">uid:{{ id }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "components/content/navbar";
import { getimg, getsub, postsub } from "network/gethome.js";
import {
  getidstorage,
  gettokenstorage,
  getimgstorage,
  getgenderstorage,
  getvisidstorage,
  getstorage,
  getdescstorage,
} from "common/mixin.js";
export default {
  name: "visitor",
  data() {
    return {
      imgsrc: "",
      visitorinfo: null,
      user_img: null,
      id: 0,
      gender: null,
      name: null,
      desc: null,
      showid: true,
      show: true,
    };
  },

  created() {
    this.getuser(), this.visinfo(), this.folinit();
  },

  activated() {
    this.getuser(), this.visinfo(), this.folinit();
  },

  components: {
    navbar,
  },

  computed: {},

  methods: {
    async getuser() {
      let b = getidstorage();
      if (b) {
        const res = await getimg(b);
        //console.log(res)
        this.imgsrc = res[0].user_img;
        if (!this.imgsrc) {
          this.imgsrc = require("@/assets/img/touxiang.jpg");
        }
        //console.log(this.imgsrc)
      } else {
        this.imgsrc =
          "//s1.hdslb.com/bfs/static/jinkela/long/images/login.png@48w_48h_1c.png";
        //console.log(this.imgsrc)
      }
    },
    visinfo() {
      this.user_img = getimgstorage();
      this.gender = getgenderstorage();
      this.id = getvisidstorage();
      this.name = getstorage();
      this.desc = getdescstorage();
      //console.log(this.user_img)
    },
    change() {
      this.showid = !this.showid;
      if (this.showid) {
        this.$refs.userdetail.style.height = "165px";
      } else {
        this.$refs.userdetail.style.height = "200px";
      }
    },
    async addcom() {
      let a = gettokenstorage();
      let b = getidstorage();
      if (a && b) {
        //console.log("kkk+++++++");
        const res = await postsub(b, {
          sub_id: this.$route.params.id,
        });
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
    async folinit() {
      let a = gettokenstorage();
      let b = getidstorage();
      if (a && b) {
        const res = await getsub(b, {
          sub_id: this.$route.params.id,
        });
        //console.log(res)
        this.show = !res.success;
      }
    },
  },
};
</script>
<style scoped>
.detail {
  padding: 0 12px;
  display: flex;
}
.left img {
  width: 84px;
  height: 84px;
  border-radius: 50%;
}
.right {
  flex: 1;
}
.shang {
  display: flex;
  font-size: 13px;
  margin: 5px 0;
}
.shang div {
  text-align: center;
  flex: 1;
  justify-content: center;
  align-items: center;
}
.xia {
  text-align: center;
  padding: 5px 5px;
}
.btn {
  border: solid 2px #fb7a9f;
  margin: 5px 10px;
  border-radius: 5px;
  color: #fb7a9f;
  padding: 3px;
  justify-content: center;
  align-items: center;
}
.btn1 {
  border: solid 2px #555;
  margin: 5px 10px;
  background-color: #555;
  border-radius: 5px;
  color: #fff;
  padding: 3px;
  justify-content: center;
  align-items: center;
}
.center {
  border-left: solid 1px #ccc;
  border-right: solid 1px #ccc;
}
.text {
  color: #aaa;
}
.introduce {
  padding: 0 12px;
}
.introduce h2 {
  margin: 10px 0 3px 0;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 28px;
  padding: 0 10px 0 0;
}
.introduce p {
  padding: 0;
  margin: 10px 0;
  color: #999;
}
.introduce div {
  display: flex;
  align-items: center;
}
.showiid {
  flex: 1;
  text-align: right;
  color: skyblue !important;
}
.zhangkai {
  overflow: hidden;
  height: 165px;
}
.iid {
  background-color: #f1f1f1;
  width: fit-content;
  padding: 5px;
  border-radius: 5px;
  font-size: 13px;
}
.pic {
  display: flex;
}
.pic img {
  width: 16px;
}
.image {
  width: 100%;
  height: 90px;
}
</style>