<template>
  <view
    v-if="backType"
    class="cover"
  >
    <nav-custom-bar
      :bg-color="'bg-white'"
      :is-back="true"
      :is-home="false"
      :back-type="backType"
      :back-color="'#000000'"
    >
      <block
        slot="content"
      >
        虚拟页面
      </block>
    </nav-custom-bar>

    <scroll-view
      scroll-y
      class="page"
    >
      <view class="success-box">
        <image
          class="success-icon"
          src="https://img13.360buyimg.com/imagetools/jfs/t1/99419/10/16272/55020/5e7ac775Eca8db583/536e3318a432e024.png"
        />
        <view class="success-title">
          {{ result }}
        </view>
      </view>
      <view class="btn-box">
        <button
          @tap="close"
        >
          返回上一页
        </button>
      </view>
    </scroll-view>
  </view>
</template>
<script>
export default {
  name: "Cover",
  props:{
      result: {
        type: [String,Object],
        default: ''
    }
  },
  data(){
    return {
      backType:false
    }
  },
  methods: {
      close () {
        this.backType=false
    }
  }
}
</script>

<style>
.cover{
  position:fixed;
  top:0;
  bottom:0;
  background:#fff;
  height:100%;
  left:0;
  right:0;
  width:100%;
  z-index: 100;
}
/* 错误和成功提示页面样式 */
.error-box,
.success-box {
  padding-top: 250rpx;
  text-align: center;
  background: #fff;
}

.error-icon,
.success-icon {
  width: 128rpx;
  height: 128rpx;
  margin-bottom: 58rpx;
}

.error-title,
.success-title {
  font-family: PingFangSC-Regular;
  font-size: 30rpx;
  color: #303133;
  text-align: center;
}

.error-mess,
.success-mess {
  font-family: PingFangSC-Regular;
  font-size: 28rpx;
  color: #303133;
  text-align: center;
  line-height: 47rpx;
}
</style>
