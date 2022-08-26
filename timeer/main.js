import timer from "./timer.js";
timer()


document.querySelector('.hours__block');
document.querySelector('.minutes__block');
const sec = document.querySelector('.seconds__block');
const btnStrat = document.querySelector('.start');
const btnStop = document.querySelector('.stop')

let test = 60
function counter(){
  const interval = setInterval(()=>{
    test = --test;
    console.log(test)
  }, 500)
  btnStop.addEventListener('click', e =>{
    clearInterval(interval)
    console.log(test)
  })

}
btnStrat.addEventListener('click', e =>{
  counter();
})
