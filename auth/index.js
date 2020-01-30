const express = require("express");
const auth = require("basic-auth");
const app = express();
const port = 9090 || process.env.PORT;

app.use((req, res, next) => {
  console.log(req.headers);
  console.log(auth(req));
  try {
    const { name, pass } = auth(req);
    if (name === "ricklee" && pass === "123456") {
      res.status(200);
      res.end();
    } else {
      res.status(401);
      res.end("Unauthorized");
    }
  } catch (err) {
    console.log(err);
    res.status(401);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
