const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port=3001;
const bosyparser=require('body-parser');

// mongoose.connect('mongodb+srv://anwar:anwarhussain@cluster0.hakle2s.mongodb.net/');

// mongoose.connection.on('connected',()=>{
//     console.log('connected');
// })

// mongoose.connect('error',err=>{
//     console.log('Connection failed');
// })

mongoose.connect('mongodb+srv://anwar:anwarhussain@cluster0.hakle2s.mongodb.net/', { useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connection successful');
        // Start your Express server or perform other tasks
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
        // Handle the error appropriately, you might want to exit the application or take other measures
    });

mongoose.connection.on('connected',connected=>{
    console.log('Connection success');
})

const studentRounte = require('./api/routes/student');
const facultiRoute = require('./api/routes/faculti')

app.use(bosyparser.urlencoded({extended:false}))
app.use(bosyparser.json());

app.use('/student',studentRounte);
app.use('/faculty',facultiRoute);



app.use((request,response,next)=>{
    response.status(404).json({error:"bad url request"})
})

module.exports = app;