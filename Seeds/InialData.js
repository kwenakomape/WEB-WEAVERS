const mongoose = require('mongoose');
const MentorDetails = require('../Models/MentorModel');
const CoordinatorDeatils = require('../Models/CoordinatorModel');

mongoose.connect('mongodb://0.0.0.0:27017/WebWeaversData', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

TempListMentors = [{Name:"John",  Email:"JTYGGHY03@myuct.ac.za", Role:"Mentor" ,username:"John" ,Surname:"Spike"},
                    {Name:"Brian", Email:"BNPAWI002@myuct.ac.za", Role:"Mentor" ,username:"Brian" ,Surname:"Baloi"},
                    {Name:"James", Email:"JNEAWIY03@myuct.ac.za", Role:"Mentor" ,username:"James" ,Surname:"Ben"},
                    {Name:"Luke", Email:"LNKAEYH01@myuct.ac.za", Role:"Mentor" ,username:"Luke" ,Surname:"Mason"}];

ListCoordinators ={Name:"Gary", Email:"gstewart@cs.uct.ac.za", Role:"Coordinator" ,username:"Gary" ,Surname:"Stewart"};


const seedDB = async () => {
    await MentorDetails.deleteMany({});
    await CoordinatorDeatils.deleteMany({});
    
    for(i=0;i<TempListMentors.length;i++){

        const newUser = new MentorDetails(TempListMentors[i]);
        await  newUser.save();
        // const registerUser = await MentorDetails.register(newUser,"UCT07");
        
    }
   
    const newUser = new CoordinatorDeatils(ListCoordinators);
    await  newUser.save();
    // const registerUser = await CoordinatorDeatils.register(newUser,"UCT07");

}

seedDB().then(() => {
    console.log("data sent.....")
    mongoose.connection.close();
})