module.exports.isLoggedIn = (req, res, next) => {
    
    
    if (!req.isAuthenticated()) {
        // console.log("hello");
        // console.log(req.path);
        // console.log("****************");
        // console.log(req.originalUrl);
        req.session.returnTo = req.originalUrl;
        // sconsole.log(req.session.returnTo+",,,,,,,,,,,,,,,")
        // req.flash('error', 'You must be signed in first!');
        return res.redirect('/LogIn');
    }
    next();
}