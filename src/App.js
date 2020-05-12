import React from 'react';
import { Button } from 'antd';
import qs from 'querystring'
import ProxyDemo from './ProxyDemo'
import api from './api'

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      banners:[]
    }
  }

  componentDidMount(){
    fetch('http://iwenwiki.com/api/blueberrypai/getIndexBanner.php')
      .then(res => res.json())
      .then((data)=>{
        this.setState({banners:data.banner})
        console.log(data)
      })

    /**
     * POST
     * 
     * ajax:对象类型参数
     * 
     * body：字符串类型参数
     */
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
    
  }
  render(){
    const {banners} = this.state;
    return (
      <div className="App">
        <ProxyDemo/>
        {
          banners.length>0&&
            <ul>
              { 
                banners.map((element,index)=>{
                return <li key = {index}>{element.title}</li>
                })
              }
            </ul>
        }
        <Button type="primary">Button</Button>
      </div>
    )
  }
}


