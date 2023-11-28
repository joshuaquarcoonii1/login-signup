const express=require('express');
const Router=express.Router();
let app=express();
app.use(express.static('public'));
app.set('view engine','hbs');
app.use(express.static('public'));
const {myModel}= require('../models/mymodel');
async function createUserWithEmailAndPassword(email, password) {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('User created:', user);
      // You can redirect the user or perform other actions after successful signup
    } catch (error) {
      console.error('Error creating user:', error.message);
      // Handle the error (display an error message, etc.)
    }
  }

Router.post('/signup', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      res.render('home'); // Redirect to dashboard or another page on successful signup
    } catch (error) {
      // Handle the error (display an error message, redirect to signup page, etc.)
      res.render('signup', { error: error.message }); // Pass the error message to the template
    }
  });






// Router.post('/',async(req,res)=>{
//     const User = new myModel({
//         name:req.body.name,
        
//         password:req.body.password
//     })
   
//     try {
//         // Save the user data to MongoDB
//         const savedUser = await User.save();
//         console.log('User saved:', savedUser);
    
//         // Send a response
//         res.send('Form data stored in MongoDB');
//       } catch (error) {
//         console.error('Error saving user:', error);
//         res.status(500).send('Error storing form data');
//       }
//     // User.save().then((CreatedUser =>{
//     //     res.status(201).json(CreatedUser)
//     //        })).catch((err)=>res.status(500).json({
//     //         error:err,
//     //         success:false 
        
//     //        }))
// });



Router.get('/',(req,res)=>{
    res.render('signup');
});


module.exports=Router;