var mongoose = require("mongoose");
var mongodbConnection = process.env.MONGODB_ATLAS || `mongodb://localhost/${process.env.MONGODB_DATABASE}`
mongoose.connect( mongodbConnection,  {
  useNewUrlParser: true
}).catch(error=> {
  console.log("error happened when trying to reach mongodb connection", error);
  
});

const db = mongoose.connection

module.exports = db

