const http = require('http');
const fs = require('fs');
const path = require('path');
const page = fs.readFileSync(path.join(__dirname, 'index.html'));
const port = process.env.PORT || 8080;
http.createServer((req, res) => {
  if (req.url === '/robots.txt') { res.writeHead(200, {'Content-Type': 'text/plain'}); return res.end('User-agent: *\nAllow: /\n'); }
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(page);
}).listen(port, () => console.log('listening on ' + port));
