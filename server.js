const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const app = express();

/* connect to database */
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

requireDir('./src/models');

//const Product = mongoose.model('Product');
app.use(express.json());

app.use('/api', require('./src/routes'));

app.listen(3001);