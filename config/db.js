const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Mongodb connected');
  } catch (err) {
    console.error(err.message);
    // db 연결 실패시 앱 프로세스 종료
    process.exit(1);
  }
};

module.exports = connectDB;
