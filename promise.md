
promise是异步回调中的一种方式<br>
最特别的一点是,使用关键字：then<br>
回调<br>
把一个函数A传给另一个函数B调用，那么A就是回调函数
```
function fn() {
}
fn() // 调用函数fn()

function fn2(fn()){
fn()// 回调函数 在另外一个函数里面传入的参数/调用的是函数， 那么这个被调用的函数叫做回调函数
}
fn2(fn())
```

```
function 获取用户信息(fn){
fn('姓名：方方')
}
function 打印用户信息(用户信息){
console.log('这是打印出来的用户信息')
console.log(用户信息)
}
获取用户信息(打印用户信息)

```
回调地狱：回调套回调套回调套回调套回调<br>
```
function 获取用户信息(fn){
fn('姓名：方方')
}

获取用户信息(function(用户信息){
console.log(用户信息)
保存用户信息(用户信息,function(){
获取另一个用户的信息(function(另一个用户的信息){
保存用户信息(另一个用户的信息)
      })
   })
})


// 从代码可读性来看：造成这样的回调地狱，过多的调用匿名函数，可读性直线下降

// 如果不调用匿名函数，像下面这样把一个函数一个函数的抽出来，可读性也不会很好
funcion 获取用户信息(fn){
fn("姓名：方方")
}

function fn(另一个用户的信息){
保存用户的信息(另一个用户的信息)
}

function 保存用户信息的回调(){
获取另一个用户的信息(fn)
}

funcion 打印用户的信息(用户信息){
console.log(用户信息)
保存用户信息(用户信息，保存用户的信息回调)
}

获取用户信息(打印用户信息)
```
为了解决以上的问题：回调地狱，我们可以使用promise.<br> 
直接使用一个简单的API:then.<br>
例子1:<br>
```
function 获取用户信息(){
  return new Promise(function(resolve,reject){
  console.log('第一次获取用户信息中.....')
  resolve('姓名test0')
  })
}

function 打印用户信息(用户信息){
return new Promise(function(resolve,reject){
console.log(用户信息)
resolve()
})
}


function 获取另一个用户信息(){
return new Promise(function(resolve,reject){
console.log('第二次获取用户信息中....')
resolve('姓名test1')
})
}

获取用户信息()
    .then(打印用户信息)
    .then(获取另一个用户信息)
    .then(打印用户信息)
    
```


例子2: resolve 和 reject 一一对应的部分<br>
```
function 获取用户信息(name){
return new Promise(function (resolve,reject){

if(name === 'test'){
console.log('我认识test')
resolve('testtest')
}else{
console.log('不认识')
reject()
}

})
}
获取用户信息('test').then(function(d){console.log(d)},function(){console.log('看起来不认识test')})

```

例子3: promise链：获取用户信息,打印信息,获取好友信息,打印信息<br>
这条promise链当中, 是基于全是正确的，没有一个失败<br>
```
function 获取用户信息(name){
return new Promise(function(resolve,reject){
if(name === 'test'){
console.log('我认识test')
resolve(['test','是个test'])
}else{
console.log('不认识')
reject()
}
})
}

function 获取好友信息(name){
return new Promise(function(resolve,reject){
if(name === 'test'){
resolve('今天是个好日子')
}else{
reject()
}

})
}

function 打印信息(data){
return new Promise(function(resolve,reject){
console.log(data)
resolve(data[0])
})
}

获取用户信息('test')
.then(打印信息)
.then(获取好友信息)
.then(打印信息)

```

例子4: promise链:在失败的情况下，仍然调用获取好友信息<br>
因为reject里面没有任何东西传递回去.<br>
resolve 是把成功的数据传给下一个回调函数，同时reject是把失败的理由传给下一个回调函数.<br>
```
function 获取用户信息(name){
return new Promise(function(resolve,reject){
if(name === 'test'){
console.log('我认识test')
resolve(['test','是个test']) // 是把成功的数据，返回给
}else{
console.log('不认识')
reject()// 
}
})
}

function 获取好友信息(name){
console.log('获取好友信息在执行')
return new Promise(function(resolve,reject){
if(name === 'test'){
resolve('今天是个好日子')
}else{
reject()
}

})
}

function 打印信息(data){
return new Promise(function(resolve,reject){
console.log(data)
resolve(data[0])
})
}

获取用户信息('test1')
.then(打印信息,function(理由){ console.log('失败的理由' + 理由)})
.then(获取好友信息)
.then(打印信息)

// 不认识
// 失败的理由undefined 
// 获取好友的信息在执行

```



