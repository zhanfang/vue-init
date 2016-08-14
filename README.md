# vue-init
> 基于vue-cli，并结合vue、vue-router、vuex、vue-resource的一个vue启动项目

## Build Setup
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# 本地构建生产环境
npm run pro

```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 模拟后台
利用[json-server](https://github.com/typicode/json-server)实现后台服务器

``` bash
// 利用本地db.js作为数据库
npm install -g json-server

cd vue-init/db

json-server --watch db.json --routes routes.json

// 利用lodash + faker作为数据库
json-server --watch generate.js --routes routes.json
```

利用json-server可以实现增删改查各种操作，[视频教程](https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server)


