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
 















