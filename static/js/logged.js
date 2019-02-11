// Hide Loader after page is loaded

window.onload = function() {
  console.log('getting user status!');
  var xhttp = new XMLHttpRequest();
  var url = '/status/';
  xhttp.open('GET', url, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
      if (jsonData.stage == 0) {
        // Set z-index to 2 for hiding the nav menu and then reset after profile filled
        document.getElementsByClassName('container')[0].style.zIndex = '2';
      } else if (jsonData.stage == 1) {
        var preAssess = document.getElementById('pre-assessment-template');
        var TnC = document.getElementById('termsAndConditions');
        var container = document.getElementsByClassName('container')[0];
        container.removeChild(TnC);
        container.appendChild(preAssess.content.cloneNode(true));
        var weeks = document.getElementsByClassName('container')[0].getElementsByClassName('levels-container')[0].getElementsByTagName('li');
        if (jsonData.category == 0) {
          lockAllWeeks();
        } else if (jsonData.category == 1 || jsonData.category == -1) {
          // Lock everything then unlock Category 1
          lockAllWeeks();
          weeks[0].getElementsByTagName('p')[0].classList = [''];
          weeks[0].getElementsByTagName('p')[0].innerHTML = 'Please Complete Category #1';
        } else if (jsonData.category == 2) {
          // Lock everything then unlock week 1
          lockAllWeeks();
          weeks[1].getElementsByTagName('p')[0].classList = [''];
          weeks[1].getElementsByTagName('p')[0].innerHTML = 'Please Complete Category #2';
        } else if (jsonData.category == 3) {
          // Lock everything then unlock week 1
          lockAllWeeks();
          weeks[2].getElementsByTagName('p')[0].classList = [''];
          weeks[2].getElementsByTagName('p')[0].innerHTML = 'Please Complete Category #3';
        } else if (jsonData.category == 4) {
          // Lock everything then unlock week 1
          lockAllWeeks();
          weeks[3].getElementsByTagName('p')[0].classList = [''];
          weeks[3].getElementsByTagName('p')[0].innerHTML = 'Please Complete Category #4';
        } else {
          lockAllWeeks();
        }
      } else if (jsonData.stage == 2) {
        var TnC = document.getElementById('termsAndConditions');
        var expAssess = document.getElementById('experiment-assessment-template');
        var container = document.getElementsByClassName('container')[0];
        container.removeChild(TnC);
        container.appendChild(expAssess.content.cloneNode(true));
        document.getElementById('experiment-assess-heading').innerHTML = 'Weekly Continuous Evaluation';
        var weeks = document.getElementsByClassName('container')[0].getElementsByClassName('levels-container')[0].getElementsByTagName('li');
        if (jsonData.category == 0) {
          // Lock Everything
          lockAllWeeks();
        } else if (jsonData.category == 1) {
          // Lock everything then unlock week 1
          lockAllWeeks();
          weeks[0].getElementsByTagName('p')[0].classList = [''];
          weeks[0].getElementsByTagName('p')[0].innerHTML = 'Please Complete Week #1';
        } else if (jsonData.category == 2) {
          // Lock everything then unlock week 1
          lockAllWeeks();
          weeks[1].getElementsByTagName('p')[0].classList = [''];
          weeks[1].getElementsByTagName('p')[0].innerHTML = 'There will be a short review of Week #1 followed by Questions for Week #2';
        } else if (jsonData.category == 3) {
          // Lock everything then unlock week 1
          lockAllWeeks();
          weeks[2].getElementsByTagName('p')[0].classList = [''];
          weeks[2].getElementsByTagName('p')[0].innerHTML = 'There will be a short review of Week #2 followed by Questions for Week #3';
        } else if (jsonData.category == 4) {
          // Lock everything then unlock week 1
          lockAllWeeks();
          weeks[3].getElementsByTagName('p')[0].classList = [''];
          weeks[3].getElementsByTagName('p')[0].innerHTML = 'There will be a short review of Week #3 followed by Questions for Week #4';
        } else {
          lockAllWeeks();
        }
      } else if (jsonData.stage == 3) {
        document.getElementsByClassName('menu')[0].style.zIndex='-1';
        var TnC = document.getElementById('termsAndConditions');
        var preAssess = document.getElementById('placebo');
        var container = document.getElementsByClassName('container')[0];
        container.removeChild(TnC);
        container.appendChild(preAssess.content.cloneNode(true));
        getPlaceboQuestion();
        // document.getElementById('pre-assess-heading').innerHTML = 'Weekly Continuous Evaluation';
      } else if(jsonData.stage == 4) {
        var TnC = document.getElementById('termsAndConditions');
        var control = document.getElementById('control');
        var container = document.getElementsByClassName('container')[0];
        container.removeChild(TnC);
        container.appendChild(control.content.cloneNode(true));
      } else {
        // Enter Post Assessment
        var preAssess = document.getElementById('post-assessment-template');
        var TnC = document.getElementById('termsAndConditions');
        var container = document.getElementsByClassName('container')[0];
        container.removeChild(TnC);
        container.appendChild(preAssess.content.cloneNode(true));
      }
      document.getElementsByClassName("loading")[0].classList.add('fade-out');
      // Hide Loader after 1s
      setTimeout(function(){document.getElementsByClassName('loading')[0].style.display='none';},1000);
    }
  };
  xhttp.send();
}

