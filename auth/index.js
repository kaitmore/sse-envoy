const express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var Keycloak = require("keycloak-connect");
var cors = require("cors");

const port = 9090 || process.env.PORT;

var app = express();
app.use(bodyParser.json());

// Enable CORS support
app.use(cors());

// Create a session-store to be used by both the express-session
// middleware and the keycloak middleware.

var memoryStore = new session.MemoryStore();

app.use(
  session({
    secret: process.env.CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
    store: memoryStore
  })
);

// Provide the session store to the Keycloak so that sessions
// can be invalidated from the Keycloak console callback.
//
// Additional configuration is read from keycloak.json file
// installed from the Keycloak web console.

var keycloak = new Keycloak({
  store: memoryStore
});

app.use(keycloak.middleware());

app.get("/", keycloak.protect({ realm: "master" }), (req, res) => {
  console.log("here in callback", req.headers);
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
