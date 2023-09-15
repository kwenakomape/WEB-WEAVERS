
var coll = document.querySelectorAll("#lessons");
var UserTabs = document.querySelectorAll(".UserTab");
var MenuTab = document.querySelectorAll("#lessonList");

var i;
// sconsole.log(coll.length);
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    // this.classList.toggle("active");
    
    var content = this.nextElementSibling;
    // content.style.maxHeight = null;
    // console.log(content);
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


for (i = 0; i < UserTabs.length; i++) {
  UserTabs[i].addEventListener("click", function() {
    
    // this.classList.add("addBoldText");
      //  MenuTab.style.maxHeight = MenuTab.style.maxHeight+ "px";
    
    //  windows.location.href = 'http://www.google.com';
  });
}
