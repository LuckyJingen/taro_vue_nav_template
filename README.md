# taro-vue-nav插件
#### version: 1.0.0  
#### author: toumingren

一个基于taro 3.0 + vue 小程序的 nav 插件，通过参数配置可以支持带背景图的nav，不带背景图的nav,可以灵活应用，也可以根据自己的特殊业务去扩展，适配各设备机型。 

## 兼容性

H5 + 各平台小程序

## 工程要求

taro 3.0 + vue

## 功能

1、自定义nav组件
2、路由页面退回
3、虚拟页面退回
4、回到首页
5、nav标题栏居中显示，靠左显示
6、支持带背景图nav，纯背景色nav
7、通过计算胶囊高度设置nav高度，适配各手机型号
8、完整工程配置 

全局引入，`app.js`中 import 引入并注册，即可全局使用

npm 安装引入：

```shell
jnpm install taro-vue-nav
```

```jsvascript

import navCustomBar from 'taro-vue-nav';
Vue.component('nav-custom-bar', navCustomBar);

```

## 插槽使用

nav支持一些可自定义化的插槽，如nav标题文字，比如加图标icon等，可使用插槽自定义添加结构，使用方法如下：

```html
  <nav-custom-bar >
      <block slot="content">
        插槽文字信息
      </block>
  </nav-custom-bar>
```

## 参数及事件

### Props

| 参数                    | 说明                                                                                        | 类型                | 可选值                                                           | 默认值                                            |
| :---------------------- | :------------------------------------------------------------------------------------------ | :------------------ | :--------------------------------------------------------------- | :------------------------------------------------ |
| bgColor           | 背景色                                                               | String | -                                                                | -                                                 |
| isBack                    | 是否显示返回按钮                        |      Boolean         | true | -                                           |
| isHome                    | 是否显示HOME按钮         | Boolean               | true                                                       | -                                                 |
| bgImage                   | 是否显示背景图片  | String              | -                                                                |  -                                                 |
| backColor                   | 返回颜色                                                                              | String              | -                                                                | |
| backType             | 返回类型                                                                                    | Boolean              | -                                                                | 是否虚拟路由页面                                           |
| isHasImage         | 是否有背景图片                                                                                | Boolean              | -                                                                |                                              |
| titleSize            | 标题字体大小                                                              | String              | -                                                                | 默认系统字体大小                                  |
| titleCenter           | 标题位置                                                                      | String              | -                                                                | center                                     |
| routerLink              | 返回页面路由URL                                                 | String              | -                                                                |                                           |

