/*forEach 接收函数 这个被接收的函数有两个参数 一个参数是value 另一个是 key */
var a = ['a', 'b', 'c', 'd']
        a.forEach(function(x, y) {
            console.log('value', x)
            console.log('key', y)
        })

/*函数接收了一个函数 */
function f(x, y) {
            return x + y
        }
f(1, 2)
function f2(fn) {
            console.log("我接受了一个函数")
            return undefined
        }
f2(function(){})


/*函数的名字不重要*/
function sdksldals(skdlskd){
           console.log("我接受到了一个函数")
           return undefined 
}    
sdksldals( function(){})
        
/*再次测试接收的是一个函数*/
  function x(y) {
            if (typeof y !== "function") {
                console.log("滚")
                return false
            } else {
                console.log("我接受到了一个函数")
            }
        }

/*再次测试接收的是一个函数 并且执行这个函数 */  
function 接收函数且执行这个函数(y) {
            if (typeof y !== "function") {
                console.log("滚")
                return false
            } else {
                console.log("我接受到了一个函数")
                y()
                console.log("并且我执行了这个函数")
                return true
            }
        }
接收函数且执行这个函数(function(){console.log("hello world")})

/*接收函数同时传参且执行这个函数*/
function 接收函数同时传参且执行这个函数(y) {
            if (typeof y !== "function") {
                console.log("滚")
                return false
            } else {
                console.log("我接受到了一个函数")
                y(666)
                console.log("并且我执行了这个函数")
                return true
            }
        }
接收函数同时传参且执行这个函数(function() {
            console.log(arguments)
        })


/*上面用arguments 接收参数 控制台打印出来的参数不明显*/
function 接收函数同时传参且执行这个函数(y) {
            if (typeof y !== "function") {
                console.log("滚")
                return false
            } else {
                console.log("我接受到了一个函数")
                y(666)
                console.log("并且我执行了这个函数")
                return true
            }
        }
接收函数同时传参且执行这个函数(function(skdlaksdslda) {
            console.log(skdlaksdslda)
        })


/*forEach 接受了两个参数 一个是数组 一个是函数 */
/*forEach 接收的那个函数  的作用loop 第一个参数的： 数组  */

function forEach(array, x) {
         for (let i = 0; i < array.length; i++) {
                x(array[i], i)
            }
        }

forEach(["a", "b", "c"], function(value, key) {
          console.log(value, key)
        })

var a = ["a", "b", "c"]
        a.forEach(function(value, key) {
            console.log(value, key)
        })
/*a.forEach 没有拿到数组  其实是传了两个参数 但是你看不见*/
//  a.forEach (function(){}) 等价于 a.forEach.call(a,function(){}) 用this 获取
// function invocation 一定要用call  

/*证明obj 的确是被 this 传入function之中的 */
var obj = {
            0: "a",
            1: "b",
            length: 2
        }
obj.forEach = function(x) {
            for (let i = 0; i < this.length; i++) {
                x(this[i], i)
            }
}
obj.forEach.call(obj,function(value,key){console.log(value,key)})

/*关于a.sort的迷思*/
var a = [5, 6, 3, 4, 1, 2]

a.sort.call(a,function(x, y) {
            return y - x
        })

a.sort.call(a,function(x, y) {
            return x - y
        })


/*join concat map filter reduce */
 var a = [1, 2, 3]
 var testJoin = a.join("test")
/*以下这几种方法得到的效果都一样*/
var testJoin1 = a.join(',')
var testJoin2 = a + ""
var testJoin3 = a.toString()
var testJoin4 = a.join()
 

/*concat 不仅仅连接数组 还可以复制一个新数组*/
var a =[1,2,3]
var b =[4,5,6]
var c = a.concat(b)
     
var d = [7,8,9]
var e = d.concat([])
console.log(d===e)
    
var f = d
console.log(f === d) 


/*map 和 forEach的差别： map 会返回值 但是forEach 就不会 */
 var a = [1,2,3]
    a.map(function(value,key){
    return value*2
})

