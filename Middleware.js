module.exports.isLoggedIn = (req, res, next) => {
    
    
    if (!req.isAuthenticated()) {

        // const { username,password} = req.body;
        // // console.log("heeelaa");
        // // console.log(req.body);
        // // console.log("hello");
        // // console.log(req.path);
        // // console.log("****************");
        // // console.log(req.originalUrl);
        // req.session.returnTo = req.originalUrl;
        // if(username==="John" && password==="UCT07"){
        //     // console.log("heeelaa");
        //     return next();
        // }
        // sconsole.log(req.session.returnTo+",,,,,,,,,,,,,,,")
        // req.flash('error', 'You must be signed in first!');
        return res.redirect('/LogIn');
    }
    next();
}



// module.exports.isMentorOrCoordinator = async (req, res, next) => {
    
//     userCurrently ="Coordinator";
//     const { username,password} = req.body;
    
//     if((username==="John" && password==="UCT07")  ||(username==="Brian" && password==="UCT07")  || (username==="James" && password==="UCT07") || (username==="Luke" && password==="UCT07") ){
       
//         return res.render('UserOverview',{userCurrently});
//     }else{
//         next();
//     }
  
// }