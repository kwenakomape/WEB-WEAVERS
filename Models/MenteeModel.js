const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

// This class is for students(mentees), they will have to register by providing their details.
// The data will be sent to the database
const UserSchema = new Schema({
 
    Surname: String,
    StudentID: String,
    Email: String,
    Role: {
        type: String,
        default: "Student"
    },
    lesson1:{
        pageNo: String,
        countPdfClicks: String,
        videoClicks: String,
        WhiteBoardClicks: String,
        resourcesClicks: String,
        timeSpent: String
            },
    lesson2:{
        pageNo: String,
        countPdfClicks: String,
        videoClicks: String,
        WhiteBoardClicks: String,
        resourcesClicks: String,
        timeSpent: String
    },
    lesson3:{
        pageNo: String,
        countPdfClicks: String,
        videoClicks: String,
        WhiteBoardClicks: String,
        resourcesClicks: String,
        timeSpent: String
    },
    lesson4:{
        pageNo: String,
        countPdfClicks: String,
        videoClicks: String,
        WhiteBoardClicks: String,
        resourcesClicks: String,
        timeSpent: String
    },
    lesson5:{
        pageNo: String,
        countPdfClicks: String,
        videoClicks: String,
        WhiteBoardClicks: String,
        resourcesClicks: String,
        timeSpent: String
    },
    lesson6:{
        pageNo: String,
        countPdfClicks: String,
        videoClicks: String,
        WhiteBoardClicks: String,
        resourcesClicks: String,
        timeSpent: String
    },
    lesson7:{
        pageNo: String,
        countPdfClicks: String,
        videoClicks: String,
        WhiteBoardClicks: String,
        resourcesClicks: String,
        timeSpent: String
    },
    
    lesson8:{
        pageNo: String,
        countPdfClicks: String,
        videoClicks: String,
        WhiteBoardClicks: String,
        resourcesClicks: String,
        timeSpent: String
    },
    lesson9:{
        pageNo: String,
        countPdfClicks: String,
        videoClicks: String,
        WhiteBoardClicks: String,
        resourcesClicks: String,
        timeSpent: String
    },
    lesson10:{
        pageNo: String,
        countPdfClicks: String,
        videoClicks: String,
        WhiteBoardClicks: String,
        resourcesClicks: String,
        timeSpent: String
    }
});
UserSchema.plugin(passportLocalMongoose);
const MenteeDetails = mongoose.model('MenteeDetails', UserSchema);
module.exports = MenteeDetails;
