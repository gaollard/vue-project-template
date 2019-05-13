# vue-project

vue 模板

## quickstart

(1) `git clone http://git.huishoubao.com.cn/colaOpen/cola_open_618 /your/path`

(2) `npm install`

(3) `npm run dev --projectname yourProjectName`

可以使用 demo 项目进行演示。如果您要新添加一个项目，可以将 demo 复制一份并修改文件名到projects目录下，并使用上述第(3)启动。

## 开发须知

1. 组件库使用 vant-ui
2. 修改公共引用请务必小心

## 目录结构

```
  |---build                     构建脚本
  |---config                    构建相关配置
  |---src     
      |---assets                公共资源
      |---rootCss               公共css
  |---baseComponents            公共基础组件
  |---bizComponents             公共业务组件
  |---utils                     公共工具函数
  |---projects                  项目代码放置处
      |---projectName           项目代码所在目录
        |---views               项目页面
        |---components          项目组件
        |---utils               项目函数
        |---router              项目路由配置
        |---cssVars             项目css变量配置
        |---styles              项目css文件
        |---index.html          项目html模板
        |---App.vue             项目根节点
        |---main.js             入口文件
        |---project.conf.js     项目构建配置
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
