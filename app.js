const express = require('express');
require('./db/dbConnect');
require('dotenv').config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Listening on port: ${port} ......`));