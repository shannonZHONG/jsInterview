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
![xxxxxx](https://github.com/shannonZHONG/jsInterview/blob/master/function1.jpg)
          
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
   console.log('在函数fn3 里面调用函数fn2同时传参local2，最后的结果也不会影响'+local2)
}
fn3()
}
```
3.0 call stack : <br>
stack： 是一种数据结构，先进后出<br>
```
function a(){
console.log('a1')
b()
console.log('a2')
return 'a'
}

function b(){
console.log('b1')
c()
console.log('b2')
return 'b'
}

function c(){
console.log('c')
return 'c'
}

a()
console.log('end')

```
4.0 this & argumnets
4.0.1 this在哪里？<br>
```
//this 是call的第一个参数，而且第一个参数必须是对象

function f(){
console.log(this)
console.log(arguments)
}

f.call()// window 
f.call({name:'test'}) 
f.call({name:'test'},1)
f.call({name:'test'},1,2)

 
```
4.0.2 this存在的意义<br>
```
// 没有this的话，每次都要传对象而且调用函数时也要传对象，非常的不方便.
var person = {
name:'test',
sayHi: function (person){
       console.log('hi,I am' + person.name)
},
sayBye: function(person){
       console.log('bye,I am ' + person.name)
},
say: function(person,word){
       onsole.log(word + ',I am' + person.name)
}

}
person.sayHi(person)
person.sayBye(person)
person.say(person,',I am' + person.name)

```

引入this之后,参数对象person 就不用每个函数都传且调用这个函数是也不用传参<br>
```
var person = {
name:'test',
sayHi: function (){
       console.log('hi,I am' + this.name)
},
sayBye: function(){
       console.log('bye,I am ' + this.name)
},
say: function(word){
       console.log(word + ',I am' + this.name)
}

}
person.sayHi()
person.sayBye()
person.say('test test')

//引入内置API call，检查下call 的第一个参数是对象
person.sayHi.call(person)
person.sayBye.call(person)
person.say.call(person,test)


```
特例：<br>
```
var person = {
name:'test',
sayHi: function (){
       console.log('hi,I am' + this.name)
},
sayBye: function(){
       console.log('bye,I am ' + this.name)
},
say: function(word){
       console.log(word + ',I am' + this.name)
}

}
window.name = '这就是一个函数' 
var fn = person.sayHi
fn()



```
