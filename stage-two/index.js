const express = require('express');
const app = express();
const mongoose = require('mongoose')

const router = require('./routes/router')
app.use(express.json())

app.use('/api',router)

app.use('/',(request,response) => {
    return response.status(200).json({message: "I am Running"})
}) 



const port = process.env.PORT || 3000;

const start = () => {
    try {
        // mongoose.connect(process.env.MONGODB_URI);
        mongoose.connect('mongodb://127.0.0.1:27017/one');
        app.listen(port,console.log('Server is running at port '+port));
    } catch (error) {
        console.log(error);
    }
}

start();