## 小程序笔记整理
#### 小程序工具下载
[下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

#### 小程序文件分布及其作用
- api--->所有的数据请求的接口
- components--->所有组件存放的位置
- images---> 所有图片的存放位置
- pages---->所有的页面存放的位置
- utils--->全局公用的方法存放的位置
- config.js --->我们用来存放公共的数据或者方法，全局来用
- app.js ---->整个小程序的生命周期 [文档](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/app.html)
- app.json ---->小程序的公共配置 [文档](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)
- app.wxss--->小程序的公共样式表（例如通用的字体，或者reset样式）
#### 页面的生命周期回调函数
* onLoad(opitons)---->页面加载的时候触发一次
```
    //实现点击bookList跳转到bookDetail的列表
    //components组件
    <book bindtap="toDetail"></book>
    Componet({
        properties:{
            bookObj:Object
        },
        methods:{
        toDetail(){//子级自定义事件传递给父级
            this.triggerEvent('toDetail',this.properties.bookObj,{})
    }
        }
    })
   
    //使用的页面(组件的使用，要现在page.json中注册一下)
    Page({
        data:{
            book:null
        },
        toDetail(e){//e.detail接受子级传递过来的数据
           let id = e.detail.id 
           let type = e.detail.type
           wx.navigateTo(
            url:`http:www.baidu.com/index?id=${id}`
           )
        }
    })
    <view>
        <book bind:toDetail='toDetail' bookObj="book"></book>
    <view>
    
    //我们跳转到的页面
    Page({
        onload(options){
            console.log(options)//我们传递过来id，然后我们根据id获取对应的数据进行详情页面的渲染
        }
    })
    
    
```
* onShow() --->页面显示/切入前台时触发。
* onReady()--->页面初次渲染完成时触发。一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
* onHide()--->页面隐藏或者切入后台
* onUnload()-->页面卸载时触发。如redirectTo或navigateBack到其他页面时。

#### 页面的事件处理函数
* [链接](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html#%E9%A1%B5%E9%9D%A2%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0)
* onPullDownRefresh()
* onReachBottom()--->用这个来做下拉刷新
* onPageScroll(Object)
* onShareAppMessage(Object)---->这个来监听分享事件，并且自定义分享的名字
* onResize(object)
* onTabItemTap(Object)
```
//关于下拉刷刷新的思路
1，onReachBottom-->这个页面的事件，所以我们的组件没法使用，而我们想要组件使用，就需要巧妙的转换一下。
2，页面利用往组件传递随机参数（Math.floor(Math.random()*60)），然后利用properties里面observer的监听的方法，如果数据发生改变会重新去服务器请求，然后与原先请求的数据合并
3，子组件获取到了最新的数据，通过自定义事件传递给父亲。
4，然后通过this.setData({})同步去更新
4，当然其中有很多细节，例如锁概念之类的。具体情况，具体分析
```
####路由
* [文档](https://developers.weixin.qq.com/miniprogram/dev/api/wx.navigateTo.html)
> 注意：有的跳转是不支持跳转到tabbar的页面的。


#### 自定义组件
[文档](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/)
* slot 插槽的使用
* behaviors  代码复用
* triggerEvent 自定义事件
* observer 数据监听器