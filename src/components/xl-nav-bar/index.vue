<template>
  <view>
    <view
      class="cu-custom"
      :style="[{height:CustomBar+ 'px',background:bgColor}]"
    >
      <image
        :src="bgImage"
        mode="widthFix"
        class="response"
      />
      <view
        class="cu-bar"
        :style="style"
        :class="[bgImage!=''?'none-bg text-white bg-img':'',bgColor]"
      >
        <view
          v-if="isBack"
          class="action"
        >
          <image
            class="icon-back"
            :style="[{color:backColor}]"
            :src="back"
            @tap="BackPage"
          />
          <slot name="backText" />
        </view>
        <view
          v-if="isHome"
          class="action-home"
        >
          <image
            class="icon-home"
            :style="[{color:backColor}]"
            :src="home"
            @tap="BackHome"
          />
          <slot name="homeText" />
        </view>
        <view
          v-if="(!isBack && !isHome && titleCenter) || (isHome && !isBack)"
          class="action"
        />
        <view
          class="content"
          :style="contentStyle"
        >
          <slot name="content" />
        </view>
        <slot name="right" />
      </view>
    </view>
  </view>
</template>

<script>
import Vue from 'vue';
import image from "./svg/btn_back.svg"
import image2 from "./svg/btn_home.svg"
import {getInfo} from "./utils.js"
if(!Vue.prototype.Platform){
  getInfo()
}
export default {
  name: 'NavCustomBar',
  props: {
    // nav背景色
    bgColor: {
      type: String,
      default: ''
    },
    // 是否有返回按钮
    isBack: {
      type: [Boolean, String],
      default: false
    },
    // 是否有home按钮
    isHome: {
      type: [Boolean, String],
      default: false
    },
    // 是否有大张的背景图片
    bgImage: {
      type: String,
      default: ''
    },
    // nav内容颜色（文本字体，返回按钮颜色等）
    backColor: {
      type: String,
      default: ''
    },
    // 返回类型（特殊定义字段，在虚拟页面样式弹窗中使用）
    backType: {
      type: Boolean,
      default: true
    },
  // 页面标题字体大小
    titleSize: {
      type: String,
      default: ''
    },
    // 页面标题字体位置是否居中显示
    titleCenter: {
      type: Boolean,
      default: true
    },
    // 是否有背景图片
    isHasImage:{
      type:Boolean,
      default:true
    },
    // 传入路由url
    routerLink:{
      type:String,
      default:''
    }
  },
  data() {
    return {
      StatusBar: this.StatusBar,
      CustomBar: this.CustomBar,
      back: image,
      home: image2
    };
  },
  computed: {
    style() {
      var bgImage = this.bgImage;
      var style;
      if (this.bgImage && this.isHasImage ) {
        style = `background-image:url(${bgImage});`;
      }
      return style
    },
    contentStyle() {
      var style;
      if (this.isHome || this.isBack) {
          style = `color:${this.backColor};font-size:${this.titleSize}`;

      }else{
          if(this.titleCenter){
                style = `color:${this.backColor};font-size:${this.titleSize};width:100%`;
          }else{
               style = `color:${this.backColor};font-size:${this.titleSize};text-align:left;margin-left:36rpx;width:100%`;
          }
      }
      return style
    }
  },
  methods: {
    BackPage() {
      if (this.backType) {
          this.$parent.backType = false
      } else {
        let PageObject = getCurrentPages()
        if(PageObject.length>1){
           wx.navigateBack({
              delta: 1
          });

        }else{
          wx.redirectTo({
            url: this.routerLink
          });
        }
      }
    },
    BackHome() {
      let PageObject = getCurrentPages()
      if(PageObject.length>1){
        wx.navigateBack({
            delta: 1000
        });
      }

    }
  }
}
</script>
<style>
@import "./style/nav.css";
</style>
