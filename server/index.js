const express = require('express')
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const { mongo } = require('mongodb')
const router = require('./routes/routes')

console.log(router)

const mongoDB = process.env.MONGO_URI
console.log(process.env.MONGO_URI)

const app = express()

const PORT = 3333

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to database')
  })
  .catch((err) => console.log(err))

app.use(cors())
app.use(router)

app.listen(PORT, ()=> console.log('listening on ', PORT))