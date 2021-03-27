const mongoose = require('mongoose');
// const db = require('../models/transaction');

const Transaction = require('../models/transaction')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/imageperformance',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const TransactionSeed = [
  {
    description: 'Day At The Library',
    image: '/assets/images/1.jpg',
    rating: 0,
    date: new Date(Date.now())
  }
];

Transaction.deleteMany({})
  .then(() => Transaction.collection.insertMany(TransactionSeed))
  .then(data => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
