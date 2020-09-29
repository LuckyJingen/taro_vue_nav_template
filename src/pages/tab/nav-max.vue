<template>
  <view class="index">
    <nav-custom-bar
      :is-back="false"
      :title-center="true"
      :is-home="false"
      :is-has-image="true"
      :title-size="'42rpx'"
      :bg-image="'https://img11.360buyimg.com/imagetools/jfs/t1/94854/24/16857/205112/5e7dccc3E14b755c1/16a8497ba1ae4e1d.png'"
    >
      <block
        slot="content"
      >
        首页
      </block>
    </nav-custom-bar>
    <view class="btn-box">
      <button
        style="margin-bottom:20rpx"
        @tap="goRouter"
      >
        跳转路由页面
      </button>
      <button
        @tap="goCover"
      >
        打开虚拟弹框页面
      </button>
    </view>
    <cover
      ref="coverPage"
      :result="result"
    />
  </view>
</template>
<script>
import cover from "./cover.vue";
export default {
  components: {
    cover
  },
   data(){
    return {
      result:"虚拟弹框页面数据展示"
    }
  },
  methods: {
    goRouter () {
        wx.redirectTo({
          url: "/pages/tab/nav-mini"
        });
    },
    goCover(){
        this.$refs.coverPage.backType=true
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
