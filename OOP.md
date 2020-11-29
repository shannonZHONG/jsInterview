三大主题：<br>

封装/继承/多态<br>


封装：隐藏细节:自己对自己隐藏细节或者自己对别人隐藏细节<br>
继承：es6直接使用extend来达到复用的效果<br>
多态：一个标签拥有超过两种的属性<br>
ie:就像div 这个标签一样。div可以是节点:div.childNodes
也可以是元素：div.children<br>

javascript 是如何实现面向对象的:通过__proto__和prototype<br>
共用属性<br>
例子1:<br>
```
var obj ={'name':'a',age:18}

var obj2 = {'name':'b',age:20}

console.dir(obj)// obj的一个属性__proto__:Object
console.dir(obj2)//obj2的一个属性__proto__:Object 

obj.__proto__ == obj2.__proto__// true 证明的确是指向同一个对象，那么这个对象所有的属性都将由对象obj，obj2继承。

```
例子2:<br>
```
var obj ={test:'test',test0:'test0'}
var studentName0 = {name:'jack'}
var studentName1 = {name:'mark'}
studentName.__proto__ = obj
console.dir(studentName0)// 对象studentName0 不仅有自己的属性，还继承对象obj的属性. 
```
例子3:<br>
```
var array = [1,2,3]
array.push(4)
console.log(array)
array._proto_ ===Array.prototype
array. _proto_. _proto_ === Object.prototype

```
函数是一种可执行代码组成的对象<br>

```
var obj = {
name:'f',
length:2,
params:['x','y'],
functionBody:'console.log("hello world")',
}

objGong = {
call:function(x){
eval(x.functionBody)
}
}

obj.__proto__ = objGong
obj.call(obj)// hello world 

```

函数和对象之间的桥梁就是this<br>

```


```
