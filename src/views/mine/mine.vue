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
      <div class="login" @click="tologin">
        <div><img src="~assets/img/touxiang.jpg" alt="" /></div>
        <div class="dian">点 击 登 录</div>
        <div>＞</div>
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
      <div class="huiyuan">
        <div>
          <div class="shang">开通大会员</div>
          <div class="xia">专享超多权益</div>
        </div>
        <div>＞</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {
    tologin() {
      this.$router.push("/login");
    }
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
.dian {
  width: 72%;
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
</style>