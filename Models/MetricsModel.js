const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

// This class is for students(mentees), they will have to register by providing their details.
// The data will be sent to the database
const Lesson = new Schema({
    
    Title: String,
    countPdfClicks: String,
    vdeoClicks: String,
    WhiteBoardClicks: String,
    resourcesClicks: String,
    WhiteBoardClicks: String,
    timeSpent: String,

});
// Metrics.plugin(passportLocalMongoose);
const LessonInfo = mongoose.model('Metrics', Lesson);
module.exports = LessonInfo;
