<template>
  <div>
    <div class="guding">
      <div class="top">
        <vicon name="arrow-left" size="20px" color="white" @click.native="toback"></vicon>
        <img src="~assets/img/whitedian.svg" alt="" />
      </div>
      <detailinfo></detailinfo>
      <list :hometab="comment" class="list"></list>
      <comment
        :picsrc="imgsrc"
        :numlength="numlength"
        @posttext="posttext"
        :status="status"
        ref="comcom"
      ></comment>
      <!--<commentitem
        v-if="model.userid"
        @getnumber="getnumber"
        :status="status"
        @userpub="userpub"
        :reid="model.userid"
      ></commentitem>-->
    </div>
  </div>
</template>

<script>
import vicon from 'components/vant/vicon.vue';
import list from "../home/childcomps/list";
import comment from "./childcomps/comment.vue";
import commentitem from "./childcomps/commentitem.vue";
import detailinfo from './childcomps/detailinfo.vue';
export default {
  name: "home",
  data() {
    return {
      imgsrc: "",
      comment: [],
      numlength: 0,
      param: {
        comment_content: "",
        comment_date: "",
        parent_id: null,
        article_id: null,
      },
      status: 0,
    };
  },

  components: {
    list,
    comment,
    vicon,
    detailinfo,
  },

  created() {
    this.getuser(), this.getcomment()
  },

  watch:{
    $router(){
      this.getcomment()
    }
  },

  computed: {},

  methods: {
    async getuser() {
      if (sessionStorage.getItem("id")) {
        const { data: res } = await this.$http.get(
          "/user/" + sessionStorage.getItem("id")
        );
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
    async getcomment() {
      const { data: res } = await this.$http.get("/commend");
      this.comment = res;
      //console.log(res)
    },
    getnumber(val) {
      this.numlength = val;
    },
    async posttext(val) {
      if (!val) {
        this.$toast.fail("请说点什么吧");
        return;
      }
      this.param.comment_content = val;
      let data = new Date();
      let m = data.getMonth() + 1;
      let d = data.getDate();
      if (m < 10) {
        m = "0" + m;
      }
      if (d < 10) {
        d = "0" + d;
      }
      let str = `${m}-${d}`;
      this.param.comment_date = str;
      this.param.article_id = this.$route.params.id;
      //console.log(this.param)
      const res = await this.$http.post(
        "/comment_post/" + sessionStorage.getItem("id"),
        this.param
      );
      //console.log(res.status)
      if (res.status === 200) {
        this.$toast.success("发表成功");
        this.status = this.status + 1;
        this.param.parent_id = "";
        this.$refs.comcom.$refs.cominput.placeholder = "说点什么吧";
      } else {
        this.$toast.fail("发表失败");
      }
    },
    userpub(val) {
      this.param.parent_id = val.comment_id;
      //console.log(val)
      let username = "";
      if (val.userinfo.name) {
        username = val.userinfo.name;
        //console.log(this.username);
      } else {
        username = "";
      }
      this.$refs.comcom.$refs.cominput.placeholder = "回复" + username;
      this.$refs.comcom.inputfoc();
    },
    
    toback(){
      this.$router.back()
    }
  },
};
</script>
<style scoped>
.guding{
  position: relative;
}
.top{
  position: absolute;
  background-color: rgba(0,0,0,0);
  display: flex;
  justify-content: space-between;
  margin:10px 10px;
  width: 96%;
  z-index: 1;
}
.top img{
  width: 20px;
  height: 20px;
}
</style>