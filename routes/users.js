const express = require('express');
const router = express.Router();
const Mentee = require('../Models/MenteeModel');
const passport = require('passport');
const { render } = require('ejs');

// const passport = require('passport');
// const catchAsync = require('../utils/catchAsync');
//const User = require('../models/user');
const{isLoggedIn} = require('../Middleware');
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
router.get('/LessonPage',isLoggedIn,async (req, res) => {
  
     const { userInfo} = "kwena";
    // const findAll = await User.find({});
    // console.log("logging........")
    res.render('LessonPage',{userInfo});
})
router.get('/UserSection',isLoggedIn,async (req, res) => {
    
    res.render('Mentee');   
})

router.post('/LogIn',passport.authenticate('local', { failureRedirect: '/LogIn',keepSessionInfo: true, failureMessage: true },),async (req, res) => {
    // res.render('Mentee');
    const redirectUrl = req.session.returnTo || '/UserSection';
    
    delete req.session.returnTo;
    
    res.redirect(redirectUrl);

})

router.post('/Register', async (req, res) => {

    const {username,Surname,password,StudentID,Email} = req.body;
    const newUser = new Mentee({username,Surname,StudentID,Email});
    const registerUser = await Mentee.register(newUser,password);
    req.login(registerUser, function(err) {
        if (err) { return next(err); }
        return res.redirect('/UserSection');
      });
    // res.render('Mentee',{Name:Name,Surname:Surname,StudentID:StudentID});
   
    // res.redirect('/UserSectionStudent');
    // res.render(Mentee);

})



router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

module.exports =router;