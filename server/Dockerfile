FROM alpine:3.9

WORKDIR /go/src/github.com/kaitmore/simple-sse/server
ADD ./server/server /app/server

RUN apk update && apk add --no-cache git

WORKDIR /app

EXPOSE 8080

CMD ["./server"]
