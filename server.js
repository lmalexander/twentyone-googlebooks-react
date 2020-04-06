const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://adminuser:%40!@BpMx@ds011248.mlab.com:11248/heroku_v6j97kv1",
  mongodb://<dbuser>:<dbpassword>
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
