// pdFile = document.querySelector('#pdFile');



whiteboard = document.querySelector('.whiteboardApi');



let countWhiteBoardClicks = 0;
let countVideoClicks = 0;



window.addEventListener('blur', function () {
    window.setTimeout(function () {
        // if (document.activeElement == document.querySelector('#myIFrame')) {
            if (document.activeElement == document.querySelector('#whiteboard_team')) {
                countWhiteBoardClicks+=1;
            window.focus();
        }
    }, 0);
});


window.addEventListener('blur', function () {
    window.setTimeout(function () {
        
            if (document.activeElement == document.querySelector('#myIFrame')) {
                countVideoClicks+=1;
            window.focus();
        }
    }, 0);
});


console.log(currentUser_Id);





// var iframe = document.getElementById('myIFrame');
// iframe.addEventListener("loadedmetadata", Handler);

// function Handler() {
//     console.log("heloo");
// }


// var monitor = setInterval(function(){
//     var elem = document.activeElement;
//     if(elem && elem.tagName == 'IFRAME'){
//         clearInterval(monitor);
//         alert('clicked!');
//     }
// }, 100);




