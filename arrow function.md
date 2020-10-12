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

箭头函数的4种样式:<br>

```
let test = (p1,p2) =>{
console.log(1)
return 2 
}

```
当只有一个参数时，圆括号是不需要的<br>
```
let test = p1 =>{
console.log(1)
}
```
当函数体只有一句话，那么就不需要关键字 return 和 花括号<br>
```
let test = (p1,p2)=> p1+p2

```

当只有一个参数和函数体只有一句时.<br>
这样的箭头函数是最简洁.<br>
```
let test = p1 => p1*2
```

难道是因为老版的函数不够简洁，箭头函数才诞生的吗？<br>
有也可能，但是还有一个很重要的原因：this. javascript函数隐藏的this自带绑定 。<br>
从下面的经典例子可以看出：<br>

```
var apple = {
  name: 'alice',
  tasks: ['transform', 'eat cake', 'test'],
  showTasks: function() {
    this.tasks.forEach(function(task) {
      alert(this.name + " wants to " + task);
    });
  }
};

apple.showTasks();
```
结果是<br> 
//wants to transform<br>
//wants to eat cake<br>
//wants to blow test<br> 

和我们预期的结果相差甚远<br> 
// alice wants to transform<br>
// alice wants to eat cake<br>
// alice wants to blow kisses<br>

有了箭头函数之后，需要少许改动，就可以达到预期的结果<br>
原因是： 箭头函数自身没有this.<br>

```
var apple = {
  name: 'alice',
  tasks: ['transform', 'eat cake', 'test'],
  showTasks() {
    this.tasks.forEach((task) => {
      console.log(this.name + " wants to " + task);
    });  
  }
};

apple.showTasks();
// Usagi wants to transform
// Usagi wants to eat cake
// Usagi wants to blow kisses

```





