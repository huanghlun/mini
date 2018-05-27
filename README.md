## README

### 环境依赖

项目根据react、react-route-dom来搭建，通过webpack打包生成

react环境基于node环境及其包管理工具npm，配置好node之后，克隆该工程或`package.json`文件，执行`npm install`命令即可安装全部依赖

### 项目结构

* `src`目录

 `src`目录用于放置源代码及工程所需静态资源，`src`的当前目录下放置了`index.js`入口文件及`index.tmpl.html`模板文件，其子目录分为`component`、`api`、`assest`目录

 * `component`目录
  
  该目录用于存放react编写的各个组件js代码及其css代码

 * `assets`目录
  
  该目录用于存放图标图片及全局css样式，其子目录分为了`image`及`layout`目录

 * `api`目录

  该目录用于存放全局方法及全局变量

* `build`目录

 `build`目录用于放置被编译打包生成后的文件，主要有`index.html`、`bundle.js`，或者当存在较大的图片会生成`images/`目录

* 根目录

 根目录放置的是配置文件，node环境配置文件`package.json`、webpack环境配置文件`webpack.config.js`和一些插件配置文件