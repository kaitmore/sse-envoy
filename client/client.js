const fs = require("fs");
const path = require("path");
const spdy = require("spdy");
const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8081;

const sslConfig = {
  cert: fs.readFileSync(process.env.CERT_PATH),
  key: fs.readFileSync(process.env.KEY_PATH)
};

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'
  )
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

spdy.createServer(sslConfig, app).listen(PORT, error => {
  if (error) {
    console.error(error);
    return process.exit(1);
  } else {
    console.log("Serving static assets on port: " + PORT);
  }
});
