const mongoose = require('mongoose');

// This class is for students(mentees), they will have to register by providing their details.
// The data will be sent to the database
const UserSchema = new mongoose.Schema({
    Name: String,
    Surname: String,
    StudentID: String,
    Email: String,
    Password: String,
    Confirmpassword: String,
    // Role: String
});

const MenteeDetails = mongoose.model('MenteeDetails', UserSchema);
module.exports = MenteeDetails;