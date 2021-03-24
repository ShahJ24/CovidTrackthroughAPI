/***** Accordian - Use of Jquery UI*******/


var acc = document.getElementsByClassName("accordion");         //Used getElementByClassName()
var j;

for (j = 0; j < acc.length; j++) {                              //Use of for Loop
  acc[j].addEventListener("click", function() {                 // Use of addEventListener() Method
    this.classList.toggle("active");                            // Use of 'this' Keyword
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {                      // Use of if else loop
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

_newElement.onclick = newElement;                               // Added on click event




function myUpdateFunction() {                                   // A custom Function
    
var day;                                                        // Use of Switch Case
switch (new Date().getDay()) {                                  // Created a Date Object 
        
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
    break;
    default:
        day = "Unkonwn Day";
        break;
}
document.getElementById("flashUpdate").innerHTML = "Total Confirmed Cases till " + day ;  // Use of innerHTML Property
    
}