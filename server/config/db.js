const mongoose = require('mongoose');

const connectDB = async () => {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
    const conn = await mongoose.connect(
        `mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
}

module.exports = connectDB;
