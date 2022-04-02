const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const feedbackSchema = new mongoose.Schema(
  {
 feedback:{
     type:String,
     maxlength:500,
 },
 user:{
     type:ObjectId,
     ref:"User"
 }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Feedback", feedbackSchema);
