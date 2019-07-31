const mongoose = require("mongoose");
require("dotenv-safe").config();

mongoose.connect(
  `mongodb+srv://${process.env.MONGOOSE_LOGIN}:${
    process.env.MONGOOSE_PASSWORD
  }@cluster0-gqaod.mongodb.net/${process.env.MONGOOSE_DATABASE}?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

module.exports = mongoose;
