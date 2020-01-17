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

## Configuration

You can update the following environment variables in `docker-compose.yaml`

### Server

| variable   | description                                                                                                         |
|------------|---------------------------------------------------------------------------------------------------------------------|
| PORT       | Port where server listens for connections                                                                           |
| EVENT_TYPE | String to be used as the event type for SSE messages. Clients would add an event listener that matched this string. |
| CERT_PATH  | String path to where cert file lives                                                                                |
| KEY_PATH   | String path to where key file lives                                                                                 |


### Client

| variable  | description                               |
|-----------|-------------------------------------------|
| PORT      | Port where server listens for connections |
| CERT_PATH | String path to where cert file lives      |
| KEY_PATH  | String path to where key file lives       |