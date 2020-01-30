const express = require("express");
const app = express();
const cookie = require("cookie");
const port = 9090 || process.env.PORT;

app.use((req, res, next) => {
  console.log(req.headers);
  try {
    const { name, pass } = cookie.parse(req.headers["cookie"]);
    if (name === "kait" && pass === "123456") {
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
