/******* API Functions  - Use of API from covid19 Website ******/


function _confirmedFunction(){

fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(newCase => alert("The  number of New Confirmed Cases:" + "\n" + newCase.Global.NewConfirmed));
    
}


function _newRecoveredFunction(){

fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(newCase1 => alert("The number of New Recovered Cases:" + "\n" + newCase1.Global.NewRecovered));
    
}



function _totalRecoveredFunction(){

fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(newCase2 => alert("The number of Total Recovered Cases:" + "\n" + newCase2.Global.TotalRecovered));
    
}



function _deathsFunction(){

fetch('https://api.covid19api.com/summary')
  .then(response => response.json())
  .then(newCase3 => alert("The number of Total Death Cases:" + "\n" + newCase3.Global.TotalDeaths));
    
}







/********* Expand Javascript ***********/

let _expand=document.getElementById('expand');

function toggleExpand(){
  
  if (_expand.getAttribute('class')=='open'){           //Get and Set Attributes
     _expand.setAttribute('class',"");
  }
  else
     _expand.setAttribute('class','open');
}

_expand.onclick = toggleExpand;                        // Use of event listener method

    

