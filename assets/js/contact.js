// Clock JS
var _clock = document.getElementById('clock');
var _hours = document.getElementById('hours');
var _minutes = document.getElementById('minutes');
var _seconds = document.getElementById('seconds');
var _ampm = document.getElementById('ampm');

function updateClock() {
    let now = new Date(); // CREATE A DATE OBJECT 
    let hours = now.getHours(); // USE A BUILT-IN METHOD FOR THE DATE OBJECT 
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM";
    if (hours > 12) {
        hours -= 12;
        ampm = "PM";
    }
    _hours.innerHTML = padDigit(hours);
    _minutes.innerHTML = padDigit(minutes);
    _seconds.innerHTML = padDigit(seconds);
    _ampm.innerHTML = ampm;

}

function padDigit(digit) {
    if (digit < 10) {
        return ("0" + digit);
    } else {
        return digit;
    }
}

updateClock();
setInterval(updateClock, 1000);