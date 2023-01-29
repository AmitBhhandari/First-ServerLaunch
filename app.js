const http = require("http");

const server = http.createServer((req, res) => {
  //console.log("Amit");
  //console.log(req.headers, req.method, req.url);
  //process.exit()
  const url=req.url;
  if (url==="/"){
    res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write('<body><form action="/message" method="POST"><input name="message"type="text"><button type="submit">Send</button></input></form></body>')
  res.write("</html>");
  return res.end()
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write('<body><h1>Hi my name is Amit</h1></body>')
  res.write("</html>");
  res.end()
});

server.listen(3000);
