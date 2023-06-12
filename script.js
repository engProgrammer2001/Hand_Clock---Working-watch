
let hr = document.getElementById('hour');
let mn = document.getElementById('min');
let sc = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    // Getting hour, min, secs form date
    let hh = date.getHours();
    let mn = date.getMinutes();
    let sc = date.getSeconds();

    let hRotation = 30*hh + mn/2;
    let mRotation = 6*mn;
    let sRotation = 6*sc;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;

}
setInterval(displayTime, 1000);