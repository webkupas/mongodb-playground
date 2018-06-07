//const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

var obj = new ObjectID()

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) return console.error('Unable to connect to MongoDB Server')
  console.log('Connected to MongoDB Server')
  const db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Hello there!',
  //   completed: false
  // }, (err, result) => {
  //   if (err) return console.log('Unable to insert todo item:', err)
  //   console.log(JSON.stringify(result.ops, undefined, 2))   
  // })

  // db.collection('Users').insertOne({
  //   name: 'Nicky',
  //   location: 'Ukraine',
  //   age: 3
  // }, (err, result) => {
  //   if (err) return console.error('Unable to add new user in DB:', err)
  //   console.log('New user successfully added!')
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // })

  // db.collection('Users').find({location: 'Ukraine'}).toArray().then(doc => {
  //   console.log(JSON.stringify(doc, undefined, 2))
  // })

  db.collection('Users').deleteMany({name: 'Pavel1'}).then(res => {
    console.log(res)    
  })

  //client.close()
})