三个部分：<br>
ajax 出现之前，使用什么方法局部更新<br>
介绍什么是ajax以及解决哪些问题<br>
自制ajax，更了解ajax<br>


什么是数据库：长久的存放数据<br>
数据一定要长期的存放在某个地方,不然页面一刷新，数据丢失.<br>
涉及到数据库，用服务器作为桥梁，前端页面发起请求，服务器响应并且唤起数据库.<br>
在ajax 没有出现之前，前端会使用form 标签,还有其他的标签发起请求,不过这样的标签使用设限.<br>
ie: <br>

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

用script发请求<br>
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

