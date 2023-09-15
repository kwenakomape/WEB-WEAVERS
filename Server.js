const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local');
const MongoDBStore = require("connect-mongo")(session);
const cookiepaerser = require('cookie-parser');

const dbUrl = process.env.DB_URL || 'mongodb://0.0.0.0:27017/WebWeaversData';
const secret = process.env.SECRET || 'thisshouldbeabettersecret!';
// const methodOverride = require('method-override');
// const { v4: uuid } = require('uuid');


//We are going to use mangoose too connect to the database
// const Mentor = require('./Models/MentorModel');
// const Coordinator = require('./Models/CoordinatorModel');
const Mentee = require('./Models/MenteeModel');

const UserRoutes = require('./routes/users');
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!");
        console.log(err);
    })


const store = new MongoDBStore({
    url: dbUrl,
    secret,
    touchAfter: 24 * 60 * 60
});

store.on("error", function (e) {
    console.log("SESSION STORE ERROR", e)
})

const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        // secure: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}
app.use(cookiepaerser());
app.use(express.urlencoded({ extended: true }));
app.use('/',UserRoutes)


app.use(session(sessionConfig));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Mentee.authenticate()));

passport.serializeUser(Mentee.serializeUser());
passport.deserializeUser(Mentee.deserializeUser());

//To parse form data in POST request body:

app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views')); 




//We are seeting routes here



app.listen(3000,() =>{
    console.log("Server running...");
})

