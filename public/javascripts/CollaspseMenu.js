
//var coll = document.getElementById(lessons);
var coll = document.querySelectorAll("#lessons");
var UserTabs = document.querySelectorAll(".UserTab");

var i;
// sconsole.log(coll.length);
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


// for (i = 0; i < UserTabs.length; i++) {
//   UserTabs[i].addEventListener("click", function() {
//     this.classList.add("addBoldText");
//   });
// }
