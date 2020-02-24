// Mongo Exercise 1
/*
    We will be adding a collection to a database using node.js.
    The database will be called jewelry-store.
    For additional examples please refer back to the notes: https://github.com/HackerYou/con-ed-full-stack/blob/master/models-mongo-and-mongoose/mongodb.md
    BEFORE WE START, run: npm install to install dependencies!!
    To begin, let's create a local database called jewelry-store :
     1.  connect to your local running mongodb instance by typing: mongo localhost:27017
     2. to create a new database, or to use an existing one (it's the same command! It just depends on if a database of that name already exists), type: use jewelry-store
     3. that's it! We've created a database called jewelry-store, and now we can connect to it in this file.
     4. press the keys: ctrl/command + C to exit the mongo shell
     📝Assets📝
     Rings documents for inserting into the new collection:
     Local mongodb url:
        mongodb://localhost:27017
     Database name:
        jewelry-store
     Collection name:
        rings
     To run program for testing:
        node server.js
// Mongo Exercise 1
/*
    We will be adding a collection to a database using node.js.
    The database will be called jewelry-store.
    For additional examples please refer back to the notes: https://github.com/HackerYou/con-ed-full-stack/blob/master/models-mongo-and-mongoose/mongodb.md
    BEFORE WE START, run: npm install to install dependencies!!
    To begin, let's create a local database called jewelry-store :
     1.  connect to your local running mongodb instance by typing: mongo localhost:27017
     2. to create a new database, or to use an existing one (it's the same command! It just depends on if a database of that name already exists), type: use jewelry-store
     3. that's it! We've created a database called jewelry-store, and now we can connect to it in this file.
     4. press the keys: ctrl/command + C to exit the mongo shell
     📝Assets📝
     Rings documents for inserting into the new collection:
     Local mongodb url:
        mongodb://localhost:27017
     Database name:
        jewelry-store
     Collection name:
        rings
     To run program for testing:
        node server.js
*/
// Require mongodb and destructure the MongoClient out for usage.
const { MongoClient } = require('mongodb');
// Create a variable called url, holding the local mongodb url
const url = 'mongodb://localhost:27017';
// Create a variable called dbName holding the name of the database we want to use
const dbName = 'jewelry-store';
// Connect to this database using MongoClient's connect method. Pass in the url, and a call back function.
MongoClient.connect(url, (err, client) => {
  if (err) {
    throw err;
  }
  // Create a new collection named rings and save it in a variable
  const ringCollection = client.db(dbName).collection('rings');
  // Use the variable you just created, and call the insert() method on it, passing in:
  const newRing = { metal: 'obsidian', price: 100000000000 };
  ringCollection.insertOne(newRing, (err, result) => {
    if (err) {
      throw err
    }
    // as well as a call back function that calls the find() method on the same variable, chaining on an toArray() method that takes a call back, to console.log out all the items inserted into the collection. Check the notes here https://github.com/HackerYou/con-ed-full-stack/blob/master/models-mongo-and-mongoose/mongodb.md for an example
    ringCollection.find().toArray((err, results) => {
      console.log(results);
      // Close the client
      client.close();
    });
  })
})