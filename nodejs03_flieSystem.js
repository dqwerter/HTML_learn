const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('HTML01.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

fs.appendFile('FileToAppend.txt', 'Hello world from fs.appendFile(). ', function (err) {
  if (err) throw err;
  console.log('File saved.');
});

fs.open('FileToAppend.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

fs.writeFile('FileToWrite.txt', 'Hello world from fs.writeFile(). ', function (err) {
  if (err) throw err;
  console.log('Saved!');
});