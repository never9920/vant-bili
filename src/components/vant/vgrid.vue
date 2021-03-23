<template>
  <div>
    <van-grid :column-num="num" :border="false" class="grid">
      <van-grid-item
        v-for="(item, i) in icons"
        :key="i"
        icon="photo-o"
        text="文字"
        :to="item.path"
      >
        <img :src="item.img" />
        <p :class="{ danhang: danhang }">{{ item.title }}</p>
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
    danhang: {
      type: Boolean,
      default: false,
    },
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style>
.grid p {
  display: flex;
  font-size: 12px;
  width: 48px;
  justify-content: center;
  margin: 5px 0;
}
.grid img {
  height: 30px;
  width: 30px;
}
.van-grid-item__content {
  padding: 10px 8px;
}
.danhang {
  display: block !important;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>