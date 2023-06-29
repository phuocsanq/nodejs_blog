// MONGOOSE  https://github.com/Automattic/mongoose
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_blog');
        console.log('Connect to DB successfully!!!');
    } catch (error) {
        console.log('Connect to DB fail!');
    }
}

module.exports = { connect };
