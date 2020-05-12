import React from 'react'

export default class ProxyDemo extends React.Component{
    /**
     * 跨域的解决方案： 
     *  开发模式：
     *      利用环境解决：react vue等常用框架都提供了解决方案
     *  生产模式:
     *      jsonp cors iframe postMessage
     * 
     *  npm run build 生产模式
     */

     
    //http://tingapi.ting.baidu.com/v1/restserver/ting/?method=baidu.ting.billboard.billList&type=1&size=1&offset=0
    componentDidMount(){
        fetch('/v1/restserver/ting/?method=baidu.ting.billboard.billList&type=1&size=1&offset=0')
            .then(res=>res.json())
            .then((data)=>{
                console.log(data)
            })
            .catch((err)=>{console.log(err)})
        


            // fetch('http://localhost:3100/api/list')
            //     .then(res => res.json())
            //     .then((data)=>{console.log(data)})
            //     .catch((err)=>{console.log(err)})
    }

    render(){
        return <div>hello</div>
    }
}
