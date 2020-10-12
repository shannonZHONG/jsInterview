关于this 的原理，网上都有很多了。<br>
这片博文:就直接写关于this面试题<br> 

```
var a = 10;
function foo () {
  console.log(this.a)
}
foo.call(window); 

```
// 10<br>

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


```
var a = 1
function foo () {
  var a = 2
  console.log(this)
  console.log(this.a)
}

foo.call(window)

```

// Window <br>
//1<br>

