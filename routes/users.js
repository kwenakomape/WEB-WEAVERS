const express = require('express');
const router = express.Router();
const Mentee = require('../Models/MenteeModel');
const Metrics = require('../Models/MetricsModel');
const passport = require('passport');
const { render } = require('ejs');


const{isLoggedIn} = require('../Middleware');

router.get('/', (req, res) => {

    res.render('index');
})

router.get('/LogIn', (req, res) => {
    
    res.render('LogIn');
})
router.get('/SignUp', (req, res) => {
    // req.flash('success','Successfully registered');
    
    res.render('SignUp');
})

router.get('/UserSection',isLoggedIn,async (req, res) => {
    
    res.render('Mentee');   
})

router.post('/LogIn',passport.authenticate('local', { failureRedirect: '/LogIn',keepSessionInfo: true, failureMessage: true },),async (req, res) => {
  
    const redirectUrl = req.session.returnTo || '/UserSection';
    
    delete req.session.returnTo;
    
    res.redirect(redirectUrl);

})


router.post('/UpdateDateBase',async (req, res) => {
    
    const {pageNumber,countPdfClicks,videoClicks,timeSpent,WhiteBoardClicks,ElementName} = req.body;
    
    let pdf =  parseInt (countPdfClicks);
    let vid =  parseInt (videoClicks);
    let board= parseInt (WhiteBoardClicks);
    let time = parseFloat(timeSpent);
    
   
    
    
    const UpdateDateBase = async function (){
        
        await Mentee.updateMany({_id: req.user._id},{ $set: SetProperty1});
        //await Metrics.updateMany({_id: req.user._id},{ $set: SetProperty1});
       
        if(ElementName==='pdFileClick'){
            await Mentee.updateMany({_id: req.user._id},{ $inc: SetProperty2});
            //await Metrics.updateMany({_id: req.user._id},{ $inc: SetProperty2});
        }else if(ElementName==='VideoClick'){
            await Mentee.updateMany({_id: req.user._id},{ $inc: SetProperty3});
            //await Metrics.updateMany({_id: req.user._id},{ $inc: SetProperty3});
        }else if(ElementName==='BoardClick'){
            await Mentee.updateMany({_id: req.user._id},{ $inc: SetProperty4});
            //await Metrics.updateMany({_id: req.user._id},{ $inc: SetProperty4});
        }else if(ElementName==='beforeunload'){
            await Mentee.updateMany({_id: req.user._id},{ $inc: SetProperty5});
            //await Metrics.updateMany({_id: req.user._id},{ $inc: SetProperty5});
        }

    };

    if(pageNumber==="page1"){
        pageVisited = req.session.countVisitedSitedPage1;
        SetProperty1 = {"lesson1.pageVisited":pageVisited}
        SetProperty2 = {"lesson1.countPdfClicks":pdf};
        SetProperty3 = {"lesson1.videoClicks":vid};
        SetProperty4 = {"lesson1.WhiteBoardClicks":board};
        SetProperty5 = {"lesson1.timeSpent":time};
        UpdateDateBase(pageVisited,1,SetProperty1,SetProperty2,SetProperty3,SetProperty4,SetProperty5);
    }else if(pageNumber==="page2"){
        pageVisited = req.session.countVisitedSitedPage2;
        SetProperty1 = {"lesson2.pageVisited":pageVisited}
        SetProperty2 = {"lesson2.countPdfClicks":pdf};
        SetProperty3 = {"lesson2.videoClicks":vid};
        SetProperty4 = {"lesson2.WhiteBoardClicks":board};
        SetProperty5 = {"lesson2.timeSpent":time};
        UpdateDateBase(pageVisited,1,SetProperty1,SetProperty2,SetProperty3,SetProperty4,SetProperty5);
    
    }else if(pageNumber==="page3"){
        pageVisited = req.session.countVisitedSitedPage3;
        SetProperty1 = {"lesson3.pageVisited":pageVisited}
        SetProperty2 = {"lesson3.countPdfClicks":pdf};
        SetProperty3 = {"lesson3.videoClicks":vid};
        SetProperty4 = {"lesson3.WhiteBoardClicks":board};
        SetProperty5 = {"lesson3.timeSpent":time};
        UpdateDateBase(pageVisited,1,SetProperty1,SetProperty2,SetProperty3,SetProperty4,SetProperty5);
    }else if(pageNumber==="page4"){
        pageVisited = req.session.countVisitedSitedPage4;
        SetProperty1 = {"lesson4.pageVisited":pageVisited}
        SetProperty2 = {"lesson4.countPdfClicks":pdf};
        SetProperty3 = {"lesson4.videoClicks":vid};
        SetProperty4 = {"lesson4.WhiteBoardClicks":board};
        SetProperty5 = {"lesson4.timeSpent":time};
        UpdateDateBase(pageVisited,1,SetProperty1,SetProperty2,SetProperty3,SetProperty4,SetProperty5);
    }else if(pageNumber==="page5"){
        pageVisited = req.session.countVisitedSitedPage5;
        SetProperty1 = {"lesson5.pageVisited":pageVisited}
        SetProperty2 = {"lesson5.countPdfClicks":pdf};
        SetProperty3 = {"lesson5.videoClicks":vid};
        SetProperty4 = {"lesson5.WhiteBoardClicks":board};
        SetProperty5 = {"lesson5.timeSpent":time};
        UpdateDateBase(pageVisited,1,SetProperty1,SetProperty2,SetProperty3,SetProperty4,SetProperty5);
    }else if(pageNumber==="page6"){
        pageVisited = req.session.countVisitedSitedPage6;
        SetProperty1 = {"lesson6.pageVisited":pageVisited}
        SetProperty2 = {"lesson6.countPdfClicks":pdf};
        SetProperty3 = {"lesson6.videoClicks":vid};
        SetProperty4 = {"lesson6.WhiteBoardClicks":board};
        SetProperty5 = {"lesson6.timeSpent":time};
        UpdateDateBase(pageVisited,1,SetProperty1,SetProperty2,SetProperty3,SetProperty4,SetProperty5);
    }else if(pageNumber==="page7"){
        pageVisited = req.session.countVisitedSitedPage7;
        SetProperty1 = {"lesson7.pageVisited":pageVisited}
        SetProperty2 = {"lesson7.countPdfClicks":pdf};
        SetProperty3 = {"lesson7.videoClicks":vid};
        SetProperty4 = {"lesson7.WhiteBoardClicks":board};
        SetProperty5 = {"lesson7.timeSpent":time};
        UpdateDateBase(pageVisited,1,SetProperty1,SetProperty2,SetProperty3,SetProperty4,SetProperty5);
    }else if(pageNumber==="page8"){
        pageVisited = req.session.countVisitedSitedPage8;
        SetProperty1 = {"lesson8.pageVisited":pageVisited}
        SetProperty2 = {"lesson8.countPdfClicks":pdf};
        SetProperty3 = {"lesson8.videoClicks":vid};
        SetProperty4 = {"lesson8.WhiteBoardClicks":board};
        SetProperty5 = {"lesson8.timeSpent":time};
        UpdateDateBase(pageVisited,1,SetProperty1,SetProperty2,SetProperty3,SetProperty4,SetProperty5);
    }else if(pageNumber==="page9"){
        pageVisited = req.session.countVisitedSitedPage9;
        SetProperty1 = {"lesson9.pageVisited":pageVisited}
        SetProperty2 = {"lesson9.countPdfClicks":pdf};
        SetProperty3 = {"lesson9.videoClicks":vid};
        SetProperty4 = {"lesson9.WhiteBoardClicks":board};
        SetProperty5 = {"lesson9.timeSpent":time};
        UpdateDateBase(pageVisited,1,SetProperty1,SetProperty2,SetProperty3,SetProperty4,SetProperty5);
    }else if(pageNumber==="page10"){
        pageVisited = req.session.countVisitedSitedPage2;
        SetProperty1 = {"lesson10.pageVisited":pageVisited}
        SetProperty2 = {"lesson10.countPdfClicks":pdf};
        SetProperty3 = {"lesson10.videoClicks":vid};
        SetProperty4 = {"lesson10.WhiteBoardClicks":board};
        SetProperty5 = {"lesson10.timeSpent":time};
        UpdateDateBase(pageVisited,1,SetProperty1,SetProperty2,SetProperty3,SetProperty4,SetProperty5);
    }
    res.sendStatus(200);

})



