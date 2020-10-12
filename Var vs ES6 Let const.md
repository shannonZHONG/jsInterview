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
window.apple = function(){
console.log(a);

}
})()
window.apple()

```

let var = 1 不会有var所带来的不确定性，甚至不用使用IIFE也可以达到形同的效果.<br>

```
{
let a = 1
window.frank = function(){
console.log(a)
}
}
console.log(a) // error 

```

```
 if(true){
 let a = 1;
 console.log(1);
 }else{
 console.log(2)
 }
 console.log(a)//error
```
let 必须要先声明才能使用.<br>
```
{
let a=1
{
  console.log(a)
  let a =2 
  {
  let a =3
  }
}
}

```

const 和let 很相似，但是了const 只能被赋值一次.多次赋值会报错.
```
{
const a =1;
console.log(a);
a=2;
console.log(a);//error
}
```

常见踩坑题题汇总:<br>

```
var a = 1;
function fn(){
console.log(a)
}
a =2;
fn() // a 的值一定会是2吗？ 如果没有上一句 a =2？

```


```
var i;
for(i = 0; i <6; i++){
}
console.log(i)

```
输出值i是6.<br>
```
var i;
for(i =0; i<6;i++){
function fn(){
console.log(i)}
fn()
}
```
fn输出的i值 分别是 0 1 2 3 4 5<br> 
```
<html part>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <ul>
    <li>导航1</li>
    <li>导航2</li>
    <li>导航3</li>
    <li>导航4</li>
    <li>导航5</li>
    <li>导航6</li>
  </ul>
</body>
</html>

<script>
var liTags =document.querySelectorAll('li')

var i
for(i =0; i<liTags.length;i++){
   liTags[i].onclick = function(){
     console.log(i);
   }
}
console.log(i);

```
当用户点击相关元素后，输出i的值为6。不管用户点击多少次，都是6.<br>

```
<html>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <ul>
    <li>导航1</li>
    <li>导航2</li>
    <li>导航3</li>
    <li>导航4</li>
    <li>导航5</li>
    <li>导航6</li>
  </ul>
</body>
</html>

<script>
var liTags =document.querySelectorAll('li')

var i
for(i =0; i<liTags.length;i++){
  let j =i;
   liTags[j].onclick = function(){
     console.log(j);
   }
}

```

添加一个 变量let , 这样每次循环都有新的变量了.<br>
当用户点击相关元素后，输出i的值分别为0，1，2，3，4，5.<br>

```
<html>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <ul>
    <li>导航1</li>
    <li>导航2</li>
    <li>导航3</li>
    <li>导航4</li>
    <li>导航5</li>
    <li>导航6</li>
  </ul>
</body>
</html>

<script>
var liTags =document.querySelectorAll('li')

var i
for(i =0; i<liTags.length;i++){
 (function(){
   var j =arguments[0]
   liTags[j].onclick =function(){
     console.log(j)
   }
 })(i)
}

```
使用了立即执行函数，就相当于每次循环都有新的变量.<br>
当用户点击相关元素后，输出i的值分别为0，1，2，3，4，5.<br>
```
<html>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <ul>
    <li>导航1</li>
    <li>导航2</li>
    <li>导航3</li>
    <li>导航4</li>
    <li>导航5</li>
    <li>导航6</li>
  </ul>
</body>
</html>

<script>
var liTags =document.querySelectorAll('li')


for(let i =0; i<liTags.length;i++){
 liTags[i].onclick =function(){
   console.log(i)
   
 }
}

```
直接引入变量let, 使得每次循环都有新的变量产生.<br>
当用户点击相关元素后，输出i的值分别为0，1，2，3，4，5.<br>


