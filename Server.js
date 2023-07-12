const http=require('http') //import http 

http.createServer((req,res)=>{
res.end('<h1>Hello Node!!!!</h1>')
}).listen(3000)
// make server with port 3000 with key .listen