<template>
  <div>
    <van-tabbar route  active-color="#fb7299">
      <van-tabbar-item replace :to=item.path :icon=item.icon v-for="(item,i) in bardata" :key="i">{{item.title}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
name:"vtabbar",
props:{
  bardata:{
    type:Array,
    default:()=>[]
  }
},
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>