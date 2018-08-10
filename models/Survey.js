const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// or
//const { Schema } = mongoose;

const surverSchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [String]
});

mongoose.model("surveys", surverSchema);
