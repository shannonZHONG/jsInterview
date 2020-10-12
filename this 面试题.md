直接做题。 
题目大致分为3个类型： 普通函数，箭头函数，new和this。

1.0<br>
```
var a = 10;
function foo () {
  console.log(this.a)
}
foo.call(window); 

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
foo.call(window);
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
foo.call(window);
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

foo.call(window)

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

foo.call(window)

```
//1 <br>

1.5<br>
```
function foo () {
  console.log(this.a)
}
var obj = { a: 1, foo }
var a = 2
obj.foo.call(obj)

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

obj.foo.call(obj);
foo2.call(window);
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

foo.call(obj)()??????????????????????????
```
// 1 <br>
// 2?????????????????????????????????????????????<br>

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






```