例子5:在失败的情况下，仍然调用获取好友信息这个回调函数，理由同上，只是写法不一样<br>
```
function 获取用户信息(name){
return new Promise(function(resolve,reject){
if(name === 'test'){
console.log('我认识test')
resolve(['test','是个test']) // 是把成功的数据，返回给
}else{
console.log('不认识')
reject()// 
}
})
}

function 获取好友信息(name){
console.log('获取好友信息在执行')
return new Promise(function(resolve,reject){
if(name === 'test'){
resolve('今天是个好日子')
}else{
reject()
}

})
}

function 打印信息(data){
return new Promise(function(resolve,reject){
console.log(data)
resolve(data[0])
})
}

function 打印失败信息(理由){
       console.log('失败的理由' + 理由)
}

获取用户信息('test1')
.then(打印信息,打印失败信息)
.then(获取好友信息)
.then(打印信息)


// 不认识
// 失败的理由undefined 
// 获取好友的信息在执行
```

例子6:在失败的情况下，怎样才能不调用下一个回调函数<br> 
```
function 获取用户信息(name){
return new Promise(function(resolve,reject){
if(name === 'test'){
console.log('我认识test')
resolve(['test','是个test']) // 是把成功的数据，返回给
}else{
console.log('不认识')
reject("不认识")// 
}
})
}

function 获取好友信息(name){
console.log('获取好友信息在执行')
return new Promise(function(resolve,reject){
if(name === 'test'){
resolve('今天是个好日子')
}else{
reject()
}

})
}

function 打印信息(data){
return new Promise(function(resolve,reject){
console.log(data)
resolve(data[0])
})
}

// 简化写法
function 打印失败信息(理由){
   console.log('失败的理由是'+理由)
   return Promise.reject('没搞掂')
}
// 完整写法

function 打印失败信息(理由){
  return new Promise(function(resolve,reject){
  console.log('失败的理由是'+理由)  
  reject()
  })
   
   
}



获取用户信息('test1')
.then(打印信息,打印失败信息)
.then(获取好友信息)
.then(打印信息)

```

例子7:在第一层执行rejec的情况下，仍然可以执行第二层和第三层<br>

```
function 获取用户信息(name){
return new Promise(function(resolve,reject){
if(name === 'test'){
console.log('我认识test')
resolve(['test','是个test']) // 是把成功的数据，返回给
}else{
console.log('不认识')
reject("不认识")// 
}
})
}

function 获取好友信息(name){
console.log('获取好友信息在执行')
return new Promise(function(resolve,reject){
if(name === 'test'){
resolve('今天是个好日子')
}else{
reject()
}

})
}

function 打印信息(data){
return new Promise(function(resolve,reject){
console.log(data)
resolve(data[0])
})
}



function 打印失败信息(理由){
   console.log('失败的理由是'+理由)
   return Promise.resolve('test')
}
   




获取用户信息('test1')
.then(打印信息,打印失败信息)
.then(获取好友信息)
.then(打印信息)



```

例子8:自己写简易版promise<br>
```
function Promise(fn){
var status = 'pending'
function successNotify(){
status = 'resolved'
}

function failNotify(){
status = 'rejectded'
}

var successArray = []
var failArray = []
fn.call(undefined,successNotify,failNotify)

  return {
     then: function(successFn,failFn){
     successArray.push(successFn)
     failArray.push(failFn)    
     return undefined
     }
  }
}




```


例子9:语法糖<br>
await, catch,error<br>
```
function 获取用户信息(name){
return new Promise(function(resolve,reject){
if(name === 'test'){
console.log('我认识test')
resolve(['test','是个test']) // 是把成功的数据，返回给
}else{
console.log('不认识')
reject("不认识")// 
}
})
}

function 获取好友信息(name){
console.log('获取好友信息在执行')
return new Promise(function(resolve,reject){
if(name === 'test'){
resolve('今天是个好日子')
}else{
reject()
}

})
}

function 打印信息(data){
return new Promise(function(resolve,reject){
console.log(data)
resolve(data[0])
})
}



function 打印失败信息(理由){
   console.log('失败的理由是'+理由)
   return Promise.resolve('test')
}
   
let 用户信息 = await 获取用户信息('test1')
console.log(用户信息)



   
```
