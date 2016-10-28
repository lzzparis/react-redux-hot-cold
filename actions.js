
//guess number
var GUESS_NUMBER = "GUESS_NUMBER";
var guessNumber = function(guess){
  return{
    type: GUESS_NUMBER,
    guess: guess 
  }
}

//calc feedback
var CALC_FEEDBACK = "CALC_FEEDBACK";
var calcFeedback = function(){
  return{
    type: CALC_FEEDBACK,
  }
}

var RESET_GAME = "RESET_GAME";
var resetGame = function(){
  return{
    type: RESET_GAME
  }
}


exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.CALC_FEEDBACK = CALC_FEEDBACK;
exports.calcFeedback = calcFeedback;
exports.RESET_GAME = RESET_GAME;
exports.resetGame = resetGame;

