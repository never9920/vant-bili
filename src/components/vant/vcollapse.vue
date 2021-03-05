<template>
  <div>
    <van-collapse v-model="activeNames" @change="typech">
      <van-collapse-item name="1">
        <template #title>
          <div>
            <slot name="title"></slot>
          </div>
        </template>
        <slot name="nei"></slot>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  name: "vcollapse",
  data() {
    return {
        activeNames:['0']
    };
  },

  components: {},

  computed: {},

  methods: {
    typech(){
      this.$emit('typech',this.activeNames.length)
    }
  },
};
</script>
<style>
.van-cell{
  padding:0;
}
</style>