<template>
  <div class="page page-welcome">
    <h1>hello world</h1>
    <van-button type="primary" size="large">提交</van-button>
  </div>
</template>

<script>
import { Button } from 'vant'
export default {
  components: {
    [Button.name]: Button
  }
}
</script>

<style lang="postcss">
@import 'config.css';
h1 {
  font-size: 13px;
  color: $color;
}
</style>
