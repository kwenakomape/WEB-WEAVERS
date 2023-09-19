const express = require('express');
const router = express.Router();
const Mentee = require('../Models/MenteeModel');
const Metrics = require('../Models/MetricsModel');
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
router.get('/UserSection',isLoggedIn,async (req, res) => {
    
    res.render('Mentee');   
})

router.post('/LogIn',passport.authenticate('local', { failureRedirect: '/LogIn',keepSessionInfo: true, failureMessage: true },),async (req, res) => {
    // res.render('Mentee')
    
    const redirectUrl = req.session.returnTo || '/UserSection';
    
    delete req.session.returnTo;
    
    res.redirect(redirectUrl);

})


router.post('/UpdateDateBase',async (req, res) => {
    
    console.log(req.user._id);
    console.log(req.body);
    lesson1 = req.body;
    console.log("------------------------------------------")
    changeUsername = {Email: "kwenakomape2@gmail.com"};
    UpatedData = await Mentee.updateMany({_id: req.user._id},{$set:{lesson1:req.body}});

    //const SendMetrics = await Mentee.findByIdAndUpdate(req.user._id, {Email: "kwenakomape2@gmail.com"});
    // console.log(SendMetrics);
    // const User = await Mentee.findById(req.user._id);

    // const {countPdfClicks,
    //     vdeoClicks,
    //     WhiteBoardClicks,
    //     StudentID,resourcesClicks,} = req.body;
    // console.log(req.body);

    

})

router.post('/Register', async (req, res) => {
    
    lesson1 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0};
    lesson2 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0};
    lesson3 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0};
    lesson4 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0};
    lesson5 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0};
    lesson6 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0};
    lesson7 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0};
    lesson8 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0};
    lesson9 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0};
    lesson10 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0};

    const {username,Surname,password,StudentID,Email} = req.body;
    const newUser = new Mentee({username,Surname,StudentID,Email,
                                lesson1,lesson2,lesson3,lesson4,lesson5,
                                lesson6,lesson7,lesson8,lesson9,lesson10});
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