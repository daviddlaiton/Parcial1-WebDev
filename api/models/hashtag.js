const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HashtagSchema = new Schema({
  tag: {type: String, required: true},
  winnerTag: {type: String, required : true}
});
module.exports = mongoose.model("Hasthtag", HashtagSchema);