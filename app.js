const http = require("http");

const server = http.createServer((req, res) => {
  //console.log("Amit");
  //console.log(req.headers, req.method, req.url);
  //process.exit()
  const url = req.url;
  if (url === "/Home") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h2>welcome to home</h2></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/about") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h2> Welcome to About Us page</h2></body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/node") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h2>Welcome to my Node Js project</h2></body>");
    res.write("</html>");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hi my name is Amit</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
