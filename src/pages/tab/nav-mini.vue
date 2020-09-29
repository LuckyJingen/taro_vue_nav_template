<template>
  <view class="index">
    <nav-custom-bar
      :bg-color="'bg-white'"
      :is-back="true"
      :is-home="false"
      :is-has-image="true"
      :back-color="'#000000'"
      :title-size="'42rpx'"
      :back-type="false"
      :title-center="false"
      :router-link="'/pages/tab/nav-max'"
    >
      <block
        slot="content"
      >
        新页面
      </block>
    </nav-custom-bar>
    <view class="btn-box">
      <button
        @tap="goRouter"
      >
        返回首页
      </button>
    </view>
  </view>
</template>
<script>
export default {
  methods: {
    goRouter () {
        wx.redirectTo({
        url: "/pages/tab/nav-max"
      });
    }
  }
}
</script>
<style>
.btn-box{
  position:fixed;
  bottom:100rpx;
  left:50%;
  transform:translate(-50%);
  width:80%;
}
</style>
