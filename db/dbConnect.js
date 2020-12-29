const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_PATH, {useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => console.log(`ChapAfric api connected to mongoDB ...`))
    .catch(err => console.log(`Error found: ${err}`));