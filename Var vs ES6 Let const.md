let const  和var 之间的千丝万缕的关系 <br>

我们先从var 开始说起吧！<br> 

 ```
 a = 1  这到底是一个全局变量还是一个局部变量？这一句代码就会带来不确定性。

 ```
 它可以是一个全局变量.<br>
 
```
a =1 
console.log(window.a)

```
它也可以是一个局部变量 .<br>
```
function f1(){
var a 
function f2(){
a = 1
console.log(a)
}
f2();
}
console.log(a)
```

var a = 1,还可以有变量提升。<br> 

```
function fn(){
if(true){

console.log('变量提升'+a)
}else {

var a =1;
console.log(2)


}

}
fn()
```
通过立即使用函数来隐藏一个变量<br>
```
(function x(){

var a =1;
window.frank = function(){
console.log(a);

}
})()
window.frank()

```

let var = 1 就不会有var 所带来的所有的不确定性，甚至不用使用IIFE也可以达到形同的效果.<br>

```

```
