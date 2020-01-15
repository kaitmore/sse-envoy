# Server Sent Events + Envoy Demo

This repo demonstrates a client and server communicating using server sent events through Envoy proxies.

To start:

```bash
git clone https://github.com/kaitmore/simple-sse
cd simple-sse
docker-compose up -d
```

View the demo at <https://localhost:8080>

Envoy admin endpoints are also exposed:

Client - <http://localhost:8001>
Server - <http://localhost:7001>