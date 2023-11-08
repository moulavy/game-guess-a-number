
export default class View {
   constructor() {      
      this.elementHintOdd = document.querySelector('.hint-odd');
      this.elementHintMore = document.querySelector('.hint-more');
      this.elementAttemptsCount = document.querySelector('.attempts-count');
      this.elementErrorRange = document.querySelector('.error');
      this.elementDescription = document.querySelector('.description');
      this.elementResponse = document.querySelector('.response');
   }
  
   renderRezult(res) {
      if (res) {
         this.elementResponse.textContent = 'Верно! Вы угадали!';
         this.elementResponse.classList.remove('false');
         this.elementResponse.classList.add('true');
      }
      else {
         this.elementResponse.textContent = 'Неверно! Попробуйте еще раз.'
         this.elementResponse.classList.remove('true');
         this.elementResponse.classList.add('false');
       
      }
   }

   renderUpdate() {
      
   }

   renderReset(minValue=1,maxValue=100) {
      this.minValue = minValue;
      this.maxValue = maxValue;
      this.elementDescription.textContent =`Угадай число, загаданное компьютером! Число находится в
                диапазоне от ${this.minValue} до ${this.maxValue}.`
      this.elementErrorRange.classList.add('.display-hide');
      this.elementErrorRange.classList.add('display-none');
      this.elementAttemptsCount.textContent = '0';
      this.elementHintMore.classList.add('display-none');
      this.elementHintOdd.classList.add('display-none');
   }

}