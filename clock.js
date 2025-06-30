/** @type {HTMLInputElement} */
let hours = document.querySelector('.hours')
/** @type {HTMLInputElement} */
let mins = document.querySelector('.mins')
/** @type {HTMLInputElement} */
let seconds = document.querySelector('.seconds')
/** @type {HTMLInputElement} */
let ampm = document.querySelector('.ampm');


function pad(num){
    return num.toString().padStart(2,'0');
}


setInterval(()=>{
    let time = new Date();
    let hrs = time.getHours();
    hrs = hrs % 12;
    if(hrs === 0) hrs = 12;
    let am_pm = hrs>=12?"AM":"PM";
    hours.innerText= pad(hrs);
    mins.innerText = pad(time.getMinutes());
    seconds.innerText = pad(time.getSeconds());
    ampm.innerText = am_pm;

},1000)