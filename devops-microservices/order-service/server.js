const http = require('http');
const port = 3000;
const serviceName = 'Order Service';
const data = {"service":"order-service","orders":[{"id":1001,"userId":1,"productId":101,"status":"CONFIRMED"}]};

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  if (req.url === '/health') {
    res.writeHead(200);
    return res.end(JSON.stringify({ status: 'UP', service: serviceName }));
  }
  if (req.url === '/' || req.url === '/index') {
    res.writeHead(200);
    return res.end(JSON.stringify(data));
  }
  res.writeHead(404);
  res.end(JSON.stringify({ error: 'Not found', service: serviceName }));
}).listen(port, '0.0.0.0', () => {
  console.log(`${serviceName} listening on ${port}`);
});
