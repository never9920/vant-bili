<template>
  <div ref="userdetail" class="zhangkai">
    <div class="detail">
      <div class="left">
        <img v-if="userinfo.user_img" :src="userinfo.user_img" />
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
          <div class="btn" @click="toedit">编辑资料</div>
        </div>
      </div>
    </div>
    <div class="introduce">
      <span class="pic">
        <h2>{{ userinfo.username }}</h2>
        <img src="~assets/img/male.svg" v-if="userinfo.gender === '1'" />
        <img src="~assets/img/female.svg" v-else-if="userinfo.gender === '0'" />
      </span>
      <div>
        <p v-if="userinfo.user_desc">{{ userinfo.user_desc }}</p>
        <p v-else>这个人很神秘，什么都没有写</p>
        <p v-if="showid" class="showiid" @click="change">展开</p>
        <p v-else class="showiid" @click="change">收起</p>
      </div>
      <div class="iid">uid:{{ userinfo.id }}</div>
    </div>
  </div>
</template>

<script>
import { getidstorage } from "common/mixin.js";
import { getusers } from "network/gethome.js";
export default {
  name: "userdetail",
  data() {
    return {
      showid: true,
      userinfo: [],
      picsrc: "",
    };
  },

  created() {
    this.getuserinfo();
  },

  watch: {
    picsrc(val) {
      this.$emit("picchange", val);
      //console.log(val)
    },
  },

  components: {},

  computed: {},

  methods: {
    async getuserinfo() {
      let b = getidstorage();
      const res = await getusers(b);
      this.userinfo = res[0];
      this.picsrc = this.userinfo.user_img;
      //console.log(this.userinfo)
    },
    change() {
      this.showid = !this.showid;
      if (this.showid) {
        this.$refs.userdetail.style.height = "165px";
      } else {
        this.$refs.userdetail.style.height = "200px";
      }
    },
    toedit() {
      this.$router.push("/edit");
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
</style>