
let sechand = document.querySelector('#second');

function clock(){
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hrs = time.getHours();


    
    let minhand = document.getElementById('minute');
    let hrhand = document.getElementById('hour');


    let secFormula = ((sec/60)* 360);
    let minFormula= (min/60)* 360;
    let hrFormula = (hrs/12)* 360 + (min/60)* 30;
    console.log(sec)


    sechand.style.transform = `rotate(${secFormula}deg)`
    minhand.style.transform = `rotate(${minFormula}deg)`
    hrhand.style.transform = `rotate(${hrFormula}deg)`


}
setInterval(clock, 1000);
clock()

