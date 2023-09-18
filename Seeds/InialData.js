const mongoose = require('mongoose');
const MenteeDetails = require('../Models/MenteeModel');


mongoose.connect('mongodb://0.0.0.0:27017/WebWeaversData', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

let StaffDetails = [{Username:"John", password:"UCT07", Email:"JTYGH@myuct.ac.za", Role:"Mentor"},
 {Username:"Brian", password:"UCT07", Email:"BRNAGH@myuct.ac.za", Role:"Mentor"},
 {Username:"Cele", password:"UCT07", Email:"CELBHGH@myuct.ac.za", Role:"Mentor"},
 {Username:"Ashley", password:"UCT07", Email:"AYLSHE@myuct.ac.za", Role:"Mentor"},
 {Username:"Jackson", password:"UCT07", Email:"JNSONA@myuct.ac.za", Role:"Mentor"},
 {Username:"Paul", password:"UCT07", Email:"LAUP@myuct.ac.za", Role:"Mentor"},
 {Username:"Paul", password:"UCT07", Email:"LAUP@myuct.ac.za", Role:"Mentor"},
 {Username:"STEPHEN", password:"UCT07", Email:"STEPHEN@myuct.ac.za", Role:"oordinator"},
 {Username:"GARY", password:"UCT07", Email:"GARY@myuct.ac.za", Role:"Coordinator"}];

const seedDB = async () => {
    await Campground.deleteMany({});
    
seedDB().then(() => {
    mongoose.connection.close();
})