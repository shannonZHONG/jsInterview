在说箭头函数之前， 我们先来看一下老版的函数长什么样把<br>

ES3 的函数是什么样的？<br>

```
function test(p1,p2){
console.log(1)
return 2
}
```

```
let test = function(p1,p2){
console.log(1)
return 2

}
```
//以上函数可以通过三句话 来分拆<br>
```

let test;
test1 = function (p1,p2){
console.log(1)
return 2
}
test = test1

```

































