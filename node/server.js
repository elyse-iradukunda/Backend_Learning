import http, { createServer } from "http";

const server = http.createServer((req,res)=>{
       
    res.setHeader('Content-Type','text/html');
    res.write("<h1>Hello Elysee<h1/>")
    res.end()
});

server.listen(5000,"localhost",()=>{
    
    console.log("server is running on port" + 5000);
})