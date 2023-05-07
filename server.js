const http = require('http');
const https = require('https');

const server = http.createServer((req, res) => {
  const options = {
    hostname: 'api.spacexdata.com',
    port: 443,
    path: '/v4/capsules/query',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const reqBody = {
    query: {},
    options: {
      limit: 12
    }
  };

  const spacexReq = https.request(options, spacexRes => {
    let data = '';

    spacexRes.on('data', chunk => {
      data += chunk;
    });

    spacexRes.on('end', () => {
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    });
  });

  spacexReq.on('error', error => {
    console.error(error);
  });

  spacexReq.write(JSON.stringify(reqBody));
  spacexReq.end();
});

server.listen(4000);