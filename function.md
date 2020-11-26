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
call 和 apply 的差别<br>
```
// 当不知道arguments的个数时，直接用apply 
function sum(){
  var n =0;
  for(var i =0; i<arguments.length;i++){
    n+= arguments[i]
  }
  return n
}

var a = [1,2,3,4,5,6,7,8]
sum.apply(undefined,a)


```
bind 是返回一个新函数,或者说换一种说法：可以直接指定this绑定在哪个对象上<br>

```
var studentName = {
    firstname: 'test0',
    lastname: 'test1 ',
    getStudentName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var SaveStudentName = function(score, year) {
    console.log('studentName is 'this.getStudentName() + 'the student's score is ' + score + ' in ' + year);
};

var testStudentName = SaveStudentName.bind(studentName)
testStudentName('45',2013)
```
下面这个例子，引入setTimeout并使用API-bind：更能确定bind 可以指定this所指的对象
产生的新函数调用function(){console.log(this)}并同时传递参数：对象{name:'test'}<br>
```
setTimeout(function(){
console.log(this)
}.bind({name:'test'}),1000)
// {name:'test'}

```
不使用API-bind：<br>

```
setTimeout(function(){console.log(this)},1000)
// window 

```
两个函数，一个使用API-bind，另外一个不使用API-bind<br>
```
setTimeout(function(){
console.log(this)
setTimeout(function(){
console.log(this)
},1000)
}.bind({name:'test'},1000))
```

两个函数同时使用bind，产生的效果如下<br>

```
setTimeout(function(){
console.log(this)
setTimeout(function(){
console.log(this)
}.bind(this),1000) 
}.bind({name:'test'},1000))

// 也可以使用箭头函数，达到同样的效果
setTimeout(function(){
console.log(this)
setTimeout(()=>console.log(this),1000)
}.bind({name:'test'}),1000)
// name:'test'
// name:'test'

```
5.0 函数柯里化<br>
```
function sum(x,y){
return x+y
}

function addOne(y){
return sum(1,y) // 这就是科里化，不是所有参数都在变化。
}
addOne(4)
```

6.0 自制一个柯里化函数<br>
```







```

7.0 高阶函数<br>
至少满足两个条件当中的一个:<br>
接受一个或多个函数作为输入<br>
输出一个函数<br>

```
var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return b-a;
});
console.log(numbers);

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a-b;
});
console.log(numbers);

// 除了sort，还有forEach，map,filter,reduce等都是高阶函数
// 为了更好的理解高阶函数和this 建议使用call
array.sort(function(a,b){a-b})  array.sort.call(array,fn)
array.forEach(function(a){})    array.forEach.call(array,fn)  
array.map(function(){})         array.map.call(array,fn)
array.filter(function(){})      array.filter.call(array,fn)
array.reduce(function(){})      array.reduce.call(array,fn)

```

8.0 回调函数<br>

```



```

9.0 箭头函数<br>

```






```

