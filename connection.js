const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/mywebstore";
const db = mongoose.connection;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch((err) => console.log("[DB] Database error ", err));

db.once("open", (_) => {
  console.log("[DB] Database is conected to ", uri);
});

db.on("error", (err) => {
  console.log("[DB] Database error ", err);
});
