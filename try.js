const http=require('http');
const fs =require('fs');

const server=http.createServer((req,res)=>{

    if(req.url==='/'){
      res.write('<html>');
      res.write('<head><title>Enter Message</title></head>');
      res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form> </body>')
      res.write('</html>');
      res.write('<html>');
      return res.end();
   
    }

    if(req.url==='/message' && req.method==='POST'){
        const body=[];
        req.on('data',(chunk)=>{
         body.push(chunk);
         console.log(chunk)
        });

        req.on('end',()=>{
          parsedBody=Buffer.concat(body).toString();
          message=parsedBody.split('=')[1]
          console.log(message);
          fs.writeFileSync('message',message);

        })
        
        res.status=302;
        res.setHeader('Location','/');
        return res.end();
      
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>NodePage</title></head>');
    res.write('<body><h1>hii i am from Node js</h1></body>')
    res.write('</html>');
    res.end();

    

});

server.listen(2000);

