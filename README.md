##### create-react-app初始化醒目

```shell
npx create-react-app smileyqp
//smileyqp是任意项目名称
```

##### antd实现按需加载

一般不用按需加载的话需要引入演示模块等，以及即使手动引入模块按需加载十分麻烦，因此可以用官方的按需加载的配置`babel-plugin-import`来进行

```shell
//create-react-app初始化的文件中暴露出webpack的配置文件
npm run eject

//安装babel-plugin-import
cnpm install babel-plugin-import ]--save

//package.json中找到babel，添加
 "plugins": [
  ["import", {
    "libraryName": "antd",
    "libraryDirectory": "es",
    "style": "css" 
  }]
]
```

#### fetch请求

```shell
 //基本fetch请求
 fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
      .then(res => res.json())
      .then((data)=>{
        this.setState({banners:data.banner})
        console.log(data)
      })
```

```shell
//POST fetch请求c


fetch('http://iwenwiki.com/api/blueberrypai/login.php',{
  method:'POST',
  headers:{
    'Content-Type':'application/x-www-form-urlencoded',
    'Accept':'application/json,text/plain,*/*'
  },
  //body:'user_id=iwen@qq.com&password=iwen123&vertification_code=crfvw'
  body:qs.stringify({
    user_id:'iwen@qq.com',
    password:'iwen123',
    vertification_code:'crfvw'
  })
})
  .then(res=> res.json())
  .then((data)=>{
    console.log(data)
  })
```

> 注意：POST请求中的body是字符串格式的，是区别于`ajax`中的，因此应该引入`querystring`来进行转化`import qs from 'querystring'`，或者自己手写转化也可以

#### 解决跨域问题

- 开发模式
  - react vue等常用框架都提供了解决方案

- 生产模式
  - jsonp、iframe\cors、postMessage

###### 解决方案一：在`packae.json`中添加`proxy`配置

```shell
 "proxy":"http://tingapi.ting.baidu.com"
```

###### 解决方案二：http-proxy-middleware中间件

```shell
//安装
cnpm install http-proxy-middleware --save
//配置src/setupProxy.js改成
const proxy= require 'http-proxy-middleware'

module.exports = function(app){
	app.use(
		'/api',
		proxy({
			target:'http://localhost：3100'
			changeOrigin:true
		})
	)
}
```

#### fetch的get/post请求封装

```shell
//http.js中封装get和post请求
import qs from 'querystring'

export function httpGet(url){
    const result = fetch(url)
    return result
}

export function httpPost(url,params){
    const result = fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'Accept':'application/json,text/plain,*/*'
        },
        body:qs.stringify(params)
    })
    return result
}
```

```shell
//创建api目录将所有的请求的baseurl和url进行整理

//api/index.js文件
import base from './base'
import {httpGet,httpPost} from '../utils/http'
const api = {
    getChengpin(){
        return httpGet(base.ownUrl+base.chengpin)
    },
    getLogin(params){
        return httpPost(base.ownUrl+base.login,params)
    }
}
export default api;

//api/base.js文件
const base = {
    //http://iwenwiki.com/api/blueberrypai/getChengpinInfo.php
    ownUrl:"http://iwenwiki.com",
    chengpin:"/api/blueberrypai/getChengpinInfo.php",
    login:"/api/blueberrypai/login.php"

}
export default base;
```

```shell
//请求封装使用
//封装get和post请求
api.getChengpin()
  .then(res=> res.json())
  .then((data)=>{console.log(data)})

api.getLogin({
  user_id:'iwen@qq.com',
  password:'iwen123',
  vertification_code:'crfvw'
}).then(res=>res.json())
  .then((data)=>{console.log(data)})
```

#### react路由react-router-dom