router.post('/Register', async (req, res) => {
    
    lesson1 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0,pageVisited: 0};
    lesson2 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0,pageVisited: 0};
    lesson3 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0,pageVisited: 0};
    lesson4 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0,pageVisited: 0};
    lesson5 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0,pageVisited: 0};
    lesson6 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0,pageVisited: 0};
    lesson7 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0,pageVisited: 0};
    lesson8 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0,pageVisited: 0};
    lesson9 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0,pageVisited: 0};
    lesson10 = {countPdfClicks: 0,videoClicks: 0,WhiteBoardClicks: 0,timeSpent: 0,pageVisited: 0};

    const {username,Surname,password,StudentID,Email} = req.body;
    const newUser = new Mentee({username,Surname,StudentID,Email,
                                lesson1,lesson2,lesson3,lesson4,lesson5,
                                lesson6,lesson7,lesson8,lesson9,lesson10});
    const registerUser = await Mentee.register(newUser,password);
    req.login(registerUser, function(err) {
        if (err) { return next(err); }
        return res.redirect('/UserSection');
      });
})



router.get('/logout', function(req, res, next) {
    req.logout(function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  });

router.post('/Analysis',isLoggedIn,async (req, res) => {
    console.log(req.body);
    
    
   
    
    const GetAllData =  await Mentee.find({});
    
    const {LessonNumber} = req.body;

    TotalsPdfClicks = 0;
    TotalsVideoClicks = 0;
    TotalsBoardClicks = 0;
    TotalTime = 0;
    TotalpageVisit = 0;

    // TotalsPdfClicksForEach = 0;
    // TotalsVideoClicksForEach  = 0;
    // TotalsBoardClicksForEach  = 0;
    // TotalTimeForEach  = 0;
    // TotalpageVisitForEach  = 0;

    CombinedLessons = ['lesson1','lesson2','lesson3','lesson4','lesson5','lesson6','lesson7','lesson8','lesson9','lesson10'];
    CombinedPdfClicks = [];
    CombinedVideoClicks = [];
    CombinedBoardClicks = [];
    CombinedTotalTime = [];
    CombinedTotalpageVisit = [];
    
    if(LessonNumber==="All"){
        for(let i=0;i<CombinedLessons.length;i++){
            for(let j=0;j<GetAllData.length;j++){

                TotalsPdfClicks+= GetAllData[j][CombinedLessons[i]].countPdfClicks;
                TotalsVideoClicks+= GetAllData[j][CombinedLessons[i]].videoClicks;
                TotalsBoardClicks+= GetAllData[j][CombinedLessons[i]].WhiteBoardClicks;
                TotalTime+= (GetAllData[j][CombinedLessons[i]].timeSpent);
                TotalpageVisit+= GetAllData[j][CombinedLessons[i]].pageVisited;
                
            }
            CombinedPdfClicks.push(TotalsPdfClicks);
            CombinedVideoClicks.push(TotalsVideoClicks);
            CombinedBoardClicks.push(TotalsBoardClicks);
            CombinedTotalTime.push(TotalTime);
            CombinedTotalpageVisit.push(TotalpageVisit);

            TotalsPdfClicks = 0;
            TotalsVideoClicks = 0;
            TotalsBoardClicks = 0;
            TotalTime = 0;
            TotalpageVisit = 0;

        }

   
        
        return res.render('Analysis',{CombinedPdfClicks,CombinedVideoClicks,CombinedBoardClicks,CombinedTotalTime,CombinedTotalpageVisit,LessonNumber});


        
    }else{
        for(let i=0;i<GetAllData.length;i++){
            TotalsPdfClicks+= GetAllData[i][LessonNumber].countPdfClicks;
            TotalsVideoClicks+= GetAllData[i][LessonNumber].videoClicks;
            TotalsBoardClicks+= GetAllData[i][LessonNumber].WhiteBoardClicks;
            TotalTime+= GetAllData[i][LessonNumber].timeSpent;
            TotalpageVisit+= GetAllData[i][LessonNumber].pageVisited;
            
        }
    }  
    TotalTime = TotalTime.toFixed(2);
   
    return res.render('Analysis',{TotalsPdfClicks,TotalsVideoClicks,TotalsBoardClicks,TotalTime,TotalpageVisit,LessonNumber});  
})

router.get('/Analysis',isLoggedIn,async (req, res) => {
    TotalsVideoClicks= 0;
    TotalsPdfClicks =0;
    TotalsBoardClicks=0;
    TotalTime = 0;
    TotalpageVisit =0;
    LessonNumber = "NOTHING";
    CombinedPdfClicks = [];
    CombinedVideoClicks =[];
    CombinedBoardClicks =[];
    CombinedTotalTime = [];
    CombinedTotalpageVisit =[];
    res.render('Analysis',{TotalsPdfClicks,TotalsVideoClicks,TotalsBoardClicks,TotalTime,TotalpageVisit,LessonNumber});
})


module.exports =router;
