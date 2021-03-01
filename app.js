const express = require('express');
const app = express();
const mongoose = require('mongoose');
const nodemon = require('nodemon');
require('dotenv/config')

// Import Routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//ROUTES
app.get('/', (req,res) => {
    res.send('we are on home')
})



//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser: true },    
    () => console.log('connected to DB')
)

//How do we startlistening to the server
app.listen(3000);