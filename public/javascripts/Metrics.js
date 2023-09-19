
let countPdfClicks = 0;
let WhiteBoardClicks = 0;
let videoClicks = 0;

pdFile = document.querySelector('#pdFile');


pdFile.addEventListener("click", function(req, res) {
    countPdfClicks+=1;
    SendToDataBase();

;});




window.addEventListener('blur', function () {
    window.setTimeout(function () {
        
            if (document.activeElement == document.querySelector('#whiteboard_team') ) {
                WhiteBoardClicks+=1;
                SendToDataBase();
            }else if(document.activeElement == document.querySelector('#myIFrame')){
                videoClicks+=1;
                SendToDataBase();
            }
            window.focus();
        
    }, 0);
});


const SendToDataBase = async () => {
    try {
        let payload = {
                    countPdfClicks: countPdfClicks,
                    videoClicks: videoClicks,
                    WhiteBoardClicks: WhiteBoardClicks
                    };
        let config = { headers: {'Content-Type': 'application/x-www-form-urlencoded',} }

        const res = await axios.post(`http://localhost:3000/UpdateDateBase`,payload,config);
        
    } catch (e) {
        console.log("ERROR", e);
    }
};








