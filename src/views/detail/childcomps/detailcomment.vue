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
import { getidstorage } from "common/mixin.js";
import { postcom } from "network/gethome.js";
export default {
  name: "detailcomment",
  data() {
    return {
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

  components: { comment, commentitem, vpopup, secondcom },

  computed: {},

  methods: {
    async posttext(val) {
      if (!val) {
        this.$toast.fail("请说点什么吧");
        return;
      }
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
      //console.log(this.param)

      let b = getidstorage();
      const res = await postcom(b, {
        comment_content: val,
        comment_date: str,
        article_id: this.$route.params.id,
        parent_id: this.param.parent_id,
      });
      if (res.protocol41) {
        this.$toast.success("发表成功");
        this.status = this.status + 1;
        this.param.parent_id = "";
        this.morestatus = false;
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