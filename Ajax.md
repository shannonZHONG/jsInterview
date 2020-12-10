三个部分：<br>
ajax 出现之前，使用什么方法局部更新<br>
介绍什么是ajax以及解决哪些问题<br>
自制ajax，更了解ajax<br>


什么是数据库：长久的存放数据<br>
数据一定要长期的存放在某个地方,不然页面一刷新，数据丢失.<br>
涉及到数据库，服务器作为桥梁，前端页面发起请求，服务器响应并且唤起数据库,像是全栈的样子.<br>
在ajax 没有出现之前，前端会使用form 标签,还有其他的标签发起请求,不过这样的标签使用设限.<br>
ie: <br>
以下请求都是基于同一个网站，同一个服务器<br>
用form 发请求<br>

```
<form action = "/pay" method = "post">
  <input type ="submit" value="付款"> 
</form>

```

用image发请求<br>
```
button.addEventListener('click',(e)=>{
       let image = document.createElement('img')
       img.src = '/pay'
       image.onload = function(){
       alert('好的')
       amount.innerText = amount.innerText -1
       }
       image.onerror = function(){
       alert('不好')
       }
})

```

用script发请求，也叫做 server render javascript 简称SRJ <br>
SRJ 也可以使得两个网站之间互相请求，简称跨域<br>
SRJ的缺点： 耦合。后端程序员一定要对页面非常的熟悉<br>
JSONP: 直接解耦. json+padding = jsonp

```
button.addEventListener('click',(e)=>{
       let image = document.createElement('script')
       img.src = '/pay'
       document.body.appendChild(script){
       script.onload = function(e){
       e.currentTarget.remove()
       }
       script.onerror = function(){
       alert('不好')
       }
       }
       
})

```

JSONP:<br>
请求方: frank.com 的前端程序员(游览器)<br>
响应方: jack.com的后端程序员（服务器）<br>
1. 请求方创建script,src指向响应方，同时传一个查询参数 ?callbackName=yyy
2. 响应方根据查询参数callbackName,构造形如:<br>
          1. yyy.call(undefined,'你要的数据')<br>
          2. yyy(‘你要的数据’)这样的响应<br>
3.游览器接收到响应，就会执行yyy.call(undefined,'你要的数据')<br>
4. 那么请求方就知道他要的数据<br>

约定:
1.callbackName -> callback <br>
2.yyy->随机数<br>

测试题一道:<br>
jsonp为什么不支持post请求<br>
因为jsonp 是动态创建script实现;<br>
动态创建script不支持get请求<br> 


Ajax: 异步的JavaScript和XML<br> 
1.使用XMLHttpRequest发请求<br>
2.服务器返回XML格式的字符串<br>
3.JS解析XML，并更新局部页面<br>
XMLHttpRequest是一个对象.<br>
```
window.XMLHttpRequest()
ƒ XMLHttpRequest() { [native code] }

```

因为是一个对象，所以可以随便new 一个出来<br>

```
var x = new XMLHttpRequest()
console.log(x)
XMLHttpRequest {onreadystatechange: null, readyState: 0, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
onabort: null
onerror: null
onload: null
onloadend: null
onloadstart: null
onprogress: null
onreadystatechange: null
ontimeout: null
readyState: 0
response: ""
responseText: ""
responseType: ""
responseURL: ""
responseXML: null
status: 0
statusText: ""
timeout: 0
```

Ajax:<br>
用原生javascript来发送ajax:<br>
完成这一步，肯定是需要服务器的<br>

```
myButton.addEventListener('click',(e)=>{
         let request = new XMLHttpRequest()
         request.open('GET','/xxx')//配置 request
         request.send()
         setInterval(()=>{
         console.log(request.readyState)
},1)

})
```


javascript 和 json 的差别<br>
js vs json <br>
undefined        没有<br>
null             null<br>
['a','b']        ["a","b"]<br>
function fn(){}  没有<br>
{name:'frank'}   {"name":"frank"}<br>
'frank'           "frank"<br>
a.self=a          搞不掂<br>
{__proto__}       没有原形链<br>



