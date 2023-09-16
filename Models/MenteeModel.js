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
});
UserSchema.plugin(passportLocalMongoose);
const MenteeDetails = mongoose.model('MenteeDetails', UserSchema);
module.exports = MenteeDetails;