const DisplayChatRoom = document.querySelector(".DisplayFlex");
(function(){
    // console.log("Hello..");
    // const DisplayChatRoom = document.querySelector(".DisplayFlex");
    // const socket = io();
    
    JoinButton = document.querySelector(".JoinButton");
    ExitButton = document.querySelector(".ExitButton")
    
    JoinButton.addEventListener("click", function() {
        document.querySelector(".chatApplication").classList.add("setChatAppNone");
        
        
        document.querySelector(".chatSection").classList.add("setSection");
		   
    ;})

    ExitButton.addEventListener("click", function() {
        document.querySelector(".chatSection").classList.remove("setSection");
        console.log("hello")
        document.querySelector(".chatApplication").classList.remove("setChatAppNone");
           
    ;})

    


})();