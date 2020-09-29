import Vue from 'vue';

import navCustomBar from './components/xl-nav-bar';
Vue.component('nav-custom-bar', navCustomBar);

const App = new Vue({
  onShow(options) {
  },
  onLaunch() {
    console.log('----App Launch');
  },
  render(h) {
    // this.$slots.default 是将要会渲染的页面
    return h('block', this.$slots.default);
  },
});

export default App;
