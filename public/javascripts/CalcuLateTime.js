



let isActive = true;
let startTime;
let totalTime = 0;
// console.log(MenteeDetails);
// function to start tracking time
function startTrackingTime() {
  isActive = true;
  startTime = Date.now();
  trackTime();
}

// function to stop tracking time
function stopTrackingTime() {
  isActive = false;
  totalTime += Date.now() - startTime;
}

// function to track time
function trackTime() {
  if (isActive) {
    totalTime += Date.now() - startTime;
    startTime = Date.now();
  }
}

// start tracking time on page load
startTrackingTime();

// track time when user switches tabs
document.addEventListener("visibilitychange", function() {
  if (document.visibilityState === 'hidden') {
    stopTrackingTime();
  } else {
    startTrackingTime();
  }
});

// track time when user minimizes window
window.addEventListener("blur", function() {
  stopTrackingTime();
});

window.addEventListener("focus", function() {
  startTrackingTime();
});

// get total time spent on page
window.setInterval(function() {
  trackTime();
  // console.log("Total time spent on page: " + totalTime / 1000 + " seconds");
  document.querySelector('#time').innerHTML = totalTime / 1000 ;
}, 1000);

// track time when user closes the window
window.addEventListener("beforeunload", function() {
  stopTrackingTime();
  console.log("Total time spent on page: " + totalTime / 1000 + " seconds");
});







