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