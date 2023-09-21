const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const passportLocalMongoose = require('passport-local-mongoose');

// This class is for students(mentees), they will have to register by providing their details.
// The data will be sent to the database
const Lesson = new Schema({
    
    lesson1:{
        pageNo: String,
        countPdfClicks: Number,
        videoClicks: Number,
        WhiteBoardClicks: Number,
        resourcesClicks: Number,
        timeSpent: Number,
        pageVisited:Number
    },
    lesson2:{
        pageNo: String,
        countPdfClicks: Number,
        videoClicks: Number,
        WhiteBoardClicks: Number,
        resourcesClicks: Number,
        timeSpent: Number,
        pageVisited:Number
    },
    lesson3:{
        pageNo: String,
        countPdfClicks: Number,
        videoClicks: Number,
        WhiteBoardClicks: Number,
        resourcesClicks: Number,
        timeSpent: Number,
        pageVisited:Number
    },
    lesson4:{
        pageNo: String,
        countPdfClicks: Number,
        videoClicks: Number,
        WhiteBoardClicks: Number,
        resourcesClicks: Number,
        timeSpent: Number,
        pageVisited:Number
    },
    lesson5:{
        pageNo: String,
        countPdfClicks: Number,
        videoClicks: Number,
        WhiteBoardClicks: Number,
        resourcesClicks: Number,
        timeSpent: Number,
        pageVisited:Number
    },
    lesson6:{
        pageNo: String,
        countPdfClicks: Number,
        videoClicks: Number,
        WhiteBoardClicks: Number,
        resourcesClicks: Number,
        timeSpent: Number,
        pageVisited:Number
    },
    lesson7:{
        pageNo: String,
        countPdfClicks: Number,
        videoClicks: Number,
        WhiteBoardClicks: Number,
        resourcesClicks: Number,
        timeSpent: Number,
        pageVisited:Number
    },
    
    lesson8:{
        pageNo: String,
        countPdfClicks: Number,
        videoClicks: Number,
        WhiteBoardClicks: Number,
        resourcesClicks: Number,
        timeSpent: Number,
        pageVisited:Number
    },
    lesson9:{
        pageNo: String,
        countPdfClicks: Number,
        videoClicks: Number,
        WhiteBoardClicks: Number,
        resourcesClicks: Number,
        timeSpent: Number,
        pageVisited:Number
    },
    lesson10:{
        pageNo: String,
        countPdfClicks: Number,
        videoClicks: Number,
        WhiteBoardClicks: Number,
        resourcesClicks: Number,
        timeSpent: Number,
        pageVisited:Number
    }

});
// Metrics.plugin(passportLocalMongoose);
const LessonInfo = mongoose.model('Metrics', Lesson);
module.exports = LessonInfo;
