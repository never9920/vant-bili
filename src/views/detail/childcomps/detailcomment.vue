<template>
  <div>
    <comment
      @posttext="posttext"
      :status="status"
      ref="comcom"
      class="comments"
    ></comment>
    <div class="secondtop">
      <div>热门评论</div>
    </div>
    <commentitem
      :reid="reid"
      :status="status"
      @userpub="userpub"
      @showmore="showmore"
    ></commentitem>
    <vpopup :morestatus="morestatus" @statusch="statusch">
      <div class="poptitle">
        <div>评论详情</div>
        <div @click="changestat" class="close">×</div>
      </div>
      <secondcom
        :child="morechild"
        @userpub="userpub"
        :reid="reid"
        @changestat="changestat"
        :chang="morechild.length"
      ></secondcom>
      <div class="empty"></div>
    </vpopup>
  </div>
</template>

<script>
import comment from "./comment";
import commentitem from "./commentitem.vue";
import vpopup from "components/vant/vpopup.vue";
import secondcom from "./secondcom";
export default {
  name: "detailcomment",
  data() {
    return {
      imgsrc: "",
      numlength: 0,
      param: {
        comment_content: "",
        comment_date: "",
        parent_id: null,
        article_id: null,
      },
      status: 0,
      morestatus: false,
      morechild: [],
    };
  },

  props: ["reid"],

  created() {
    this.getuser();
  },

  components: { comment, commentitem, vpopup, secondcom },

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
    statusch(val) {
      this.morestatus = val;
    },
    changestat() {
      this.morestatus = false;
    },
    showmore(val) {
      this.morechild = val;
      this.morestatus = true;
    },
  },
};
</script>
<style scoped>
.comments {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  background-color: #fff;
  z-index: 9999;
}
.secondtop {
  font-size: 12px;
  padding: 10px 10px 10px 15px;
}
.poptitle {
  display: flex;
  height: 30px;
  padding: 3px 10px;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
  box-shadow: 0 2px 2px #f4f4f4;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
}
.close {
  color: #aaa;
  font-size: 20px;
  padding: 0;
}
.empty {
  height: 40px;
}
</style>