// Hide Loader after page is loaded

window.onload = function() { 
                    document.getElementsByClassName("loading")[0].style.transform = 'scale(0)'; 
                }   

//Show info

function showInfo() {
    var infoElement = document.getElementById('info');
    infoElement.style.transform = 'translateX(0) translateY(0) scale(1)';
}

//Close info

function closeInfo() {
    var infoElement = document.getElementById('info');
    infoElement.style.transform = 'translateX(100vw) translateY(-100vh) scale(0)';
}

// Google Sign In User Info

var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      auth2 = gapi.auth2.init({
        client_id: '1026579868783-n3jasec6f2i7s1d9a6pj3c0tic4hjmr2.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      attachSignin(document.getElementById('proceed-btn'));
    });
  };

  function attachSignin(element) {
    console.log(element.id);
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          console.log("Signed in: " + googleUser.getBasicProfile().getName());
        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }