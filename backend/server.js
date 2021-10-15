const express = require('express');
const cors = require('cors');
//helping us to connect to mongoDB DB
const mongoose = require ('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
 


app.use(cors());
app.use(express.json());

// uri = where our data bases stored

mongoose.connect('mongodb+srv://Admin:1w2e3r4t@cluster0.fcvpx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true , useCreatIndex: true , useUnifiedTopology: true});
 
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("mongoDB database connection established successfuly");
});


const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('./exercises',exerciseRouter);
app.use('./users',usersRouter);


app.listen(port, ()=>{
    console.log(`server is running on port:${port}`);
});