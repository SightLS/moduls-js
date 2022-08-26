
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

}



export default timer;




