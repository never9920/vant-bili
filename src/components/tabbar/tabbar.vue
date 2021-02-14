<template>
  <div>
      <vtabbar :bardata="bardata"></vtabbar>
  </div>
</template>

<script>
import vtabbar from '../vant/vtabbar.vue';
export default {
name:"tabbar",
  data () {
    return {
        bardata:[
            {title:'首页',icon:'wap-home-o',path:'/home',},
            {title:'频道',icon:'apps-o',path:'/category',},
            {title:'动态',icon:'orders-o',path:'/updata',},
            {title:'会员购',icon:'shop-o',path:'/buy',},
            {title:'我的',icon:'user-circle-o',path:'/mine',}]
    };
  },

  components: {vtabbar},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>