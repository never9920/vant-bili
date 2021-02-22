<template>
  <div>
    <van-swipe :autoplay="3000" class="swiper" :show-indicators="shadow">
     <van-swipe-item v-for="(item,i) in banner" :key="i" :style="{height:hight}">
       <img :src="image(item)" @click = "link(item)" :style="{height:hight}"/>
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
    },
    shadow:{
      type:Boolean,
      default:false
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
  border-radius: 5px;
  width: 100%;
}
</style>