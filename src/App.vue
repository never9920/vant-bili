<template>
  <div id="app">
      <router-view />
    <tabbar v-show="!$route.meta.isshow"></tabbar>
  </div>
</template>

<script>
import tabbar from "./components/tabbar/tabbar";
export default {
  name: "app",
  components: {
    tabbar,
  },
};
</script>

<style>
</style>
