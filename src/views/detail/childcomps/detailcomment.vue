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
    <commentitem :reid="reid" :status="status" @userpub="userpub"></commentitem>
  </div>
</template>

<script>
import comment from "./comment";
import commentitem from "./commentitem.vue";
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
    };
  },

  props: ["reid"],

  created() {
    this.getuser();
  },

  components: { comment, commentitem },

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
  },
};
</script>
<style scoped>
.comments{
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 5px 0;
  background-color: #fff;
  z-index: 1;
}
.secondtop{
  font-size: 12px;
  padding: 10px 10px 10px 15px;
}
</style>