<template>
  <view class="content">
    <view>
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Index extends Vue {
  title = 'Hello'

  // eslint-disable-next-line class-methods-use-this
  onLoad(): void {
    console.log(process.env.NODE_ENV, process.env.VUE_APP_BASE_URL);
  }
}
</script>

<style lang="less" scoped>

</style>
