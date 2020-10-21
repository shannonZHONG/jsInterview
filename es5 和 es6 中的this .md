直接做题。 
题目大致分为3个类型： 普通函数，箭头函数，new和this。<br>
// 需要重新编辑 需要重新绘制图来说明 这些this 的情况<br>
// 需要把没有搞懂的问题全部搞懂之后，才能进行第一步.<br>
// 文字叙述不要太多,尽量少.<br>


1.0<br>
```
var a = 10;
function foo () {
  console.log(this.a)
}
foo()
// foo.call(window); 

```
// 10<br>

1.1<br>
```
"use strict";
var b = 10;
function foo () {
  console.log('this1', this)
  console.log(window.b)
  console.log(this.b)
}
foo(); // foo.call(window);
console.log('this2', this)


```
//Window<br>
//10<br>
//10<br>
//Window<br>

1.2<br>
```
let a = 10
const b = 20

function foo () {
  console.log(this.a)
  console.log(this.b)
}
foo()//foo.call(window);
console.log(window.a)?????????????????????????????????
console.log(a)

```
// undefined <br>
// undefined <br>
// undefined <br>
//10 <br>

1.3<br>
```
var a = 1
function foo () {
  var a = 2
  console.log(this)
  console.log(this.a)
}

foo()//foo.call(window)

```

//Window <br>
//1<br>

1.4<br>
```
var a = 1
function foo () {
  var a = 2
  function inner () { 
    console.log(this.a)
  }
  inner()
}

foo()//foo.call(window)

```
//1 <br>

1.5<br>
```
function foo () {
  console.log(this.a)
}
var obj = { a: 1, foo }
var a = 2
obj.foo() //obj.foo.call(obj)

```
// 1 <br>

1.6<br>
```
function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;

obj.foo()//obj.foo.call(obj);
foo2()//foo2.call(window);
```
//1 <br>
//2 <br>

1.7<br>
```
function foo () {
  console.log(this.a)
};
var obj = { a: 1, foo };
var a = 2;
var foo2 = obj.foo;
var obj2 = { a: 3, foo2: obj.foo }

obj.foo.call(obj);
foo2.call(window);
obj2.foo2.call(obj2);

```
// 1 <br>
// 2<br>
//3 <br>

1.8 这道题要特别一些， 当传递的参数是一个函数时，默认this 的指向是 window.<br>
```
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
doFoo(obj.foo)

```
//2 <br>


1.9<br>

```
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)???????????????????
```
// 不是 3 而是 2 ？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？


1.10 <br>
```
"use strict"
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo) ？？？？？？？？？？？？？？？？？？？？？？？？？？？

```
1.11 <br> 
```
function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo.call.(window)
foo.call(obj)
foo.apply(obj)
foo.bind(obj)
```
//2 <br>
//1 <br>
//1 <br>
// ƒ foo () { <br> 
  console.log(this.a) <br>
} <br>

1.12 <br>
```
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }, 0)
  }
}
var a = 3

obj2.foo1.call(obj2)
obj2.foo2()??????????????????????????????
```
// 2
//window 
//3 


1.13<br>
```
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }.call(obj1), 0)
  }
}
var a = 3
obj2.foo1.call(obj2)
obj2.foo2() 

```
//2 <br>
//{a: 1}<br>
//1 <br>


1.14 <br>

```
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    function inner () {
      console.log(this)
      console.log(this.a)
    }
    inner()
  }
}
var a = 3
obj2.foo1.call(obj2)
obj2.foo2()?????????????????????????????????????????


```
// 2 
//Window 
// 3 

1.15 <br>

```
function foo () {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2

foo.call(window)
foo.call(obj)
foo().call(obj)


```
// 2 <br>
// 1 <br>
// error <br>

1.16 <br>
```
function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo()
foo.call(obj)
foo().call(obj)

```
// 2<br>
// 1 <br>
// 2<br>
// 1 <br>



1.17 <br>
```
function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo()
foo.bind(obj)???????????????????????????????????
foo().bind(obj)
```


1.18 <br>

```
function foo () {
  console.log(this.a)
  return function () {
    console.log(this.a)
  }
}
var obj = { a: 1 }
var a = 2

foo.call(obj)()  // foo.call(obj)=test test()
```
// 1 <br>
// 2<br>

1.19 <br>
```
var obj = {
  a: 'obj',
  foo: function () {
    console.log('foo:', this.a)
    return function () {
      console.log('inner:', this.a)
    }
  }
}
var a = 'window'
var obj2 = { a: 'obj2' }

obj.foo()()// obj.foo()= test test()
obj.foo.call(obj2)()
obj.foo().call(obj2)


```
// obj , Window
// obj2, Window
// obj, obj2


1.20 <br>
```
var obj = {
  a: 1,
  foo: function (b) {
    b = b || this.a
    return function (c) {
      console.log(this.a + b + c)
    }
  }
}
var a = 2
var obj2 = { a: 3 }

obj.foo(a).call(obj2, 1)???????????????????????????????????????????????????? 为什么是a=2.
obj.foo.call(obj2)(1)  obj.foo.call(obj2)= test test(1)

```

1.21<br>
```
function foo1 () {
  console.log(this.a)
}
var a = 1
var obj = {
  a: 2
}

var foo2 = function () {
  foo1.call(obj)
}

foo2()
foo2.call(window)
```

// 2 <br>
// 2 <br>

1.21
```
function foo1 (b) {
  console.log(`${this.a} + ${b}`)
  return this.a + b
}
var a = 1
var obj = {
  a: 2
}

var foo2 = function () {
  return foo1.call(obj, ...arguments)
}

var num = foo2(3)
console.log(num)
```
// 5 <br>


1.22 <br> 
这个要等一下.<br>

```
function foo (item) {
  console.log(item, this.a)
}
var obj = {
  a: 'obj'
}
var a = 'window'
var arr = [1, 2, 3]

// arr.forEach(foo, obj)
// arr.map(foo, obj)
arr.filter(function (i) {
  console.log(i, this.a)
  return i > 2
}, obj)

```


1.23 <br>
```
function Person (name) {
  this.name = name
}
var name = 'window'
var person1 = new Person('LinDaiDai')
console.log(person1.name)

```

// LinDaiDai<br>


1.24 <br>
```
function Person (name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  }
  this.foo2 = function () {
    return function () {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
person1.foo1()
person1.foo2()()?????????????????????????????????????????????????????

```
//person1 <br>
//??????????????????????????????


1.25<br>
```
var name = 'window'
function Person (name) {
  this.name = name
  this.foo = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var person2 = {
  name: 'person2',
  foo: function() {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
  
var person1 = new Person('person1')
person1.foo()()
person2.foo()()

```

// person1 <br>
// Window <br>
// person2<br>
// Window <br>

1.26<br>
```
var name = 'window'
function Person (name) {
  this.name = name
  this.foo = function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var person1 = new Person('person1')
var person2 = new Person('person2')

person1.foo.call(person2)()
person1.foo().call(person2)

```
//person2<br>
//Window<br>
//person1<br>
//person2<br>


1.27<br>
```
var obj = {
  name: 'obj',
  foo1: () => {
    console.log(this.name)
  },
  foo2: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var name = 'window'
obj.foo1()
obj.foo2()()

```

// Window<br>
// obj<br>
// obj<br>


