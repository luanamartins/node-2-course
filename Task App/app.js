const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }
    const db = client.db(databaseName)

    // Start to interact with the database

    const tasks = [
        { description: 'Clean the house', completed: true },
        { description: 'Renew inspection', completed: false }
    ];
    db.collection('tasks').insertMany(tasks, (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks!');
        }
        console.log(result.ops);
    });
});