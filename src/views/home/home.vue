<template>
  <div>
    <navbar :imgsrc="imgsrc"></navbar>
  </div>
</template>

<script>
import navbar from "../../components/content/navbar.vue";
export default {
  name: "home",
  data() {
    return {
      imgsrc: "",
    };
  },

  created() {
    this.getuser();
  },

  components: { navbar },

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
        this.imgsrc = require("@/assets/img/touxiang.jpg");
        //console.log(this.imgsrc)
      }
    },
  },
};
</script>
<style scoped>
</style>