function lockAllWeeks() {
  var weeks = document.getElementsByClassName('container')[0].getElementsByClassName('levels-container')[0].getElementsByTagName('li');
  for (var i=0; i<4; i++) {
    weeks[i].getElementsByTagName('p')[0].classList = ['locked'];
    weeks[i].getElementsByTagName('p')[0].innerHTML = '<i class="fa fa-lock"></i>';
  }
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
  document.getElementsByClassName('menu')[0].style.zIndex='-1';
}

//Close info

function closeInfo() {
  var infoElement = document.getElementById('info');
  infoElement.style.transform = 'translateX(100vw) translateY(-100vh) scale(0)';
  document.getElementById('info-btn').style.display = 'block';
  document.getElementsByClassName('menu')[0].style.zIndex='1';
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
  // Initializes the States
  print_state("states");
}

// Pre Assessment

function goToPreAssess() {
  var data = {
    "name": document.getElementById('username').value,
    "age": document.getElementById('age').value,
    "phone": document.getElementById('phone').value,
    "year": document.getElementById('year').value,
    "csrftoken": []
  };

  var gender_val = null;
  for(let i=1; i<4; i++) {
    if(document.getElementById('gender-'+i).checked) {
      gender_val = document.getElementById('gender-'+i).value;
    }
  }
  
  data.gender = gender_val;

  var proceed = Validate(data);
  console.log(data, proceed);
  console.log(proceed);

  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });

  if(proceed) {
    console.log("Sucess");
    submitData(JSON.stringify(data));
  }
}

function getCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function submitData(data) {
  // Display Loading Screen
  document.getElementsByClassName('ques-loading')[0].style.display='flex';
  var csrf_token = getCookie('csrftoken');
  var xhttp = new XMLHttpRequest();
  var url = '/formdata/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var preAssess = document.getElementById('pre-assessment-template');
      var profileDiv = document.getElementById('profile');
      var container = document.getElementsByClassName('container')[0];
      container.style.background = 'whitesmoke';
      container.removeChild(profileDiv);
      container.appendChild(preAssess.content.cloneNode(true));
      document.getElementsByClassName('container')[0].style.zIndex = '';
      // Hide Loader Screen after 2s
      setTimeout(function(){document.getElementsByClassName('ques-loading')[0].style.display='none';},2000);
      location.reload();
    }
  };
  xhttp.send(data);
}

