export default class Game {
   constructor(minValue, maxValue) {
      this.reset(minValue, maxValue);
   }

   reset(minValue, maxValue) {
      this.minValue = minValue;
      this.maxValue = maxValue;
      this.randomNumber = this.getRandomNumber();
      this.attempts = 0;
      this.isEven = this.getIsEven();
   }

   getRandomNumber() {
      return Math.floor(Math.random() * (this.maxValue - this.minValue + 1)) + this.minValue;
   }

   checkGuessNumber(userNumber) {
      this.userNumber = userNumber;
      if (this.userNumber === this.randomNumber) {
         return true;
      }
      else {
         this.attempts++;
         this.isMore = this.userNumber > this.randomNumber;
         return false;
      }
   }

   getIsEven() {
      return this.randomNumber % 2 === 0;
   }

   getState() {
      return {
         randomNumber: this.randomNumber,
         attempts: this.attempts,
         isEven: this.isEven,
         isMore: this.isMore,
         checkGuessNumber: this.checkGuessNumber(this.userNumber)
      }
   }

}