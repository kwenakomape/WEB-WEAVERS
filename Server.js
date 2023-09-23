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
const flash = require('connect-flash');

const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connection", function(socket){
	socket.on("newuser",function(username){
		socket.broadcast.emit("update", username + " joined the conversation");
	});
	socket.on("exituser",function(username){
		socket.broadcast.emit("update", username + " left the conversation");
	});
	socket.on("chat",function(message){
		socket.broadcast.emit("chat", message);
	});
});


// const cors = require('cors');
// app.use(cors())


const dbUrl = process.env.DB_URL || 'mongodb://0.0.0.0:27017/WebWeaversData';
const secret = process.env.SECRET || 'thisshouldbeabettersecret!';

const Mentee = require('./Models/MenteeModel');

const UserRoutes = require('./routes/users');
const LessonPagesRoutes = require('./routes/LessonPages');
mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!");
        console.log(err);
    })


app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, '/public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(cookiepaerser());
app.use(express.urlencoded({ extended: true }));


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


app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(Mentee.authenticate()));


passport.serializeUser(Mentee.serializeUser());
passport.deserializeUser(Mentee.deserializeUser());

app.use((req, res, next) => {
    // console.log(req.session);
    // console.log(req.path);
    // console.log("****************");
    // console.log(req.orignalUrl);
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    
    next();
})

app.use('/',UserRoutes)
app.use('/',LessonPagesRoutes)


server.listen(3000,() =>{
    console.log("Server running... for");
})

