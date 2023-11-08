
export default class View {
   constructor() {      
      this.elementHintOdd = document.querySelector('.hint-odd');
      this.elementHintMore = document.querySelector('.hint-more');
      this.elementAttemptsCount = document.querySelector('.attempts-count');
      this.elementErrorRange = document.querySelector('.error');
      this.elementDescription = document.querySelector('.description');
      this.elementResponse = document.querySelector('.response');
      this.elementButtonSubmit = document.querySelector('.btn-submit');
      this.elementInputNumber = document.querySelector('.input-number');
   }
  
   renderUpdate(res) {
      if (res.checkGuessNumber) {
         this.elementResponse.textContent = 'Верно! Вы угадали!';
         this.elementButtonSubmit.disabled = true;
         this.elementResponse.classList.remove('false');
         this.elementResponse.classList.add('true');
         this.elementErrorRange.textContent='Начните игру заново!'
      }
      else {
         this.elementResponse.textContent = 'Неверно! Попробуйте еще раз.'
         this.elementResponse.classList.remove('true');
         this.elementResponse.classList.add('false');  
         if (res.isMore) {
            this.elementHintMore.textContent='Подсказка: Загаданное число меньше введенного.'
         }
         else {
            this.elementHintMore.textContent = 'Подсказка: Загаданное число больше введенного.'
         }
         
      }
      this.elementAttemptsCount.textContent = res.attempts;
   }


   renderReset(minValue=1,maxValue=100) {
      this.minValue = minValue;
      this.maxValue = maxValue;
      this.elementInputNumber.value = '';
      this.elementButtonSubmit.disabled = false;
      this.elementDescription.textContent =`Угадай число, загаданное компьютером! Число находится в
                диапазоне от ${this.minValue} до ${this.maxValue}.`
      this.elementErrorRange.textContent = '';
      this.elementAttemptsCount.textContent = '0';
      this.elementHintMore.classList.add('display-none');
      this.elementHintOdd.classList.add('display-none');
      this.elementResponse.textContent = '';
      this.elementResponse.classList.remove('true');
      this.elementResponse.classList.remove('false');
   }

}