import { createServer } from 'node:http';

function greet(name: string): string {
  return `hello, ${name}!`;
}

const port = Number(process.env.PORT ?? 3000);

const server = createServer((req, resp) => {
  if (req.url === '/health') {
    resp.writeHead(200);
    resp.end('OK');
    return;
  }

  resp.writeHead(200, {
    'content-type': 'text/plain',
  });

  resp.end(greet('world'));
});

server.listen(port, '0.0.0.0', () => {
  console.log(`listening on port ${port}`);
});
