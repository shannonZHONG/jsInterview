在学习http以前，以下这些知识点都要了解：<br>
命令行<br>
脚本:bash or node.js<br>

万维网有是由三个基本概念组成:<br>
URL: 网址<br>
HTTP: 两个电脑之间的传输内容的协议<br>
HTML:超级文本，主要用来做页面跳转<br>

URL: 给网页一个地址，让用户可以访问<br>
HTTP: 下载这个页面<br>
HTML:让你看懂这个页面<br>

URL也叫做统一资源定位符，由5个部分组成<br>
协议，域名，路径，查询参数，锚点<br>

DNS:输入域名，输出IP<br>
nslookup baidu.com 查询baidu.com 对应的IP是谁<br>
ping baidu.com 查询baidu.com对应的IP是谁<br>

HTTP: 游览器和服务器如何进行沟通 <br>
sever :服务端<br>
client:客户端<br>
客户端发送请求给服务器，服务器发回响应。<br>
更详细的说：<br>
游览器负责发起请求<br>
服务器在80端口接受请求<br>
服务器负责返回内容(响应)<br>
游览器负责下载响应内容<br>



用命令行curl 来发送get请求 curl -s -v -H "Frank: xxx" -- "https://www.baidu.com"<br>
请求部分:<br>
GET / HTTP/1.1  获取根目录，使用的协议是http 1.1<br>
Host: www.baidu.com<br>
User-Agent: curl/7.64.1 用的curl 这个工具发起响应<br>
Accept: */* 接受任何返回的内容<br>
Frank: xxx<br>

响应部分:<br>
HTTP/1.1 200 OK<br>
Accept-Ranges: bytes<br>
Cache-Control: private, no-cache, no-store, proxy-revalidate, no-transform<br>
Connection: keep-alive<br>
Content-Length: 2443<br> 
Content-Type: text/html<br>
Date: Fri, 04 Dec 2020 13:43:43 GMT<br>


用命令行curl 来发送post请求 curl -X post -s -v -H "Frank: xxx" -- "https://www.baidu.com"
请求部分:<br>
post / HTTP/1.1 获取根目录，使用的协议是http<br> 
Host: www.baidu.com<br>
User-Agent: curl/7.64.1<br>
Accept: */*
Frank: xxx

响应部分:<br>
HTTP/1.1 302 Found
Content-Length: 17931
Content-Type: text/html
Date: Sat, 05 Dec 2020 09:12:09 GMT
Etag: "54d9748e-460b"
Server: bfe/1.0.8.18



用命令行curl 来发送post请求 带字节 curl -X post -d "1234567890"-s -v -H "Frank: xxx" -- "https://www.baidu.com"

相比较于前面的两种命令都没有带字节请求的，这样的请求得到的响应多两行:content-length,content-type<br>
请求部分:<br>
post / HTTP/1.1<br>
Host: www.baidu.com<br>
User-Agent: curl/7.64.1<br>
Accept: */*<br>
Frank: xxx<br>
Content-Length: 12 上传内容的长度<br>
Content-Type: application/x-www-form-urlencoded<br>

回应部分:<br>
HTTP/1.1 302 Found<br>
Content-Length: 17931<br>
Content-Type: text/html<br>
Date: Sat, 05 Dec 2020 09:19:58 GMT<br>
Etag: "54d9748e-460b"<br>
Server: bfe/1.0.8.18<br>


get: 获取内容;<br>
post：上传内容;ie:用户登陆<br>


请求的格式:<br>
1 动词 路径 协议/版本<br>
2 key1: value1<br>
2 key2: value2<br>
2 key3: value3<br>
2 Content-type：application/x-www-form-urlenconded<br>
2 host:www.baidu.com<br>
2 User-Agent:curl/7.54/0<br>
3
4 要上传的数据<br>

请求最多只有4个部分，最少包含3个部分,也就是说第四部分为空<br>
第三个部分永远都是一个回车<br>
动词有GET,POST,PUT,PATCH,DELETE,HEAD,OPTIONS<br>
注意：PUT和PATCH 有差别. put：整体更新;patch：部分更新<br>
这里的路径包括查询参数,但不包括锚点<br>
如果你没有写路径，那么路径默认为/<br>
第2个部分中的content-type标注了第4个部分的格式<br>


响应部分:<br>
响应的格式:<br>
1 协议/版本号 状态码 状态解释<br>
2 key1: value1<br>
2 key2: value2<br>
2 Content-length：17931<br>
3
4要下载的内容<br>

状态码(服务器对游览器的一种回应方式)表示的含义如下:<br>
1XX:不常用<br>
2XX:表示成功<br>
3XX:表示滚吧<br>
4XX:表示客户端错了<br>
5XX:表示服务器错了<br>
状态解释没有用<br>
第二部分中的Content-type标注了第4部分的格式<br>
第二部分的Content-typez遵循规范<br>


TCP和UDP的区别是什么<br>
TCP:传输控制协议<br>
TCP和UDP的区别是什么<br>
TCP可靠，面向链接，相对UDP较慢；UDP不可靠，不面向链接，相对TCP较快。<br>
TCP的三次握手指的是:<br>
客户端: 我要连接你了，可以吗？<br>
服务端: 嗯，我准备好了，连接我吧<br>
客户端: 那我连接你洛<br>
开始后面的步骤<br>

IP 网络协议<br>
只要你在互联网中，那么你就会有一个IP，通俗理解上，IP分为内网IP和外网IP.<br>
路由器充当指路人的角色,电信会分配给路由器一个外网网址，路由器会分配另外一个网址（内网IP）给你的手机，你的电脑使用.也就是说路由器有两个IP地址：一个外网IP地址，一个内网IP地址<br>
一般来说内网IP的格式都是192.168.xxx.xxx。<br>

除了内网IP 和外网IP，还有两个特别特殊的IP，就是本地IP：127.0.0.1<br>
还有一个特别特殊的IP是：0.0.0.0.它不表示任何设备.<br>


端口:<br>
你想要访问一个设备，只指定IP是不够的，还必须指定端口port.<br>
一个服务器（硬件）不一定只提供一种服务，比如一个服务器既提供HTTP服务，又提供FTP服务，还提供SMTP服务（邮件服务），那么只用一个IP是无法告诉服务器你想要哪种服务<br>
所以有一个重要的原则：一个端口对应一个服务<br>























