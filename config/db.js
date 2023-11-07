const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'});

const connection = mongoose.createConnection(process.env.CONNECTION_URL).on('open', () => {
    console.log('Mongodb Connected');
}).on('error', () => {
    console.log('Error');
});

module.exports = connection;