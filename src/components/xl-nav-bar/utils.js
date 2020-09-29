/**
   * @debounce 通过设备信息计算设备nav高度
   * @param fn 执行函数
   * @param time 时间间隔
*/
import Vue from 'vue';
export function getInfo(fn, time) {
     // 判断手机设备信息，设置头部样式需要
  wx.getSystemInfo({
    success: (e)=> {
      let capsule = wx.getMenuButtonBoundingClientRect();
      let model = e.model;
      Vue.prototype.Platform = e.platform
      if (!capsule['top'] || !capsule['bottom']) {
      this.setTimeout(() => {
        capsule = wx.getMenuButtonBoundingClientRect();
        console.log(capsule, '3', '延迟200毫秒之后')
        Vue.prototype.StatusBar = e.statusBarHeight;
        Vue.prototype.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        Vue.prototype.windowHeight = wx.getSystemInfoSync().windowHeight
        }, 2 * 100);
      }
      Vue.prototype.StatusBar = e.statusBarHeight-5;
      Vue.prototype.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight-5;
      Vue.prototype.windowHeight = wx.getSystemInfoSync().windowHeight
    }
  });
}
