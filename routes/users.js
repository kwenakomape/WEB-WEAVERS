const express = require('express');
const router = express.Router();
const Mentee = require('../Models/MenteeModel');
const passport = require('passport');
const { render } = require('ejs');

// const passport = require('passport');
// const catchAsync = require('../utils/catchAsync');
//const User = require('../models/user');
const{isLoggedIn} = require('../Middleware');
// const{totalTime} = require('../public/javascripts/CalcuLateTime.js');
router.get('/', (req, res) => {
    // const username = 'kwena';
    // req.session.username  = 'kwena';
    
    res.render('index');
})

router.get('/LogIn', (req, res) => {
    
    res.render('LogIn');
})
router.get('/SignUp', (req, res) => {
    // req.flash('success','Successfully registered');
    
    res.render('SignUp');
})
router.get('/LessonPage/content',isLoggedIn,async (req, res) => {
  
    if (req.session.countVisitedSited) {
        req.session.countVisitedSited += 1;
    } else {
        req.session.countVisitedSited = 1;
    }
    console.log(`You have viewed this page ${req.session.countVisitedSited} times`);
    
    return res.render('LessonPage');
})
router.get('/UserSection',async (req, res) => {
    
    res.render('Mentee');   
})

router.post('/LogIn',async (req, res) => {
    // res.render('Mentee')
    
    
    const redirectUrl = req.session.returnTo || '/UserSection';
    
    delete req.session.returnTo;
    
    res.render('Mentee');;

})


router.post('/UpdateDateBase',async (req, res) => {
    
    console.log(req.body);
    // console.log("response: ", JSON.stringify(req.data));
    // return "Eita";

})

router.post('/Register', async (req, res) => {
    
    
    const {username,Surname,password,StudentID,Email} = req.body;
    const newUser = new Mentee({username,Surname,StudentID,Email});
    const registerUser = await Mentee.register(newUser,password);
    req.login(registerUser, function(err) {
        if (err) { return next(err); }
        return res.redirect('/UserSection');
      });
})



router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

  router.get('/Analysis',isLoggedIn,async (req, res) => {
    
    res.render('Analysis');  
})


module.exports =router;