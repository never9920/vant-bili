<template>
  <div id="login">
    <vnavbar
      title="登录bilibili"
      right="注册"
      @change="change"
      @back="back"
      left="返回"
    ></vnavbar>
    <vfield
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      style="margin: 15px 0"
      @log="(res) => (username = res)"
      class="item"
    />
    <vfield
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      style="margin: 15px 0"
      @log="(res) => (password = res)"
      class="item"
    />
    <vbtns
      type="danger"
      size="large"
      :round="true"
      text="登录"
      style="margin: 15px 10px"
      @submit="submit"
    ></vbtns>
  </div>
</template>

<script>
import vbtns from "components/vant/vbtns.vue";
import vfield from "components/vant/vfield.vue";
import vnavbar from "components/vant/vnavbar.vue";
import { activestorage, idstorage, tokenstorage } from "common/mixin.js";
import { postlogin } from "network/gethome.js";
export default {
  name: "register",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  components: {
    vnavbar,
    vfield,
    vbtns,
  },

  computed: {},

  methods: {
    async submit() {
      //console.log('haha')
      let rule = /^.{6,16}$/;
      if (rule.test(this.username) && rule.test(this.password)) {
        //console.log('kkk')
        const res = await postlogin({
          username: this.username,
          password: this.password,
        });
        //console.log(res)
        if (res.code === 200) {
          this.$toast.success(res.msg);
          //console.log(res)
          idstorage(res.id);
          tokenstorage(res.token);
          setTimeout(() => {
            this.$router.push("/userinfo");
          }, 1000);
        } else {
          this.$toast.fail(res.msg);
        }
      } else {
        this.$toast.fail("格式不正确，请重新输入");
      }
    },
    change() {
      this.$router.push("/register");
      //console.log('kk')
    },
    back() {
      this.$router.push("/mine");
      this.$bus.$emit("tomine");
      activestorage("/mine");
    },
  },
};
</script>
<style scoped>
.login {
  background: red;
}
.item {
  padding: 10px 16px;
}
</style>