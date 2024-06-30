require('dotenv').config()
const mongoose = require('mongoose');
const app = require('./app.js');

const url = 'mongodb+srv://shivanisahuofficial0401:NygO3bilAPghehKB@cluster0.k2cbwdy.mongodb.net/kiet';

let dbLink = url.replace("$_USERNAME_$", process.env.DB_USER);
dbLink = dbLink.replace("$_PASSWORD_$", process.env.DB_PASSWORD);
dbLink = dbLink.replace("$_DB_NAME_$", process.env.DB_NAME);

mongoose.connect(url).then(() => {
  console.log('-------- Database Connected --------');
});

app.listen(1600,() => {
    console.log('----------- App Started -----------')
});