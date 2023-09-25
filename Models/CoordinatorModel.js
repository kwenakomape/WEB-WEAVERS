const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
// This class  is for staff members, which are mentor and coordinator
// The stuff staff member they dont have to register, the logic wil be implemented @ the
// back end to gent access codes to use the platform
const UserSchema = new Schema ({
    username: {
        type: String,
    },
    Surname: String,
    AccesCode: {
        type: String,
        default: "UCT07"
    },
    Name: String,
    Role: {
        type: String,
        default: "Coordinator"
    },
    Email: {
        type: String,
        default: "GHGGHY788@myuct.ac.za"
    }
    
    
});
UserSchema.plugin(passportLocalMongoose);
const CoordinatorDetails = mongoose.model('CoordinatorDetails', UserSchema);
module.exports = CoordinatorDetails;