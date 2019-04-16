const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('HTML01.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);

// append a file not existed
fs.appendFile('FileToAppend.txt', 'Hello world from fs.appendFile(). ', function (err) {
  if (err) throw err;
  console.log('FileToAppend.txt created.');
});

// open a file existed
fs.open('FileToAppend.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('FileToAppend.txt opened.');
});

// write a file not existed
fs.writeFile('FileToWrite.txt', 'First hello world from fs.writeFile(). ', function (err) {
  if (err) throw err;
  console.log('FileToWrite.txt created.');
});

// append a existed file
fs.appendFile('FileToAppend.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('FileToAppend.txt updated.');
});

// write a existed file
fs.writeFile('FileToWrite.txt', 'Second hello world from fs.writeFile(). ', function (err) {
  if (err) throw err;
  console.log('FileToWrite.txt saved.');
});

fs.appendFile('FileToDelete.txt', 'Not able to be seen. ', function (err) {
  if (err) throw err;
  console.log('FileToDelete.txt created.')
})

fs.unlink('FileToDelete.txt', function (err) {
  if (err) throw err;
  console.log('FileToDelete deleted.');
});
