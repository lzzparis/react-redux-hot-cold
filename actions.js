//generate number
var GEN_NUMBER = "GEN_NUMBER";
var genNumber = function(number){
  return {
    type: GEN_NUMBER,
    number: number
  }
}

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



exports.GEN_NUMBER = GEN_NUMBER;
exports.genNumber = genNumber;
exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.CALC_FEEDBACK = CALC_FEEDBACK;
exports.calcFeedback = calcFeedback;

