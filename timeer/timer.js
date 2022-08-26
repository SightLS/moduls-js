
function timer(){
  class Timer{
    constructor(timer, time, maxTime){
      this.timer = timer;
      this.time = time;
      this.maxTime = maxTime;
    }
    render(){
      const kek =  `
         <div class="${this.time}">
            <p class="${this.time}__block">${this.timer}</p>
            <button class="${this.time}__up up">up</button>
            <button class="${this.time}__down down">down</button>
        </div>
    `
      document.querySelector('.timer').insertAdjacentHTML('beforeend', kek);
    }
    clickUp(){
      const btnUp = document.querySelector(`.${this.time}__up`);
      const btnDown = document.querySelector(`.${this.time}__down`)

      btnUp.addEventListener('click', (e) =>{

        if(this.timer < this.maxTime){
          this.timer = this.timer + 1
          document.querySelector(`.${this.time}__block`).innerText = this.timer
        }


      })
      btnDown.addEventListener('click', (e) =>{
        if(this.timer > 0){
          this.timer = this.timer - 1
          document.querySelector(`.${this.time}__block`).innerText = this.timer
        }

      })
    }
  }




  const hours = new Timer(0, 'hours', 24)
  const minutes = new Timer(0, 'minutes', 60)
  const seconds = new Timer(0, 'seconds', 60)



  hours.render();
  minutes.render();
  seconds.render();
  hours.clickUp();
  minutes.clickUp();
  seconds.clickUp();

  const btnStart = '<button class="start">старт!</button>'
  const btnstop = '<button class="stop">stop!</button>'

  document.querySelector('.timer').insertAdjacentHTML('beforeend', btnStart);
  document.querySelector('.timer').insertAdjacentHTML('beforeend', btnstop);





  const btnStrat = document.querySelector('.start');
  const btnStop = document.querySelector('.stop')


  function counter(){
    const interval = setInterval(()=>{
      console.log(hours.timer);
      seconds.timer = --seconds.timer
      document.querySelector('.seconds__block').innerHTML = seconds.timer

      if(seconds.timer === 0 && minutes.timer ===0 && hours.timer === 0){
        clearInterval(interval)
      }
      if(minutes.timer > 0 && seconds.timer === 0){
        minutes.timer = --minutes.timer;
        seconds.timer = 60
        document.querySelector('.minutes__block').innerHTML = minutes.timer
      }
      if(hours.timer > 0 && minutes.timer === 0){
        minutes.timer = 60
        hours.timer = --hours.timer;

        seconds.timer = 60
        document.querySelector('.hours__block').innerHTML = hours.timer
      }
    }, 2)
    btnStop.addEventListener('click', e =>{
      clearInterval(interval)
    })

  }
  btnStrat.addEventListener('click', e =>{
    // btnStrat.setAttribute("disabled", "disabled")
    counter();
  })

}



export default timer;




