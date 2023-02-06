const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = 'mongodb://localhost/vow/Contact'


const port=8080;

mongoose.connect(url,{useNewUrlParser:true})
const conn = mongoose.connection
conn.on('open',()=>{
    console.log("connection success")
})

app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`);
})

app.use(express.json())


const rout= require('./new1')
app.use('/new1',rout) 