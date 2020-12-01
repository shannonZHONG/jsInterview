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

没有this的情况下，传递参数如下：<br>
```
function sayName(name){
         console.log('I am' +' ' +name)
         return true 
}
sayName('test')// 直接调用函数而且传递参数为字符串：test
var obj = {name:'test'}
sayName(obj.name)//直接调用函数且传递参数为对象的一个属性 


var obj ={
    name:'test',
    sayName:function(name){
    console.log('I am ' + name)
    return true 
    }
}

obj.sayName(obj.name) 
注意：obj.sayName 和function没有任何关系. obj.sayName 只是存了函数这个地址而已.
```

函数和对象之间毫无联系<br>
```
// obj2.dofoo 和function dofoo 没有任何联系，同理obj.foo 和function foo 没有任何联系.
function foo () {
  console.log('结果为function foo被调用的结果')
  console.log(this.a)
}
function doFoo (fn) {
  console.log('结果为function dofoo被调用的结果')
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)

结果为function dofoo被调用的结果
{a: 3, doFoo: ƒ}
结果为function foo被调用的结果
2


//如果在严格模式下，就会报错
"use strict"
function foo () {
  console.log('结果为function foo被调用的结果')
  console.log(this.a)
}
function doFoo (fn) {
  console.log('结果为function dofoo被调用的结果')
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)
结果为function dofoo被调用的结果
{a: 3, doFoo: ƒ}
结果为function foo被调用的结果
// Uncaught TypeError: Cannot read property 'a' of undefined
at foo (<anonymous>:4:20)
at Object.doFoo (<anonymous>:9:3)
at <anonymous>:15:6

```

引入this<br>
```
// this 可以访问.sayName前面的东东
var obj ={
    name:'test',
    sayName:function(){
    console.log('I am ' + this.name)
    return true 
    }
}
obj.sayName()
obj. sayNmae.call(obj)
// 以上得到相同的结果
```
bind：创建一个新函数，然后新函数会去调用之前的那个函数
```
function f(){
  console.log(this);
  console.log(arguments)
}
f.bind({test:'test0'},2)
f2 = f.bind({test:'test0'},2)
f2()
{test: "test0"}
Arguments [2, callee: ƒ, Symbol(Symbol.iterator): ƒ]
```

new<br>
重复批量生产对象.<br>
不是每生成一个对象都需要一个一个的属性敲出来，可以把共有属性都放在一起且重复使用<br>
```
var students = []
var student
var studentCommon = {
    level:'A',
    theDateOfBirthYear:'2002',
    walking:function(){/*the way of walking*/},
    running:function(){/*the way of running*/},
    theDateofOpeningSchool:function(){/*the Date of Opening School*/},
    thePlaceOfSchool:function(){/*the place of school*/},
    thePlaceOfStudentResidence:function(){/*the place of school*/}
}

for(var i= 0;i<100; i++){
    student = {
       ID:i,
       TheAgeOfStudent:18,
    }
student._proto_ = studentCommon // 这个不能在实际应用环境中使用
students.push(student)
   
}

```

// 使用构造函数封装共有属性
```
studentCommon.prototype = {
    level:'A',
    theDateOfBirthYear:'2002',
    walking:function(){/*the way of walking*/},
    running:function(){/*the way of running*/},
    theDateofOpeningSchool:function(){/*the Date of Opening School*/},
    thePlaceOfSchool:function(){/*the place of school*/},
    thePlaceOfStudentResidence:function(){/*the place of school*/}
}

function studentCommon(){
         var obj ={
             ID:i,
             TheAgeOfStudent:18,         
         }
         obj._proto_ = studentCommon.prototype
         return obj
}


var students = []
for(var i= 0;i<100; i++){
   Array.prototype.push.call(students,studentCommon.call())
   //students.push(createSoldier())
}


```

// 使用prototype构造对象
```
function StudentCommon(){
         this.ID = i
         this.TheAgeOfStudent = 18       
}

StudentCommon.prototype.level = 'A',
StudentCommon.prototype.theDateOfBirthYear = '2002',
StudentCommon.prototype.walking = function(){/*the way of walking*/},
StudentCommon.prototype.running = function(){/*the way of running*/},
StudentCommon.prototype.theDateofOpeningSchool = function(){/*the Date of Opening School*/},
StudentCommon.prototype.thePlaceOfSchool  = function(){/* the place of school */},
StudentCommon.prototype.thePlaceOfStudentResidence = function(){/*  the place of school Residence */}

var students = []
for(var i=0;i<100;i++){
    students.push(new StudentCommon())
}

```