function goToLevel(category, context) {
  // var crown = document.getElementsByClassName('crown')[0];
  // var preAssess = document.getElementById('pre-assessment');
  // var container = document.getElementsByClassName('container')[0];
  // var clonedCrown = crown.cloneNode(true);
  var data = {
    "category": category,
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  if (context.parentElement.getElementsByTagName('p')[0].classList.contains('locked')) {
    // Do Nothing
  } else {
    // Display Loading Screen
    document.getElementsByClassName('ques-loading')[0].style.display='flex';
    document.getElementById('info-btn').setAttribute('onclick', 'showInfo('+category+')');
    var xhttp = new XMLHttpRequest();
    var url = '/pre_cat/';
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-CSRFToken", csrf_token);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var jsonData = JSON.parse(xhttp.responseText);
        console.log('sending req for getting ques of category' + category);
        console.log(jsonData);
        getQuestion();
        document.getElementsByClassName('menu')[0].style.zIndex='-1';
      }
    };
    xhttp.send(JSON.stringify(data));
  }
}
var week = 1;;
function goToWeek(week_num, context) {
  // var crown = document.getElementsByClassName('crown')[0];
  // var preAssess = document.getElementById('pre-assessment');
  // var container = document.getElementsByClassName('container')[0];
  // var clonedCrown = crown.cloneNode(true);
  var data = {
    "category": week_num,
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  if (context.parentElement.getElementsByTagName('p')[0].classList.contains('locked')) {
    // Do Nothing
  } else {
    week = week_num;
    document.getElementById('info-btn').setAttribute('onclick', 'showInfo('+week+')');
    // Display Loading Screen
    document.getElementsByClassName('ques-loading')[0].style.display='flex';
    var xhttp = new XMLHttpRequest();
    var url = '/pre_cat/';
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-CSRFToken", csrf_token);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var jsonData = JSON.parse(xhttp.responseText);
        console.log('sending req for getting ques of category' + week_num);
        console.log(jsonData);
        getQuestion();
        document.getElementsByClassName('menu')[0].style.zIndex='-1';
      }
    };
    xhttp.send(JSON.stringify(data));
  }
}
function goToPostLevel(category, context) {
  // var crown = document.getElementsByClassName('crown')[0];
  // var preAssess = document.getElementById('pre-assessment');
  // var container = document.getElementsByClassName('container')[0];
  // var clonedCrown = crown.cloneNode(true);
  var data = {
    "category": category,
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  if (context.parentElement.getElementsByTagName('p')[0].classList.contains('locked')) {
    // Do Nothing
  } else {
    document.getElementById('info-btn').setAttribute('onclick', 'showInfo('+category+')');
    // Display Loading Screen
    document.getElementsByClassName('ques-loading')[0].style.display='flex';
    var xhttp = new XMLHttpRequest();
    var url = '/pre_cat/';
    xhttp.open('POST', url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-CSRFToken", csrf_token);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var jsonData = JSON.parse(xhttp.responseText);
        console.log('sending req for getting ques of category' + category);
        console.log(jsonData);
        getPostQuestion();
        document.getElementsByClassName('menu')[0].style.zIndex='-1';
      }
    };
    xhttp.send(JSON.stringify(data));
  }
}
var pk;
function getQuestion() {
  var data = {
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  // Display Loading Screen
  document.getElementsByClassName('ques-loading')[0].style.display='flex';
  var xhttp = new XMLHttpRequest();
  var url = '/prepos_details/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
      num_ques_pre = jsonData.totq;
      var pre_assess_form = document.getElementById('experiment');
      var temp = pre_assess_form.content.cloneNode(true);
      var container = document.getElementsByClassName('container')[0];
      var preAssess = document.getElementById('pre-assessment');
      if (document.getElementsByClassName('container')[0].getElementsByClassName('questions')[0]) {
        document.getElementsByClassName('container')[0].removeChild(document.getElementsByClassName('container')[0].getElementsByClassName('questions')[0]);
        document.getElementsByClassName('container')[0].removeChild(document.getElementsByClassName('container')[0].getElementsByClassName('back')[0]);
      }
      container.appendChild(temp);
      document.getElementsByClassName('container')[0].getElementsByClassName('back')[0].setAttribute('onclick', 'goBack()');
      document.getElementById('exp_ques').innerHTML = jsonData.qno + ') ' + jsonData.data.text;
      document.getElementById('f-label').innerHTML = jsonData.data.choice1;
      document.getElementById('s-label').innerHTML = jsonData.data.choice2;
      document.getElementById('t-label').innerHTML = jsonData.data.choice3;
      document.getElementById('fo-label').innerHTML = jsonData.data.choice4;
      document.getElementById('fi-label').innerHTML = jsonData.data.choice5;
      document.getElementById('si-label').innerHTML = jsonData.data.choice6;
      document.getElementById('se-label').innerHTML = jsonData.data.choice7;
      document.getElementById('1-option').value = jsonData.data.choice1;
      document.getElementById('2-option').value = jsonData.data.choice2;
      document.getElementById('3-option').value = jsonData.data.choice3;
      document.getElementById('4-option').value = jsonData.data.choice4;
      document.getElementById('5-option').value = jsonData.data.choice5;
      document.getElementById('6-option').value = jsonData.data.choice6;
      document.getElementById('7-option').value = jsonData.data.choice7;
      if (jsonData.data.choice1 == 'wsr') {
        document.getElementById('1-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice2 == 'wsr') {
        document.getElementById('2-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice3 == 'wsr') {
        document.getElementById('3-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice4 == 'wsr') {
        document.getElementById('4-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice5 == 'wsr') {
        document.getElementById('5-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice6 == 'wsr') {
        document.getElementById('6-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice7 == 'wsr') {
        document.getElementById('7-option').parentElement.style.display = 'none';
      }
      pk = jsonData.data.pk;
      // Hide Loader Screen after 2s
      setTimeout(function(){document.getElementsByClassName('ques-loading')[0].style.display='none';},2000);
      // Reset Progress Bar
      barWidth = 0;
      document.getElementsByClassName('progress-bar')[0].style.width = 0;
      for (var i = 1; i < jsonData.qno; i++) {
        increaseProgress();
      }
      if (preAssess)
        container.removeChild(preAssess);
    }
  };
  xhttp.send(JSON.stringify(data)); 
}

function submitAns() {
  var answer;
  for(let i=1; i<=7; i++) {
    if(document.getElementById(i+'-option').checked) {
      answer = document.getElementById(i+'-option').value;
    }
  }
  var data = {
    "pk": pk,
    "ans": answer,
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  console.log(csrf_token);
  console.log(data);
  // Display Loading Screen
  document.getElementsByClassName('ques-loading')[0].style.display='flex';
  var xhttp = new XMLHttpRequest();
  var url = '/ans_ques/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
      if (jsonData.next == 1) {
        // Close this category and lock it
        location.reload();
      } else {
        // setTimeout(function(){increaseProgress();},2500);
        getQuestion();
      }
    }
  };
  xhttp.send(JSON.stringify(data));
}
function getExpQuestion() {
  var data = {
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  // Display Loading Screen
  document.getElementsByClassName('ques-loading')[0].style.display='flex';
  var xhttp = new XMLHttpRequest();
  var url = '/exp_details/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
      num_ques_exp = jsonData.totq;
      var container = document.getElementsByClassName('container')[0];
      var preAssess = document.getElementById('experiment-assessment');
      if (document.getElementsByClassName('container')[0].getElementsByClassName('questions')[0]) {
        document.getElementsByClassName('container')[0].removeChild(document.getElementsByClassName('container')[0].getElementsByClassName('questions')[0]);
        document.getElementsByClassName('container')[0].removeChild(document.getElementsByClassName('container')[0].getElementsByClassName('back')[0]);
      }
      if (jsonData.format == "mcq") {
        var pre_assess_form = document.getElementById('exp');
        var temp = pre_assess_form.content.cloneNode(true);
        container.appendChild(temp);
        document.getElementsByClassName('container')[0].getElementsByClassName('back')[0].setAttribute('onclick', 'goExpBack()');
        document.getElementById('exp_ques').innerHTML = jsonData.qno + ') ' + jsonData.data.text;
        document.getElementById('f-label').innerHTML = jsonData.data.choice1;
        document.getElementById('s-label').innerHTML = jsonData.data.choice2;
        document.getElementById('t-label').innerHTML = jsonData.data.choice3;
        document.getElementById('fo-label').innerHTML = jsonData.data.choice4;
        document.getElementById('fi-label').innerHTML = jsonData.data.choice5;
        document.getElementById('si-label').innerHTML = jsonData.data.choice6;
        document.getElementById('se-label').innerHTML = jsonData.data.choice7;
        document.getElementById('1-option').value = jsonData.data.choice1;
        document.getElementById('2-option').value = jsonData.data.choice2;
        document.getElementById('3-option').value = jsonData.data.choice3;
        document.getElementById('4-option').value = jsonData.data.choice4;
        document.getElementById('5-option').value = jsonData.data.choice5;
        document.getElementById('6-option').value = jsonData.data.choice6;
        document.getElementById('7-option').value = jsonData.data.choice7;
        if (jsonData.data.choice1 == 'wsr') {
          document.getElementById('1-option').parentElement.style.display = 'none';
        }
        if (jsonData.data.choice2 == 'wsr') {
          document.getElementById('2-option').parentElement.style.display = 'none';
        }
        if (jsonData.data.choice3 == 'wsr') {
          document.getElementById('3-option').parentElement.style.display = 'none';
        }
        if (jsonData.data.choice4 == 'wsr') {
          document.getElementById('4-option').parentElement.style.display = 'none';
        }
        if (jsonData.data.choice5 == 'wsr') {
          document.getElementById('5-option').parentElement.style.display = 'none';
        }
        if (jsonData.data.choice6 == 'wsr') {
          document.getElementById('6-option').parentElement.style.display = 'none';
        }
        if (jsonData.data.choice7 == 'wsr') {
          document.getElementById('7-option').parentElement.style.display = 'none';
        }
      } else {
        var preAssess = document.getElementById('placebo');
        container.appendChild(preAssess.content.cloneNode(true));
        document.getElementsByClassName('container')[0].getElementsByClassName('hint-text')[0].setAttribute('value',jsonData.hint);
        document.getElementsByClassName('container')[0].getElementsByClassName('question')[0].innerHTML = jsonData.qno + ') ' + jsonData.data.text;
      }
      pk = jsonData.data.pk;
      // Hide Loader Screen after 2s
      setTimeout(function(){document.getElementsByClassName('ques-loading')[0].style.display='none';},2000);
      // Reset Progress Bar
      expBarWidth = 0;
      document.getElementsByClassName('progress-bar')[0].style.width = 0;
      for (var i = 1; i < jsonData.qno; i++) {
        increaseExpProgress();
      }
      if (preAssess)
        container.removeChild(preAssess);
    }
  };
  xhttp.send(JSON.stringify(data)); 
}

function submitExpAns() {
  var answer;
  if (document.getElementById('1-checked')) {
    for(let i=1; i<=7; i++) {
      if(document.getElementById(i+'-option').checked) {
        answer = document.getElementById(i+'-option').value;
      }
    }
  } else {
    answer = document.getElementById('placebo-ans').value;
  }
  var data = {
    "pk": pk,
    "ans": answer,
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  console.log(csrf_token);
  console.log(data);
  // Display Loading Screen
  document.getElementsByClassName('ques-loading')[0].style.display='flex';
  var xhttp = new XMLHttpRequest();
  var url = '/ans_ques/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
      if (jsonData.next == 1) {
        // Close this Week and lock it
        // Display Offline Tasks
        displayOffline(week);
      } else {
        // setTimeout(function(){increaseExpProgress();},2500);
        getExpQuestion();
      }
    }
  };
  xhttp.send(JSON.stringify(data));
}
function getPlaceboQuestion() {
  var data = {
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  // Display Loading Screen
  document.getElementsByClassName('ques-loading')[0].style.display='flex';
  var xhttp = new XMLHttpRequest();
  var url = '/prepos_details/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
      num_ques_placebo = jsonData.totq;
      var preAssess = document.getElementById('placebo');
      var container = document.getElementsByClassName('container')[0];
      container.appendChild(preAssess.content.cloneNode(true));
      if (document.getElementsByClassName('container')[0].getElementsByClassName('questions')[0]) {
        document.getElementsByClassName('container')[0].removeChild(document.getElementsByClassName('container')[0].getElementsByClassName('questions')[0]);
      }
      if (document.getElementsByClassName('container')[0].getElementsByClassName('back')[0]) {
        document.getElementsByClassName('container')[0].removeChild(document.getElementsByClassName('container')[0].getElementsByClassName('back')[0]);
      }
      document.getElementsByClassName('container')[0].getElementsByClassName('hint-text')[0].setAttribute('value',jsonData.hint);
      document.getElementsByClassName('container')[0].getElementsByClassName('question')[0].innerHTML = jsonData.qno + ') ' + jsonData.data.text;
      // Hide Loader Screen after 2s
      setTimeout(function(){document.getElementsByClassName('ques-loading')[0].style.display='none';},2000);
      // Reset Progress Bar
      placeboBarWidth = 0;
      document.getElementsByClassName('progress-bar')[0].style.width = 0;
      for (var i = 1; i < jsonData.qno; i++) {
        increasePlaceboProgress();
      }
    }
  };
  xhttp.send(JSON.stringify(data));
}

function submitPlaceboAns() {
  var answer;
  var answer = document.getElementById('placebo-ans').value;
  var data = {
    "pk": pk,
    "ans": answer,
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  console.log(csrf_token);
  console.log(data);
  // Display Loading Screen
  document.getElementsByClassName('ques-loading')[0].style.display='flex';
  var xhttp = new XMLHttpRequest();
  var url = '/ans_ques/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
      // Check if complete or not
      if (jsonData.complete == 1) {
        location.reload();
      } else {
        increasePlaceboProgress();
        getPlaceboQuestion();
      }
    }
  };
  xhttp.send(JSON.stringify(data));
}
function getPostQuestion() {
  var data = {
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  // Display Loading Screen
  document.getElementsByClassName('ques-loading')[0].style.display='flex';
  var xhttp = new XMLHttpRequest();
  var url = '/post_details/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
      num_ques_post = jsonData.totq;
      var pre_assess_form = document.getElementById('experiment');
      var temp = pre_assess_form.content.cloneNode(true);
      var container = document.getElementsByClassName('container')[0];
      var preAssess = document.getElementById('post-assessment');
      if (document.getElementsByClassName('container')[0].getElementsByClassName('questions')[0]) {
        document.getElementsByClassName('container')[0].removeChild(document.getElementsByClassName('container')[0].getElementsByClassName('questions')[0]);
        document.getElementsByClassName('container')[0].removeChild(document.getElementsByClassName('container')[0].getElementsByClassName('back')[0]);
      }
      container.appendChild(temp);
      document.getElementsByClassName('container')[0].getElementsByClassName('back')[0].setAttribute('onclick', 'goPostBack()');
      document.getElementById('exp_ques').innerHTML = jsonData.qno + ') ' + jsonData.data.text;
      document.getElementById('f-label').innerHTML = jsonData.data.choice1;
      document.getElementById('s-label').innerHTML = jsonData.data.choice2;
      document.getElementById('t-label').innerHTML = jsonData.data.choice3;
      document.getElementById('fo-label').innerHTML = jsonData.data.choice4;
      document.getElementById('fi-label').innerHTML = jsonData.data.choice5;
      document.getElementById('si-label').innerHTML = jsonData.data.choice6;
      document.getElementById('se-label').innerHTML = jsonData.data.choice7;
      document.getElementById('1-option').value = jsonData.data.choice1;
      document.getElementById('2-option').value = jsonData.data.choice2;
      document.getElementById('3-option').value = jsonData.data.choice3;
      document.getElementById('4-option').value = jsonData.data.choice4;
      document.getElementById('5-option').value = jsonData.data.choice5;
      document.getElementById('6-option').value = jsonData.data.choice6;
      document.getElementById('7-option').value = jsonData.data.choice7;
      if (jsonData.data.choice1 == 'wsr') {
        document.getElementById('1-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice2 == 'wsr') {
        document.getElementById('2-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice3 == 'wsr') {
        document.getElementById('3-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice4 == 'wsr') {
        document.getElementById('4-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice5 == 'wsr') {
        document.getElementById('5-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice6 == 'wsr') {
        document.getElementById('6-option').parentElement.style.display = 'none';
      }
      if (jsonData.data.choice7 == 'wsr') {
        document.getElementById('7-option').parentElement.style.display = 'none';
      }
      pk = jsonData.data.pk;
      // Hide Loader Screen after 2s
      setTimeout(function(){document.getElementsByClassName('ques-loading')[0].style.display='none';},2000);
      // Reset Progress Bar
      postBarWidth = 0;
      document.getElementsByClassName('progress-bar')[0].style.width = 0;
      for (var i = 1; i < jsonData.qno; i++) {
        increasePostProgress();
      }
      if (preAssess)
        container.removeChild(preAssess);
    }
  };
  xhttp.send(JSON.stringify(data)); 
}

function submitPostAns() {
  var answer;
  for(let i=1; i<=7; i++) {
    if(document.getElementById(i+'-option').checked) {
      answer = document.getElementById(i+'-option').value;
    }
  }
  var data = {
    "pk": pk,
    "ans": answer,
    "csrftoken": []
  };
  var csrf_token = getCookie('csrftoken');
  data["csrftoken"].push({
    "csrfmiddlewaretoken": csrf_token
  });
  console.log(csrf_token);
  console.log(data);
  // Display Loading Screen
  document.getElementsByClassName('ques-loading')[0].style.display='flex';
  var xhttp = new XMLHttpRequest();
  var url = '/ans_ques/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
      if (jsonData.next == 1) {
        // Close this category and lock it
        location.reload();
      } else {
        // setTimeout(function(){increasePostProgress();},2500);
        getPostQuestion();
      }
    }
  };
  xhttp.send(JSON.stringify(data));
}

function goBack() {
  // var container = document.getElementsByClassName('container')[0];
  // var preAssess = document.getElementById('pre-assessment-template');
  // if(container.contains(document.getElementsByClassName('questions')[0])) {
  //   container.removeChild(document.getElementsByClassName('questions')[0]);
  //   container.appendChild(preAssess.content.cloneNode(true));
  // } else if (container.contains(document.getElementsByClassName('center')[0])) {
  //   container.removeChild(document.getElementsByClassName('center')[0]);
  //   container.appendChild(preAssess.content.cloneNode(true));
  // }
  // if (container.getElementsByClassName('back')[0])
  //   container.removeChild(container.getElementsByClassName('back')[0]);
  // // Hide Loader Screen after 2s
  // setTimeout(function(){document.getElementsByClassName('ques-loading')[0].style.display='none';},2000);
  // document.getElementsByClassName('menu')[0].style.zIndex='1';
  location.reload();
}
function goExpBack() {
  // var container = document.getElementsByClassName('container')[0];
  // var preAssess = document.getElementById('experiment-assessment-template');
  // if(container.contains(document.getElementsByClassName('questions')[0])) {
  //   container.removeChild(document.getElementsByClassName('questions')[0]);
  //   container.appendChild(preAssess.content.cloneNode(true));
  // } else if (container.contains(document.getElementsByClassName('center')[0])) {
  //   container.removeChild(document.getElementsByClassName('center')[0]);
  //   container.appendChild(preAssess.content.cloneNode(true));
  // }
  // if (container.getElementsByClassName('back')[0])
  //   container.removeChild(container.getElementsByClassName('back')[0]);
  // // Hide Loader Screen after 2s
  // setTimeout(function(){document.getElementsByClassName('ques-loading')[0].style.display='none';},2000);
  // document.getElementsByClassName('menu')[0].style.zIndex='1';
  location.reload();
}
function goPostBack() {
  // var container = document.getElementsByClassName('container')[0];
  // var preAssess = document.getElementById('post-assessment-template');
  // if(container.contains(document.getElementsByClassName('questions')[0])) {
  //   container.removeChild(document.getElementsByClassName('questions')[0]);
  //   container.appendChild(preAssess.content.cloneNode(true));
  // } else if (container.contains(document.getElementsByClassName('center')[0])) {
  //   container.removeChild(document.getElementsByClassName('center')[0]);
  //   container.appendChild(preAssess.content.cloneNode(true));
  // }
  // if (container.getElementsByClassName('back')[0])
  //   container.removeChild(container.getElementsByClassName('back')[0]);
  // // Hide Loader Screen after 2s
  // setTimeout(function(){document.getElementsByClassName('ques-loading')[0].style.display='none';},2000);
  // document.getElementsByClassName('menu')[0].style.zIndex='1';
  location.reload();
}
var initialWidth;
var barWidth = 0;
var num_ques_pre;
function increaseProgress() {
  console.log("Increased Progress");
  var progress = document.getElementsByClassName('progress')[0];
  var progressBar = document.getElementsByClassName('progress-bar')[0];
  initialWidth = parseFloat(progress.clientWidth);
  console.log(initialWidth, barWidth);
  if(initialWidth > barWidth) {
    console.log(1);
    console.log(barWidth + (initialWidth*1.00/num_ques_pre) + 'px');
    progressBar.style.width = barWidth + (initialWidth*1.00/num_ques_pre) + 'px';
    barWidth = barWidth + (initialWidth*1.00/num_ques_pre);
  }
  else {
    console.log(2);
    progressBar.style.width = initialWidth + 'px';
    barWidth = initialWidth;
  }
}
var placeboBarWidth=0;
var num_ques_placebo;
function increasePlaceboProgress() {
  console.log("Increased Progress");
  var progress = document.getElementsByClassName('progress')[0];
  var progressBar = document.getElementsByClassName('progress-bar')[0];
  initialWidth = parseFloat(progress.clientWidth);
  console.log(initialWidth, placeboBarWidth);
  if(initialWidth > placeboBarWidth) {
    console.log(1);
    console.log(placeboBarWidth + (initialWidth*1.00/num_ques_placebo) + 'px');
    progressBar.style.width = placeboBarWidth + (initialWidth*1.00/num_ques_placebo) + 'px';
    placeboBarWidth = placeboBarWidth + (initialWidth*1.00/num_ques_placebo);
  }
  else {
    console.log(2);
    progressBar.style.width = initialWidth + 'px';
    placeboBarWidth = initialWidth;
  }
}
var expBarWidth = 0;
var num_ques_exp;
function increaseExpProgress() {
  console.log("Increased Progress");
  var progress = document.getElementsByClassName('progress')[0];
  var progressBar = document.getElementsByClassName('progress-bar')[0];
  initialWidth = parseFloat(progress.clientWidth);
  console.log(initialWidth, expBarWidth);
  if(initialWidth > expBarWidth) {
    console.log(1);
    console.log(expBarWidth + (initialWidth*1.00/num_ques_exp) + 'px');
    progressBar.style.width = expBarWidth + (initialWidth*1.00/num_ques_exp) + 'px';
    expBarWidth = expBarWidth + (initialWidth*1.00/num_ques_exp);
  }
  else {
    console.log(2);
    progressBar.style.width = initialWidth + 'px';
    expBarWidth = initialWidth;
  }
}
var postBarWidth = 0;
var num_ques_post;
function increaseExpProgress() {
  console.log("Increased Progress");
  var progress = document.getElementsByClassName('progress')[0];
  var progressBar = document.getElementsByClassName('progress-bar')[0];
  initialWidth = parseFloat(progress.clientWidth);
  console.log(initialWidth, postBarWidth);
  if(initialWidth > postBarWidth) {
    console.log(1);
    console.log(postBarWidth + (initialWidth*1.00/num_ques_post) + 'px');
    progressBar.style.width = postBarWidth + (initialWidth*1.00/num_ques_post) + 'px';
    postBarWidth = postBarWidth + (initialWidth*1.00/num_ques_post);
  }
  else {
    console.log(2);
    progressBar.style.width = initialWidth + 'px';
    postBarWidth = initialWidth;
  }
}
function Validate(data) {
  console.log('validating...');
  for(let field in data) {
    if(data[field] === "" || data[field] == null) {
      var temp = document.getElementById('validation-template');
      var modal = temp.content.cloneNode(true);
      if(document.getElementsByClassName('modal')[0]) {
        document.body.removeChild(document.getElementsByClassName('modal')[0]);
      }
      
      document.body.appendChild(modal);
      var bodyModal = document.getElementsByClassName('modal')[0];
      bodyModal.style.animation = 'toast 3s ease-in-out';
      return false;
    }
    else {
      continue;
    }
  }
  return true;
}
function displayOffline(week) {
  // Append The Respective Week to the offline-content div
  var offline_div = document.getElementsByClassName('offline-content')[0];
  var offline_template = document.getElementById('offline-content-'+week);
  // Clear previous template if any
  offline_div.innerHTML = '';
  offline_div.appendChild(offline_template.content.cloneNode(true));
  offline_div.style.display='flex';
}
// Animation Code
anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});
// Contact Section
function openContact() {
  document.getElementById('contact-us').style.display = 'block';
}
function closeContact() {
  document.getElementById('contact-us').style.display = 'none';
}
// Devs Section
function openDevs() {
  document.getElementById('devs').style.display = 'block';
}
function closeDevs() {
  document.getElementById('devs').style.display = 'none';
}
var animationOnterval = setInterval(function() {
  // Changes Position of Panda every 10s
  document.getElementById('panda').style.left = (Math.random() * 90) + 'vw';
}, 10000);

function logout() {
  // Logout Function
  window.location.href = '/logout_view/';
}

//Show info

function showInfo(num) {
  var infoElement = document.getElementById('info-'+num);
  infoElement.style.transform = 'translateX(0) translateY(0) scale(1)';
  document.getElementById('info-btn').style.display = 'none';
  document.getElementsByClassName('menu')[0].style.zIndex='-1';
}

//Close info

function closeInfo(num) {
  var infoElement = document.getElementById('info-'+num);
  infoElement.style.transform = 'translateX(100vw) translateY(-100vh) scale(0)';
  document.getElementById('info-btn').style.display = 'block';
  document.getElementsByClassName('menu')[0].style.zIndex='-1';
}