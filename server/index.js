const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const { mongo } = require('mongodb')
const courseroutes = require('./routes/routes')

console.log(process.env.MONGO_URI)
const app = express()
app.use(cors())
app.use(courseroutes)
const PORT = 3333
const mongoDB = process.env.MONGO_URI
console.log(mongoDB, 'mongo string')

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database')
  })
  .catch((err) => console.log(err))


app.listen(PORT, ()=> console.log('listening on ', PORT))