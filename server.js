const express = require("express");
const mongoose = require("mongoose");
const next = require("next");
require("dotenv").config();

const namesRoute = require("./backend/routes/names");

const dev = process.env.NODE_ENV !== "production";

const app = express();
const server = next({ dev });
const handle = server.getRequestHandler();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/names", namesRoute);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", ["http://localhost:3000", "https://tha-test-app.herokuapp.com/"]);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, accept, accept-encoding, user-agent, x-requested-with"
  );

  if (req.method === "OPTIONS") {
    return res.status(200);
  }

  next();
});

async function connectToDb() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to database");
}

connectToDb().catch((err) => {
  console.log(err);
});

server
  .prepare()
  .then(() => {
    app.get("*", (req, res) => {
      return handle(req, res);
    });

    const port = process.env.PORT || 8000;

    app.listen(port, (err) => {
      if (err) throw err;
      console.log(`connected to server through port ${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.end(1);
  });
