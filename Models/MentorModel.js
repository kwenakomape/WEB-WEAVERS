const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
// This class  is for staff members, which are mentor and coordinator
// The stuff staff member they dont have to register, the logic wil be implemented @ the
// back end to gent access codes to use the platform
const UserSchema = new Schema({
    username: {
        type: String,
    },
    AccesCode: {
        type: String,
        default: "UCT07"
    },
    Surname: String,
    Name: String,
    Role: {
        type: String,
        default: "Mentor"
    },

    Email: {
        type: String,
    }
    
    
});
UserSchema.plugin(passportLocalMongoose);
const MentorDetails = mongoose.model('MentorDetails', UserSchema);
module.exports = MentorDetails;