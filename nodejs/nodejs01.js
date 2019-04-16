const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  const q = url.parse(req.url, true).query;
  const txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);