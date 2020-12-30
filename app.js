const express = require('express');
require('./db/dbConnect');
require('dotenv').config();

const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

// endpoints
app.use('/api', require('./routes/api'));

app.listen(port, () => console.log(`Listening on port: ${port} ......`));