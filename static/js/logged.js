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
      if(jsonData.stage == 1) {
        var preAssess = document.getElementById('pre-assessment-template');
        var TnC = document.getElementById('termsAndConditions');
        var container = document.getElementsByClassName('container')[0];
        container.removeChild(TnC);
        container.appendChild(preAssess.content.cloneNode(true));
      }
      else if(jsonData.stage == 2) {
        var TnC = document.getElementById('termsAndConditions');
        var preAssess = document.getElementById('pre-assessment-template');
        var container = document.getElementsByClassName('container')[0];
        container.removeChild(TnC);
        container.appendChild(preAssess.content.cloneNode(true));
        document.getElementById('pre-assess-heading').innerHTML = 'Weekly Continuous Evaluation';
      }
      else if(jsonData.stage == 3) {
        var TnC = document.getElementById('termsAndConditions');
        var preAssess = document.getElementById('placebo');
        var container = document.getElementsByClassName('container')[0];
        container.removeChild(TnC);
        container.appendChild(preAssess.content.cloneNode(true));
        document.getElementById('pre-assess-heading').innerHTML = 'Weekly Continuous Evaluation';
      }
      else if(jsonData.stage == 4) {
        var TnC = document.getElementById('termsAndConditions');
        var control = document.getElementById('control');
        var container = document.getElementsByClassName('container')[0];
        container.removeChild(TnC);
        container.appendChild(control.content.cloneNode(true));
      }
      document.getElementsByClassName("loading")[0].style.transform = 'scale(0)';
      }
    };
  xhttp.send();   
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
    }
  };
  xhttp.send(data);
}

function goToLevel(category) {
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
    }
  };
  xhttp.send(JSON.stringify(data)); 
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
  var xhttp = new XMLHttpRequest();
  var url = '/prepos_details/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
      var pre_assess_form = document.getElementById('experiment');
      var temp = pre_assess_form.content.cloneNode(true);
      var container = document.getElementsByClassName('container')[0];
      var preAssess = document.getElementById('pre-assessment');
      container.appendChild(temp);
      document.getElementById('exp_ques').innerHTML = jsonData.data.text;
      document.getElementById('f-label').innerHTML = jsonData.data.choice1;
      document.getElementById('s-label').innerHTML = jsonData.data.choice2;
      document.getElementById('t-label').innerHTML = jsonData.data.choice3;
      document.getElementById('fo-label').innerHTML = jsonData.data.choice4;
      document.getElementById('1-option').value = jsonData.data.choice1;
      document.getElementById('2-option').value = jsonData.data.choice2;
      document.getElementById('3-option').value = jsonData.data.choice3;
      document.getElementById('4-option').value = jsonData.data.choice4;
      pk = jsonData.data.pk;
      container.removeChild(preAssess);
    }
  };
  xhttp.send(JSON.stringify(data)); 
}

function submitAns() {
  var answer;
  for(let i=1; i<=4; i++) {
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
  var xhttp = new XMLHttpRequest();
  var url = '/ans_ques/';
  xhttp.open('POST', url, true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.setRequestHeader("X-CSRFToken", csrf_token);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var jsonData = JSON.parse(xhttp.responseText);
      console.log(jsonData);
    }
  };
  xhttp.send(JSON.stringify(data));
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