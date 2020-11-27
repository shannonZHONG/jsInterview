复习7种类型：<br>
Number String  Boolean null undefined  symbol  object <br>
object ： function <br>
what is a function? <br>
an object ;<br>
and?<br>
code in the object can  be executed by the object. <br>
over?<br>
yes<br>

## 1.0 函数的五种声明方式 <br>
1.0.1方法一：函数声明<br>

```
function y(input1,input2){
     return undefined;
}
// function x 相当于 申明一个 变量 <br>
```
这种声明有一个特点：函数声明提升;<br>
意思是：在执行代码之前会先读取函数声明<br>

关于console.log的小插曲<br>
console.log 只能接收的是字符串<br>
如果console.log接收的不是字符串，console.log就会自动调动toString method<br>
console.log打印什么 和 console.log 返回什么 没有一毛钱的关系<br>


1.0.2方法二：函数表达式<br> 
函数表达式有几种不同的语法形式.<br>
下面这种是最常见的一种:<br>
创建一个函数并将它赋值给变量，这种情况下叫做匿名函数,因为function关键词后面没有标志符<br>
```
var x = function y(input1,input2){}
console.log(y); // y is not a function

```

diff 方法一和方法二：<br>
方法一：function y 可以在glocal scope 里面任意invoke<br>
方法二：function y 不可以在glocal scope 里面任意invoke<br>
从上可以总结出：同样的语法放在不同的位置，意义都不一样，JavaScript的不一致性。<br>

1.0.2.1 函数声明与函数表达式的差别<br>
javaScript Engine (解析器) 看 函数声明式和函数表达式时，采取的行动是不一样的<br>
对于函数声明： 在解析器执行这个函数表达式之前，解析器已经先读取函数声明<br>
对于函数表达式：在解析器执行这个函数表达式之前，解析器没有先读取函数表达式<br>
除了什么时候通过变量访问函数这一个特点，函数声明和函数表达式是等价的<br>

函数声明 <br>
```
console.log(sum(10,10));

        function sum(num1, num2) {
            return num1 + num2;
        }


```
函数表达式 <br>
在js解析器执行到函数所在语句之前，变量sum中不会保存对函数的引用;<br> 
```
console.log(sum(10,10));

        var sum =  function (num1, num2) {
            return num1 + num2;
        }


```
函数声明的危害:<br>
函数声明最好不要出现在if else 这类的语句当中<br>
因为在ECMAScript中规定这是无效的<br>
大多是游览器会忽略condition，直接返回第二个声明<br>
如果用函数表达式就不会有这样的问题了<br>

```
var sayHi;
    if (condition) {
            sayHi = function() {
                alert("Hi!");

            }
        } else {
            sayHi = function() {
                alert("Yo!")
            }
        }

```
这样的话，不同的函数会根据condition被赋值给sayHi<br>

1.0.3方法三：匿名函数 <br>
看起来好像是常规的变量赋值语句，即创建一个函数并将它赋值给变量。这种情况下创建的函数叫做匿名函数<br>
因为function 后面没有标志符<br>
引用函数时，通过变量来引用即可<br>

```
var x;
x = function (input1,input2){}
第一：特点引入是一个匿名函数 
第二：把匿名函数赋值给一个变量 

```

1.0.4方法四：用function 来构造函数
```
// function 构造的函数可以接收任何数量的参数，但最后一个参数始终可以看成函数体，而前面的参数则是同为新函数的参数 
// 不推荐使用 这种方法 
//因为需要解析两次
//不过，函数是对象 函数名是指针 结合数据是怎么存的 stack and heap 
var sum = new Function("num1", "num2", "return num1 + num2");
console.log(sum(1,2));

```
关于函数名是指针的小插曲<br>
函数名仅仅是指向函数的指针，因此函数名与变量（包含其他对象指针的）没有什么不同<br>
一个函数可以有n多的函数名<br>
不同的函数名都是指向同一个函数<br>
```
  function sum(num1, num2) {
            return num1 + num2
        }

        alert(sum(10, 10));

        var anotherSum = sum; // anotherSum 和 sum 同时指向这个函数 
        console.log(anotherSum(10, 10));

        sum = null;
        console.log(anotherSum(10, 10));

```


## 2.0 property name 
2.0.1正常情况下<br>
```
function f(){}
f.name;//"f"

```
2.0.2匿名函数<br>

```
var f2 =  function (){}
f2.name;//f2 

```
2.0.3将一个有名字的函数赋值给一个变量 <br>
```
var f3 =  function f4(){}
f3.name;//f4

```
2.0.4 最神奇的一个<br>
```
用winodw.function 的方法赋值给一个
f5 = new Function ('x','y','return x + y');
f5.name;//"anonymous"

```

## 3.0 函数也是变量  <br>
在创建第二个函数时，实际上覆盖了引用第一个函数的变量testOverLoading<br>

```
 var testOverLoading = function(num) {
            return num + 100;
        }

 testOverLoading = function(num) {
            return num + 200;
        }
 var result = testOverLoading(100);
        console.log(result);

```


### 3.0.1 更多的例子<br>
具体应用：函数是一个变量，变量也可以是一个参数，那么函数也可以被当成参数一样传递<br>
        变量可以被当成函数的结果传回来，那么一个函数也可以被当成另外一个函数的结果传回来<br>
注意：变量 add10 和 getGreeting 以参数的形式传入函数  callSomeFunction 中，而不是把 add10 和 getGreeting 函数（变量）return 的结果 传入 函数 callSomeFunction <br>       
```
 function callSomeFunction(someFunction, someArgument) {
            return someFunction(someArgument);
        }

 function add10(num) {
            return num + 10;
        }
  var result1 = callSomeFunction(add10, 10)
        console.log(result1);

  function getGreeting(name) {
            return "hello, " + name;

        }
   var result2 = callSomeFunction(getGreeting, "test");
   console.log(result2);

```     


        