// 返回值 
 var a = [1,2,3]
   a.map.call(a,function(value,key){
   return value + key 
})

// 返回一个对象 
 var a = [1,2,3]
   a.map.call(a,function(value,key){
   return {
        v: value,
        k: key
       
   }
})

/*filter 的用法*/
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test = a.filter.call(a, function(value, key) {
            return value >= 5
        })



/*filter 和 map 的融合*/
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var test = a.filter.call(a, function(value, key) {
            return value % 2 === 0
        })
// 运算不需要key 只需要value 
var test1 = test.map.call(test, function(value) {
            return value * value
        })
/*链式操作*/
var test2 = a.filter.call(a, function(value, key) {
            return value % 2 === 0
        }).map(function(value) {
            return value * value
        })



/*reduce */
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var test = a.reduce.call(a, function(sum, n) {
            return sum + n
        }, 0)


/*用reduce 表达/诉说 map 的故事*/

 var a = [1, 2, 3]
 var test1 = a.reduce.call(a, function(arr, n) {
            arr.push.call(arr, n * 2)
            return arr

        }, [])
 
 
 
 
 /*用reduce 表达/诉说  filter 的故事*/
 
 var a = [1, 2, 3]
 var test = a.reduce.call(a, function(arr, n) {
 if (n % 2 === 0) {
                arr.push.call(arr, n)

            }
 return arr
 }, [])


 
 /*build your own forEach*/
 
Array.prototype.forEach = function(fn) {
            for (let i = 0; i < this.length; i++) {
                if (i in this) {
                    fn.call(undefined, this[i], i, this)
                }
            }
        }
var a = [1,2,3]
var apple = a.forEach.call(a, function(item, index, array) {
            console.log(item, index, array)
        })


/*一道经典题 用forEach 来解决
每一次点击都会有新的作用域出现
*/
<html>

<head>
    hello
</head>

<body>

    <ul>
        <li>00001</li>
        <li>00002</li>
        <li>00003</li>
        <li>00004</li>
        <li>00005</li>
        <li>00006</li>
    </ul>
    <script>
        let items = document.querySelectorAll("li")
        let itemArray = Array.prototype.slice.call(items)

        itemArray.forEach((item, index)=>{
            item.onclick = function() {
                console.log(index)
            }

        })
                          

    </script>
</body>

</html>

/*build your own Map*/
Array.prototype.mapTest = function(fn) {
            let result = []
            for (let i = 0; i < this.length; i++) {
                if (i in this) {
                    result[i] = fn.call(undefined, this[i], i, this)
                }
            }
            return result
 }
var a = [1, 2, 3]
var apple = a.mapTest.call(a, function(item, index, array) {
          console.log(item, index, array)
})




/*build your own filter */
Array.prototype.filterTest = function(fn) {
            let result = []
            let temp
            for (let i = 0; i < this.length; i++) {
                if (i in this) {
                     // 返回的是真值  就可以把 结果push 到result 这里

                    if (temp = fn.call(undefined, this[i], i, this)) {
                        result.push( temp)

                    }
                }
                return result
            }
        }

var a = [1, 2, 3, 4, 5, 6]
a.filterTest((value) => {return value % 2 === 0 ?true : false}) ????????????????这个有问题 
a.filter((value) => {return value % 2 === 0 ?true : false})



/*how to build your onw reduce */
 Array.prototype.reduceTest = function(fn, init) {
            let result = init
            for (let i = 0; i < this.length; i++) {
                if (i in this) {
                    // 多了一个 result  至于怎么使用result 就要看fn 
                    result = fn.call(undefined, result, this[i], i, this)
                }
            }
            return result
        }


var apple = [1, 2, 3, 4, 5]
apple.reduce((result, item, index, array) => {
            return result + item
        }, 0)
// 0 是初始值 

var apple = [1, 2, 3, 4, 5]
apple.reduce.call(apple,(result, item, index, array) => {
            return result + item
        }, 0)

/*任何语言都是浅拷贝*/






