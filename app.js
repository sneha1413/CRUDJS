const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://snehadabbiru:Snehavit14@cluster0.ntc74oz.mongodb.net/sneha?retryWrites=true&w=majority'
const app = express()

mongoose.connect(url,{ useNewUrlParser: true,
  useUnifiedTopology: true,})
const con = mongoose.connection
con.on('error', console.error.bind(console, 'MongoDB connection error:'));
con.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json())
const aleinRouter = require('./routers/aliens')
app.use('/aliens',aleinRouter)

app.listen(9000,()=> {
console.log('Server started')
})

