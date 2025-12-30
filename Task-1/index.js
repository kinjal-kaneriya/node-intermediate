const http = require("http");
const PORT = 5000;

const server = http.createServer((req, res) => {
  if(req.url === "/") {
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("This is plain text");
  }
  else if(req.url === "/data") {
    res.writeHead(200,{"Content-Type": "application/json"});
    res.end(JSON.stringify({message: "Hii JSON"}));
  }
  else {
    res.writeHead(404, {"Content-Type": "text/plain"});
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
