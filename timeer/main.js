import timer from "./timer.js";
timer()


document.querySelector('.hours__block');
document.querySelector('.minutes__block');
const sec = document.querySelector('.seconds__block');
const btnStrat = document.querySelector('.start');
const btnStop = document.querySelector('.stop')


function counter(){
  const interval = setInterval(()=>{
    console.log(sec)
  }, 1000)
  // callback()
}
//
// const stop = ()=>{
//   return clearInterval(interval)
// }
btnStrat.addEventListener('click', e =>{
  counter();
})
btnStop.addEventListener('click', e =>{
  counter(stop)
})
