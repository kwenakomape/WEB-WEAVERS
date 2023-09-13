const mongoose = require('mongoose');

// This class  is for staff members, which are mentor and coordinator
// The stuff staff member they dont have to register, the logic wil be implemented @ the
// back end to gent access codes to use the platform
const UserSchema = new mongoose.Schema({
    staffID: {
        type: String,
    },
    Password: {
        type: String,
    },
    Role: {
        type: String,
        default: "Coordinator"
    },
    Email: {
        type: String,
        default: "GHGGHY788@myuct.ac.za"
    }
    
    
});

const CoordinatorDetails = mongoose.model('CoordinatorDetails', UserSchema);
module.exports = CoordinatorDetails;