function<br>
1.0 函数分类:<br>

匿名函数:<br>
```
var fn = function(){
return 1 
}

var fn2 = fn 
fn.name  // fn
fn2.name  // fn
```

具名函数:<br>
```
function fn3(){
return 3
}

var fn5 = function fn4(){
}

console.log(fn3)


```
箭头函数:<br>
```
var fn6 = i => i+1

```
2.0 词法作用域<br>
游览器会把以下代码编译成一个树，俗称抽象语法树<br>
![test](https://github.com/shannonZHONG/jsInterview/function1.jpg)

          
在函数fn3 里面调用函数fn2同时传参local2，最后的结果也不会影响。<br>

```
var global1 = 1
function fn1(param1){
  var local1 = 'local1'
  var local2 = 'local2'
  console.log('在function  fn1的作用范围内' + local1)
  console.log('在function  fn1的作用范围内' + local2)
  
function fn2(param2){
  var local2 = 'inner local2'
  console.log('在function fn2的作用范围内没有local1，所以local1 的值就只能去 function fn1 里面找' + local1)
  console.log('在function fn2的作用范围内'+local2)
}
fn2()   
  
function fn3(){
   var local2 = 'fn3 local2'
   fn2(local2) 
   console.log(local2)
}
fn3()
}
```
call stack : <br>
stack： 是一种数据结构，先进后出<br>
```



```
