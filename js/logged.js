// Hide Loader after page is loaded

window.onload = function() { 
  document.getElementsByClassName("loading")[0].style.transform = 'scale(0)';
  document.documentElement.webkitRequestFullScreen(); 
}
  
  // Full screen
  
function GoFullScreen() {
  document.documentElement.webkitRequestFullScreen();
}

//Show info

function showInfo() {
  var infoElement = document.getElementById('info');
  infoElement.style.transform = 'translateX(0) translateY(0) scale(1)';
  document.getElementById('info-btn').style.display = 'none';
}

//Close info

function closeInfo() {
  var infoElement = document.getElementById('info');
  infoElement.style.transform = 'translateX(100vw) translateY(-100vh) scale(0)';
  document.getElementById('info-btn').style.display = 'block';
}

// Sidenav(mobile)

let data = {"v":"5.3.4","fr":29.9700012207031,"ip":0,"op":29.0000011811942,"w":650,"h":650,"nm":"Comp 2","ddd":0,"assets":[{"id":"comp_0","layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Mid","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[375,375,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[36.58,84.415]],"o":[[0,0],[0,0],[-26,-60]],"v":[[-196,-16],[172,-16],[264,-108]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":36,"ix":5},"lc":2,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":true},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[0],"e":[28]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":7,"s":[28],"e":[100]},{"t":12.5000005091354}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":0,"s":[28],"e":[100]},{"t":7.00000028511585}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":450.000018328876,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"CIrcle","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":73,"ix":10},"p":{"a":0,"k":[356.555,358.555,0],"ix":2},"a":{"a":0,"k":[47.555,109.555,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[595.109,595.109],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":36,"ix":5},"lc":2,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":true},{"ty":"tr","p":{"a":0,"k":[47.555,109.555],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"n":["0p833_0p833_0p167_0p167"],"t":7,"s":[100],"e":[0]},{"t":17.0000006924242}],"ix":1},"e":{"a":0,"k":100,"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":450.000018328876,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"Top","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":10,"s":[0],"e":[45]},{"t":19.0000007738859}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":10,"s":[361.015,238.459,0],"e":[361.015,358.459,0],"to":[0,20,0],"ti":[0,-20,0]},{"t":19.0000007738859}],"ix":2},"a":{"a":0,"k":[-13.985,-36.541,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-199.94,-36.541],[171.97,-36.541]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":36,"ix":5},"lc":2,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":450.000018328876,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Bot","sr":0.5,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"n":["0p667_1_0p333_0"],"t":10,"s":[0],"e":[-45]},{"t":19.0000007738859}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"n":"0p667_1_0p333_0","t":10,"s":[361.015,478.459,0],"e":[361.015,358.459,0],"to":[0,-20,0],"ti":[0,20,0]},{"t":19.0000007738859}],"ix":2},"a":{"a":0,"k":[-13.985,-36.541,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-199.94,-36.541],[171.97,-36.541]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":36,"ix":5},"lc":2,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Shape 1","np":3,"cix":2,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":450.000018328876,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Comp 1","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[345,345,0],"ix":2},"a":{"a":0,"k":[375,375,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"w":750,"h":750,"ip":0,"op":900.000036657751,"st":0,"bm":0}],"markers":[]};
let icon = document.querySelector('.open-btn');

let animation = bodymovin.loadAnimation({
  container: icon,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  animationData: data
});
animation.setSpeed(1.5);


let direction = 1;
icon.addEventListener('click', (e) => {
  animation.setDirection(direction);
  animation.play();
  let left, color;
  if(direction === 1) {
    left = '0vw)';
    color = 'transparent';
  } else {
    left = '-103vw)';
    color = 'black';
  }
  document.getElementById('sidenav-content').style.transform = 'translateX(' + left;
  document.getElementById('sidenav-bg').style.transform = 'translateX(' + left;
  document.getElementsByClassName('open-btn')[0].style.background = color;
  direction = -direction;
});

// Basic info function

function GetBasicInfo() {
  var TnC = document.getElementById('termsAndConditions');
  var container = document.getElementsByClassName('container')[0];
  var profileDiv = document.getElementById('profile-template');
  container.removeChild(TnC);
  container.appendChild(profileDiv.content.cloneNode(true));
}

// Pre Assessment

function goToPreAssess() {
  var preAssess = document.getElementById('pre-assessment-template');
  var profileDiv = document.getElementById('profile');
  var container = document.getElementsByClassName('container')[0];
  container.style.background = 'whitesmoke';
  container.removeChild(profileDiv);
  container.appendChild(preAssess.content.cloneNode(true));
}

function goToLevel(element, group , code) {
  var crown = document.getElementsByClassName('crown')[0];
  var preAssess = document.getElementById('pre-assessment');
  var container = document.getElementsByClassName('container')[0];
  var clonedCrown = crown.cloneNode(true);
  if(code === 1) {

    if(group === 'placebo') {
      var questions = document.getElementById('placebo');
      container.removeChild(preAssess);
      container.appendChild(questions.content.cloneNode(true));
    } else if(group === 'control') {
      var questions = document.getElementById('control');
      container.removeChild(preAssess);
      container.appendChild(questions.content.cloneNode(true));
    } else if(group === 'experiment') {
      var questions = document.getElementById('experiment');
      container.removeChild(preAssess);
      container.appendChild(questions.content.cloneNode(true));
    }
  } else {
    clonedCrown.style.display = 'block';
    element.appendChild(clonedCrown);
  }
}

function goBack() {
  var preAssess = document.getElementById('pre-assessment-template');
  var container = document.getElementsByClassName('container')[0];
  if(container.contains(document.getElementsByClassName('questions')[0])) {
    container.removeChild(document.getElementsByClassName('questions')[0]);
    container.appendChild(preAssess.content.cloneNode(true));
  } else if (container.contains(document.getElementsByClassName('center')[0])) {
    container.removeChild(document.getElementsByClassName('center')[0]);
    container.appendChild(preAssess.content.cloneNode(true));
  }
}

function increaseProgress() {
  var progress = document.getElementsByClassName('progress')[0];
  var progressBar = document.getElementsByClassName('progress-bar')[0];
  var initialWidth = parseFloat(progress.clientWidth);
  var barWidth = progressBar.clientWidth;
  console.log(initialWidth, barWidth);
  if(barWidth === 0 && initialWidth !== barWidth) {
    console.log(1);
    progressBar.style.width = initialWidth%10 + initialWidth*1.00/10 + 'px';
  }
  else if(barWidth !== 0 && initialWidth > barWidth) {
    console.log(2);
    progressBar.style.width = progressBar.clientWidth + initialWidth*1.00/10 + 'px';
  }
}














function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
// Google Sign In User Info
// var googleUser = {};
// var startApp = function() {
// gapi.load('auth2', function(){
//   // Retrieve the singleton for the GoogleAuth library and set up the client.
//   auth2 = gapi.auth2.init({
//   client_id: '1026579868783-ft78qs6p4d6e6og3ofr2clfufi7bgsuc.apps.googleusercontent.com',
//   cookiepolicy: 'single_host_origin',
//   // Request scopes in addition to 'profile' and 'email'
//   //scope: 'additional_scope'
//   });
//   });
// };

// var auth2 = gapi.auth2.init({
// client_id: '1026579868783-ft78qs6p4d6e6og3ofr2clfufi7bgsuc.apps.googleusercontent.com',
// cookiepolicy: 'single_host_origin',
// // Request scopes in addition to 'profile' and 'email'
// //scope: 'additional_scope'
// });

// if (auth2.isSignedIn.get()) {
// var profile = auth2.currentUser.get().getBasicProfile();
// document.getElementById('name').innerHTML = profile.getName();
// console.log('ID: ' + profile.getId());
// console.log('Full Name: ' + profile.getName());
// console.log('Given Name: ' + profile.getGivenName());
// console.log('Family Name: ' + profile.getFamilyName());
// console.log('Image URL: ' + profile.getImageUrl());
// console.log('Email: ' + profile.getEmail());
// } else {
//   console.log('User not signed in');
// }

// Google sign in

var auth2; // The Sign-In object.
var googleUser; // The current user.

/**
 * Calls startAuth after Sign in V2 finishes setting up.
 */
var appStart = function() {
  gapi.load('auth2', initSigninV2);
};

/**
 * Initializes Signin v2 and sets up listeners.
 */
var initSigninV2 = function() {
  auth2 = gapi.auth2.init({
      client_id: '1026579868783-ft78qs6p4d6e6og3ofr2clfufi7bgsuc.apps.googleusercontent.com',
      scope: 'profile'
  });

  // Listen for sign-in state changes.
  auth2.isSignedIn.listen(signinChanged);

  // Listen for changes to current user.
  auth2.currentUser.listen(userChanged);

  // Sign in the user if they are currently signed in.
  if (auth2.isSignedIn.get() == true) {
    auth2.signIn();
  }

  // Start with the current live values.
  refreshValues();
};

/**
 * Listener method for sign-out live value.
 *
 * @param {boolean} val the updated signed out state.
 */
var signinChanged = function (val) {
  console.log('Signin state changed to ', val);
};

/**
 * Listener method for when the user changes.
 *
 * @param {GoogleUser} user the updated user.
 */
var userChanged = function (user) {
  console.log('User now: ', user);
  googleUser = user;
  updateGoogleUser();
  console.log(JSON.stringify(user, undefined, 2));
};

/**
 * Updates the properties in the Google User table using the current user.
 */
var updateGoogleUser = function () {
  if (googleUser) {
      console.log(JSON.stringify(googleUser.getAuthResponse(), undefined, 2));
  } else {
    console.log('---');
  }
};

/**
 * Retrieves the current user and signed in states from the GoogleAuth
 * object.
 */
var refreshValues = function() {
  if (auth2){
    console.log('Refreshing values...');

    googleUser = auth2.currentUser.get();

    
      console.log(JSON.stringify(googleUser, undefined, 2));
      console.log(auth2.isSignedIn.get());

    updateGoogleUser();
  }
}

function logout() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
  console.log('User signed out.');
  });
}