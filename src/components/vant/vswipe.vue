<template>
  <div>
    <van-swipe :autoplay="3000" class="swiper" :show-indicators=false>
     <van-swipe-item v-for="(item,i) in banner" :key="i" :style="{height:hight}">
       <img :src="image(item)" @click = "link(item)"/>
     </van-swipe-item>
   </van-swipe>
  </div>
</template>

<script>
export default {
  props:{
    banner:{
      type:Array,
      default:()=>[]
    },
    hight:{
      type:String,
      default:'195px'
    }
  },
name:"swipe",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
    image(item){
      if(item.image){
        return item.image
      }else{
        return item
      }
    },
    link(item){
      if(item.image){
        //console.log(item.link)
        window.location.href = item.link
      }
    }
  }
}

</script>
<style scoped>
.swiper img{
  width:100%;
  border-radius: 10px;
}
</style>