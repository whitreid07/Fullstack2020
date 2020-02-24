const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    throw err;
  }
  console.log('connected to mongodb');
  const db = client.db('juno');

  const coursesCollection = db.collection('courses');
  coursesCollection.insertOne({
    name: 'Accelerated Web Dev',
    duration: '2 weeks',
    content: ['html', 'css'],
  }, (err, result) => {
    if (err) {
      throw err;
    }
    client.close();
  })
});