const fs=require("fs")//import File System 
fs.writeFileSync("Welcome.txt",'Hello Node',"utf-8")//Create File Named Welcome.txt
console.log(fs.readFileSync("hello.txt","utf-8"))//Read File hello.txt