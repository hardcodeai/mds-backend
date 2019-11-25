const mongoose = require('mongoose');
mongoose.Promise = Promise

module.exports = () => {
    if (process.env.ENV === 'development') {
        mongoose.set('debug', true)
    }

    if (process.env.ENV === 'production') { }

    console.log(process.env.DB_URL)

    mongoose.connect(process.env.DB_URL, {}, (err) => {
        if (err) console.log('MongoDb connect Error :' + err);
    })

    mongoose.connection.on('connected', () => {
        console.log('Mongoose conn open at - ' + process.env.DB_URL.split('/').pop())
    })

    mongoose.connection.once('open', () => {
        console.log('Connected to mongodb!');
    });

    mongoose.connection.on('error', function (err) {
        console.error('Mongoose default error: ' + err);
    });

    mongoose.connection.on('disconnected', function () {
        console.log('Mongoose default connection disconnected');
    });

}
