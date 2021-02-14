<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
export default {
  name: 'app',
  components: {
    tabbar
  }
}
</script>

<style>
</style>
