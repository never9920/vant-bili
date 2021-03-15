<template>
  <div>
    <div class="top">
      <div class="navbar">
        <div class="imgs">
          <img src="~assets/img/shou.svg" alt="" />
          <img src="~assets/img/jiawhite.svg" alt="" />
          <img src="~assets/img/whitedian.svg" alt="" />
        </div>
      </div>
      <div v-if="getid">
        <div class="login" @click="tologin">
          <div><img src="~assets/img/touxiang.jpg" alt="" /></div>
          <div class="right">
            <div>点 击 登 录</div>
            <div class="kong">＞</div>
          </div>
        </div>
        <div class="dong">
          <div>
            <div>--</div>
            <div>动态</div>
          </div>
          <div class="middle">
            <div>--</div>
            <div>关注</div>
          </div>
          <div>
            <div>--</div>
            <div>粉丝</div>
          </div>
        </div>
      </div>
      <div v-else>
        <div class="login" @click="touserinfo">
          <div>
            <img v-if="userinfo.user_img" :src="userinfo.user_img" />
            <img v-else src="~assets/img/touxiang.jpg" />
          </div>
          <div class="right">
            <div>
              <div class="name">
                {{ userinfo.username }}
                <img
                  src="~assets/img/male.svg"
                  v-if="userinfo.gender === '1'"
                />
                <img
                  src="~assets/img/female.svg"
                  v-else-if="userinfo.gender === '0'"
                />
                <span class="level">LV.max</span>
              </div>
              <div class="sheng">正式会员</div>
              <div class="bi">B币：0.0 硬币：688</div>
            </div>
            <div class="kong">空间 ＞</div>
          </div>
        </div>
        <div class="dong">
          <div>
            <div>5</div>
            <div>动态</div>
          </div>
          <div class="middle">
            <div>54</div>
            <div>关注</div>
          </div>
          <div>
            <div>0</div>
            <div>粉丝</div>
          </div>
        </div>
      </div>
      <div class="huiyuan">
        <div>
          <div class="shang">开通大会员</div>
          <div class="xia">专享超多权益</div>
        </div>
        <div>＞</div>
      </div>
    </div>
    <mineitem></mineitem>
  </div>
</template>

<script>
import mineitem from "./childcomps/mineitem.vue";
export default {
  name: "mine",
  data() {
    return {
      userinfo: [],
      getid: true,
    };
  },

  created() {
    this.getuserinfo();
  },

  components: { mineitem },

  computed: {},

  methods: {
    tologin() {
      this.$router.push("/login");
    },
    async getuserinfo() {
      if (sessionStorage.getItem("token") && sessionStorage.getItem("id")) {
        this.getid = false;
        const { data: res } = await this.$http.get(
          "/user/" + sessionStorage.getItem("id")
        );
        this.userinfo = res[0];
      }
    },
    touserinfo() {
      this.$router.push("/userinfo");
    },
  },
};
</script>
<style scoped>
.navbar {
  display: flex;
  height: 44px;
  align-items: center;
  padding: 0 10px;
}
.imgs {
  margin-left: auto;
}
.navbar img {
  width: 20px;
  height: 20px;
  margin-left: 20px;
}
.top {
  background-color: #fb7299;
  color: #ddd;
  position: sticky;
  top: 0;
  z-index: 1;
}
.login {
  display: flex;
  align-items: center;
}
.login img {
  width: 60px;
  height: 60px;
  padding: 20px 10px;
  border-radius: 50%;
}
.dong {
  display: flex;
  padding: 10px;
}
.dong div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.middle {
  border-left: solid 1px #aaa;
  border-right: solid 1px #aaa;
}
.huiyuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px 5px 0 0;
  padding: 10px;
}
.shang {
  font-size: 14px;
}
.xia {
  font-size: 12px;
}
.kong {
  font-size: 12px;
}
.right {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}
.right img {
  width: 20px;
  height: 20px;
  padding: 0 5px;
}
.name {
  display: flex;
  align-items: center;
}
.level {
  background-color: orange;
  border-radius: 5px;
  padding: 2px;
}
.sheng {
  border: solid 1px #ddd;
  font-size: 12px;
  width: 60px;
  text-align: center;
  border-radius: 5px;
  margin: 5px 0;
}
.bi {
  font-size: 12px;
}
</style>