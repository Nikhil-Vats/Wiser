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
  
// Colour animation of hexagons 
setInterval(() => {
  var hexagons = document.getElementsByClassName('hexagon');
  for(let hex of hexagons) {
    hex.style.backgroundColor = 'black';
  }
  hexagons[Math.floor(Math.random()*9)].style.backgroundColor = '#211D70';
  hexagons[Math.floor(Math.random()*9)].style.backgroundColor = '#211D70';
  hexagons[Math.floor(Math.random()*9)].style.backgroundColor = '#211D70';
}, 3000);


