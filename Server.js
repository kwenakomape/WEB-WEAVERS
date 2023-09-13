const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const { v4: uuid } = require('uuid');


//We are going to use mangoose too connect to the database
const Mentee = require('./Models/MenteeModel');
const Mentor = require('./Models/MentorModel');
const Coordinator = require('./Models/CoordinatorModel');
mongoose.connect('mongodb://0.0.0.0:27017/WebWeaversData', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!");
        console.log(err);
    })

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views')); 




//We are seeting routes here
app.get('/', (req, res) => {
    
    res.render('index');
})

app.get('/LogIn', (req, res) => {
    
    res.render('LogIn');
})
app.get('/SignUp', (req, res) => {
    
    res.render('SignUp');
})
app.get('/LessonPage/:userInfo',async (req, res) => {
     const { userInfo} = req.params;
    // const findAll = await User.find({});
   
    res.render('LessonPage',{userInfo});
})

app.post('/UserSection', async (req, res) => {
    MentorID = 'ABKTKA002';
    MentorPassword = '5555';

    coordinatorID = 'ABKTKA003';
    coordinatorPassword = '4444';
    const {staffID,Password} = req.body;

    if((MentorID==staffID) && (MentorPassword===Password)){
        
        const newUser = new Mentor(req.body);
        await newUser.save();
        
        res.render('Mentor',{MentorID});
    }
    if((coordinatorID==staffID) && (coordinatorPassword===Password)){

        const newUser = new Coordinator(req.body);
        await newUser.save();
        res.render('Coordinator',{coordinatorID});
    }

    
    //res.render('Mentee');
})
app.post('/UserSectionStudent', async (req, res) => {

    const {Name,Surname,StudentID} = req.body;
    const newUser = new Mentee(req.body);
    await newUser.save();
    res.render('Mentee',{Name:Name,Surname:Surname,StudentID:StudentID});

})



app.listen(3000,() =>{
    console.log("Server running...");
})

