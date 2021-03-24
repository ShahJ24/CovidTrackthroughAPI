/******************   Model1  ******************/


var _modal1 = document.getElementById("myClinicalModal");

// Get the button that opens the modal
var _btn1 = document.getElementById("myClinicalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal 
_btn1.onclick = function() {
  _modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  _modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == _modal1) {
    _modal1.style.display = "none";
  }
}


/******************   Model2  ******************/


var _modal2 = document.getElementById("myInfectionModal");

// Get the button that opens the modal
var _btn2 = document.getElementById("myInfectionBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
_btn2.onclick = function() {
  _modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  _modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == _modal2) {
    _modal2.style.display = "none";
  }
}


/******************   Model3  ******************/


var _modal3 = document.getElementById("myChildcareModal");

// Get the button that opens the modal
var _btn3 = document.getElementById("myChildcareBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
_btn3.onclick = function() {
  _modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  _modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == _modal3) {
    _modal3.style.display = "none";
  }
}

/******************   Model4  ******************/


var _modal4 = document.getElementById("myPPEModal");

// Get the button that opens the modal
var _btn4 = document.getElementById("myPPEBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
_btn4.onclick = function() {
  _modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  _modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == _modal4) {
    _modal4.style.display = "none";
  }
}







/******* Api using XMLHTTP Request**********/

const app = document.getElementById('root')

const containerp = document.createElement('div')
containerp.setAttribute('class', 'containerp')
 
app.appendChild(containerp)                           // Append Child

var request = new XMLHttpRequest()                    // Created XMLHTTPRequest Object
request.open('GET', 'https://api.covid19api.com/summary', true)
request.onload = function() {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)                 // Use of XMLHTTPRequest Object to get XML/ Json data
  
  console.log(data.Global.TotalConfirmed);

      const card = document.createElement('div')          // Create Element
      card.setAttribute('class', 'card')            

      const h1 = document.createElement('h1')
      h1.textContent = data.Global.TotalConfirmed
        
      containerp.appendChild(card)
      card.appendChild(h1)
    
}

request.send()



