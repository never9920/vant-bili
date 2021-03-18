<template>
  <div class="comitem">
    <div class="item" v-for="(item, index) in commdentdata" :key="index">
      <div class="itemimg">
        <img
          v-if="item.userinfo && item.userinfo.user_img"
          :src="item.userinfo.user_img"
          alt=""
          @click="tovis(item.userinfo)"
        />
        <img
          v-else
          src="~assets/img/touxiang.jpg"
          alt=""
          @click="tovis(item.userinfo)"
        />
      </div>
      <div class="iteminfo">
        <div class="firstcom">
          <div
            v-if="item.userinfo && item.userinfo.name"
            class="name"
            @click="tovis(item.userinfo)"
          >
            {{ item.userinfo.name }}
            <img v-if="reid === item.user_id" src="~assets/img/up.svg" />
          </div>
          <div v-else @click="tovis(item.userinfo)">此用户未命名</div>
          <div v-if="item.comment_date">{{ item.comment_date }}</div>
          <div v-else>04-17</div>
        </div>
        <div class="text" v-if="item.comment_content">
          {{ item.comment_content }}
        </div>
        <div class="text" v-else>此用户什么都没说</div>
        <div class="icons">
          <div class="icon">
            <div v-if="shows[index].dianch" @click="diantype(index)">
              <img src="~assets/img/dianzan.svg" alt="" />
              <span>{{ item.user_id }}</span>
            </div>
            <div @click="diantype(index)" v-else>
              <img src="~assets/img/dianzanpink.svg" alt="" />
              <span>{{ item.user_id + 1 }}</span>
            </div>
          </div>
          <div class="icon">
            <div v-if="shows[index].buch" @click="butype(index)">
              <img src="~assets/img/bu.svg" alt="" />
            </div>
            <div v-else @click="butype(index)">
              <img src="~assets/img/bupink.svg" alt="" />
            </div>
          </div>
          <div class="icon" @click="tobi">
            <div>
              <img src="~assets/img/fen.svg" alt="" />
            </div>
          </div>
          <div class="icon" @click="userpub(item)">
            <div>
              <img src="~assets/img/commentaaa.svg" alt="" />
            </div>
          </div>
        </div>
        <div v-if="item.child.length !== 0" class="answer">
          <div>
            <middle
              :child="item.child.slice(0, 3)"
              @userpub="userpub"
              :reid="reid"
            ></middle>
            <div class="more" @click="showmore(item.child)">
              共{{ arrlen[index] }}条回复&nbsp;＞
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="empty"></div>
  </div>
</template>

<script>
import middle from "./middle.vue";
import { tovis } from "common/mixin.js";
export default {
  name: "commentitem",
  data() {
    return {
      commdentdata: [],
      shows: [],
      morestatus: false,
      morechild: [],
      arrlen: [],
    };
  },

  props: {
    status: {
      type: Number,
    },
    reid: {
      type: Number,
    },
  },

  created() {
    this.getcomitem();
  },

  mounted(){
    this.getcomitem()
  },

  watch: {
    $route() {
      this.getcomitem();
    },
    status() {
      this.getcomitem();
    },
  },

  components: { middle },

  computed: {},

  methods: {
    async getcomitem() {
      //console.log(this.$route.params.id);
      const { data: res } = await this.$http.get(
        "/comment/" + this.$route.params.id
      );
      //console.log(res);
      this.commdentdata = this.changedata(res);
      this.arrlen = []
      for (let i in this.commdentdata) {
        this.shows[i] = {};
        this.shows[i].dianch = true;
        this.shows[i].buch = true;
        this.arrlen.push(this.arrlength(this.commdentdata[i].child));
      }
      //console.log(this.arrlen);
    },
    changedata(data) {
      function fn(temp) {
        let arr1 = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id == temp) {
            arr1.push(data[i]);
            data[i].child = fn(data[i].comment_id);
          }
        }
        return arr1;
      }
      return fn(null);
    },
    arrlength(child) {
      var a = child.length;
      function fn(arr) {
        for (let i in arr) {
          if (arr[i].child) {
            a = a + arr[i].child.length;
          }
          fn(arr[i].child);
        }
        return a;
      }
      const b = fn(child);
      return b;
    },
    userpub(id) {
      this.$emit("userpub", id);
    },
    diantype(i) {
      this.$set(this.shows, i, {
        dianch: !this.shows[i].dianch,
        buch: this.shows[i].buch,
      });
      //console.log(this.shows[i].dianch)
    },
    butype(i) {
      this.$set(this.shows, i, {
        dianch: this.shows[i].dianch,
        buch: !this.shows[i].buch,
      });
    },
    tobi() {
      window.open("https://www.bilibili.com/", "_self");
    },
    showmore(child) {
      this.$emit("showmore", child);
    },
    tovis(val) {
      tovis(val);
      this.$router.push("/vistor/" + val.id);
    },
  },
};
</script>
<style scoped>
.comitem {
  padding: 0 10px;
}
.item {
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 0;
  width: 355px;
}
.itemimg img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.iteminfo {
  margin-left: 10px;
  width: 310px;
}
.text {
  font-size: 13px;
  margin: 10px 0;
  word-break: break-all;
}
.bgc {
  background-color: #f9f9f9;
  border-radius: 10px;
  max-height: 145px;
  padding: 5px 0;
  overflow: scroll;
}
.iteminfo img {
  height: 16px;
  width: 16px;
  margin-left: 5px;
}
.name {
  display: flex;
  margin-bottom: 3px;
}
.firstcom {
  font-size: 12px;
  color: grey;
  margin-bottom: 5px;
  width: 100%;
}
.icons {
  display: flex;
  margin: 5px 0;
}
.icons img {
  width: 12px;
  height: 12px;
  margin-right: 3px;
}
.icon {
  margin-right: 5px;
  font-size: 10px;
  color: grey;
}
.answer {
  background-color: #ddd;
  padding: 5px;
  border-radius: 5px;
  font-size: 12px;
}
.more {
  color: rgb(37, 136, 175);
}
.empty {
  height: 40px;
}
</style>