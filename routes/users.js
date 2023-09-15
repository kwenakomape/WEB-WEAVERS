const express = require('express');
const router = express.Router();
const Mentee = require('../Models/MenteeModel');
const session = require('express-session');
// const passport = require('passport');
// const catchAsync = require('../utils/catchAsync');
//const User = require('../models/user');



router.get('/', (req, res) => {
    // const username = 'kwena';
    req.session.username  = 'kwena';
    res.render('index');
})

router.get('/LogIn', (req, res) => {
    
    res.render('LogIn');
})
router.get('/SignUp', (req, res) => {
    
    res.render('SignUp');
})
router.get('/LessonPage',async (req, res) => {
     const { userInfo} = "kwena";
    // const findAll = await User.find({});
   
    res.render('LessonPage',{userInfo});
})


router.post('/UserSectionStudent', async (req, res) => {

    const {username,Surname,password,StudentID,Email} = req.body;
    const newUser = new Mentee({username,Surname,StudentID,Email});
    await Mentee.register(newUser,password);
    // res.render('Mentee',{Name:Name,Surname:Surname,StudentID:StudentID});
    res.render('Mentee');

})

module.exports =router;