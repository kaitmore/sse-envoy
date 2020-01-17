FROM node:10.18.0-alpine3.9

WORKDIR /go/src/github.com/kaitmore/simple-sse/client
ADD ./client /app

WORKDIR /app

RUN npm install

EXPOSE 8080

CMD ["node", "client.js"]
