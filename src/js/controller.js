export default class Controller{
   constructor(game,view) {
       this.game = game;
       this.view = view;
      this.elementInputUserNumber = document.querySelector('.input-number');
      this.elementMinValue = document.querySelector('.input-min');
      this.elementMaxValue = document.querySelector('.input-max');

      this.btnSubmit = document.querySelector('.btn-submit'); 
      this.btnRange = document.querySelector('.btn-change');

      this.btnSubmit.addEventListener('click', this.handleClickSubmit.bind(this));
      this.btnRange.addEventListener('click', this.handleClickRange.bind(this));
      this.view.renderReset();
   }
   handleClickSubmit(event) {
      event.preventDefault();
      this.valueUserNumber = parseInt(this.elementInputUserNumber.value);
      this.view.renderRezult(this.game.checkGuessNumber(this.valueUserNumber));
   }
   handleClickRange(event) {
      event.preventDefault();
      this.minValue = parseInt(this.elementMinValue.value);
      this.maxValue = parseInt(this.elementMaxValue.value);
      this.game.reset(this.minValue, this.maxValue);
      this.view.renderReset(this.minValue, this.maxValue);
      console.log(this.game);
   }
   
}