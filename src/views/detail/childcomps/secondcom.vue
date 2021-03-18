<template>
  <div>
    <div v-for="(item, index) in child" :key="index">
      <div class="item">
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
        <div>
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
            <div class="text" v-if="temp">
              回复
              <span style="color: #475ef0" @click="tovis(item.parent_user_info)"
                >@{{ item.parent_user_info.name }}</span
              >：{{ item.comment_content }}
            </div>
            <div class="text" v-else>{{ item.comment_content }}</div>
            <div class="icons">
              <div class="icon">
                <div @click="diantype(index)" v-if="shows[index].dianch">
                  <img src="~assets/img/dianzan.svg" alt="" />
                  <span>{{ item.user_id }}</span>
                </div>
                <div @click="diantype(index)" v-else>
                  <img src="~assets/img/dianzanpink.svg" alt="" />
                  <span>{{ item.user_id + 1 }}</span>
                </div>
              </div>
              <div class="icon">
                <div @click="butype(index)" v-if="shows[index].buch">
                  <img src="~assets/img/bu.svg" alt="" />
                </div>
                <div @click="butype(index)" v-else>
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
          </div>
        </div>
      </div>
      <secondcom
        :child="item.child"
        :temp="true"
        @userpub="userpub"
        :reid="reid"
        :chang="item.child.length"
      ></secondcom>
    </div>
  </div>
</template>

<script>
import { tovis } from "common/mixin.js";
export default {
  name: "secondcom",
  data() {
    return {
      shows: [],
      duan: null,
    };
  },

  props: {
    child: {
      type: Array,
    },
    temp: {
      type: Boolean,
      default: false,
    },
    reid: {
      type: Number,
    },
    chang: {
      type: Number,
    },
  },
  created() {
    this.shuzu();
  },
  watch: {
    child() {
      this.shuzu();
    },
  },

  components: {},

  computed: {},

  methods: {
    userpub(id) {
      this.$emit("userpub", id);
      //console.log(id);
    },
    changestat() {
      this.$emit("changestat");
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
    shuzu() {
      //console.log(this.chang);
      for (let i in this.child) {
        this.shows[i] = {};
        this.shows[i].dianch = true;
        this.shows[i].buch = true;
      }
      //console.log(this.shows)
    },
    tovis(val) {
      tovis(val);
      this.$router.push("/vistor/" + val.id);
    },
  },
};
</script>
<style scoped>
.item {
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px;
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
.firstcom {
  font-size: 12px;
  color: grey;
  margin-bottom: 5px;
  width: 100%;
}
.name {
  display: flex;
  margin-bottom: 3px;
}
</style>