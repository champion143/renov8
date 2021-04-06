const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var mongodbErrorHandler = require('mongoose-mongodb-errors')
require('dotenv').config()
const apiRouter = require('./api/routes/routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("upload"))
app.get('/',(req,res)=>{
    res.send("Api working Fine")
})

app.use('/api',apiRouter)

// Connection
mongoose.connect(process.env.MONGO_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{console.log('mongo connected successfully.....')})


app.listen(process.env.PORT,()=>{
    console.log('server started at ',process.env.PORT)
})
