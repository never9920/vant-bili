<template>
  <div>
    <van-grid :column-num="num" :border="false" class="grid">
      <van-grid-item
        v-for="(item, i) in icons"
        :key="i"
        icon="photo-o"
        text="文字"
      >
        <img :src="item.img" />
        <p>{{ item.title }}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: "vgrid",
  data() {
    return {};
  },

  props: {
    num: {
      type: Number,
    },
    icons: {
      type: Array,
    },
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style>
.grid p {
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 48px;
  justify-content: center;
  margin: 5px 0;
}
.grid img {
  height: 30px;
  width: 30px;
}
.van-grid-item__content{
  padding:10px 8px ;
}
</style>