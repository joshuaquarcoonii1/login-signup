const express = require('express');
let app=express();
const hbs = require('hbs');
const mongoose=require('mongoose');
const port = 7700;
const path=require('path');
const Router = require('./routes/myRouter');
const bodyParser= require('body-parser');
//middleware
app.use(express.static('public'));
app.use(express.json())
app.set('view engine','hbs');
app.use('/signup',Router);
app.use(bodyParser.urlencoded({ extended: false }));

const firebase = require('firebase/app');
require('firebase/auth');
// Add other Firebase modules if needed

const firebaseConfig = {
  apiKey: 'AIzaSyCSbjm8x4DaWwci574BJSWQubtQyilNCdg',
  authDomain: 'minime-6b39a.firebaseapp.com',
  projectId: 'minime-6b39a',
  storageBucket: "minime-6b39a.appspot.com",
  messagingSenderId: "519407696826",
  appId: "1:519407696826:web:e924a8368830bf3032bb83",
  measurementId: "G-5S0G8GYX7C"
  // Add other configuration parameters from your Firebase project
};

firebase.initializeApp(firebaseConfig);



//mongo
mongoose.connect('mongodb+srv://joshq:EPysQUMkROqqQrPk@cluster0.1sy3gyw.mongodb.net/',{ useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'ASSIGNMENT'})
.then(()=>{
    console.log("database connected");
});





app.listen(port,()=>{
    console.log('yes');
})


