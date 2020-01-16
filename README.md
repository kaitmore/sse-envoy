# Server Sent Events + Envoy Demo

This repo demonstrates a client and server communicating using server sent events through an Envoy gateway proxy.

To start:

```bash
git clone https://github.com/kaitmore/simple-sse
cd simple-sse
docker-compose up -d
```

View the demo at <https://localhost:8080>

The Envoy admin endpoint is also exposed at <http://localhost:8001>