const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/keys');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.mongoURI, (err) => {
    if (!err)
        console.log('mongo db connected successfully');
});
require('./routes/routes')(app);
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
    if (err)
        console.error(err);
    else
        console.info('server running');
});
