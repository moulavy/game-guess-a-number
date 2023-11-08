
export default class View {
   constructor() {
      this.elementMinValue = document.querySelector('.imput-min');
      this.elementMaxValue = document.querySelector('.imput-max');
      this.elementHintOdd = document.querySelector('.hint-odd');
      this.elementHintMore = document.querySelector('.hint-more');
      this.elementAttemptsCount = document.querySelector('.attempts-count');
      this.elementErrorRange = document.querySelector('.error');
      this.elementDescription = document.querySelector('.description');
      this.elementResponse = document.querySelector('.response');
   }
   reset(minValue = 1, maxValue = 100) {
      this.minValue = minValue;
      this.maxValue = maxValue;
   }
   rezult(res) {
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

}