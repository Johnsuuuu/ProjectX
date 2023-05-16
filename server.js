const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use('/api/study1', require('./routes/api/study1'));
app.use('/api/study2', require('./routes/api/study2'));
app.use('/api/study3', require('./routes/api/study3'));

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`));