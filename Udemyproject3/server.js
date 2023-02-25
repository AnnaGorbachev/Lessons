// https://bigcodenerd.org/enable-cors-node-js-without-express/
const http = require('http');
const { parse } = require('url');

const server = http.createServer((req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Max-Age": 2592000, // 30 days
    /** add other headers as per requirement */
  };

  const chunks = [];
  req.on('data', chunk => chunks.push(chunk));
  req.on('end', () => {
    const body = Buffer.concat(chunks);

    if (req.method === "OPTIONS") {
      res.writeHead(204, headers);
      res.end();
      return;
    }

    res.writeHead(200, headers);
    res.end(JSON.stringify({
      url: parse(req.url),
      method: req.method,
      headers: req.headers,
      body: body.toString()
    }));
  });
});

server.listen(8080);
