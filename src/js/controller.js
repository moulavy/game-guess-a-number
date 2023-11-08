export default class Controller{
   constructor(game,view) {
       this.game = game;
       this.view = view;
      this.elementInputUserNumber = document.querySelector('.input-number');
      this.btnSubmit = document.querySelector('.btn-submit'); 

      this.btnSubmit.addEventListener('click',this.handleClickSubmit.bind(this));
   }
   handleClickSubmit(event) {
      event.preventDefault();
      this.valueUserNumber = parseInt(this.elementInputUserNumber.value);
      this.view.rezult(this.game.checkGuessNumber(this.valueUserNumber));
   }
   
}