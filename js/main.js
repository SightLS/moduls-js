// import { DateTime } from './luxon.js'
import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import timer from "./timer.js";

const form = document.getElementById("datecalc")


form.onsubmit = (event) => {
  event.preventDefault();
  // console.log('form', event.target)
  const formData = new FormData(event.target)

  const firstDate = formData.get('firstDate')
  const secondDate = formData.get('secondDate')

  if (!firstDate || !secondDate) {
    printError('Oooppppss -> put date')
  } else {
    const dateDiff = getDateDiff(firstDate, secondDate)

    printResult(dateDiff)
  }
}
timer()
const openCalcBtn = document.querySelector('.calc-open');
const openTimerBtn = document.querySelector('.timer-open');

openTimerBtn.addEventListener('click', e=>{
  let timerMenu = document.querySelector('.timer');
  timerMenu.style.display = 'inline';
  let calcMenu = document.querySelector('form');
  calcMenu.style.display = 'none';


})
openCalcBtn.addEventListener('click', e=>{
  let timerMenu = document.querySelector('.timer');
  timerMenu.style.display = 'none';
  let calcMenu = document.querySelector('form');
  calcMenu.style.display = 'inline';

})