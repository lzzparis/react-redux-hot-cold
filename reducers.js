var actions = require("./actions");

var initialState = {
  number: -1,
  //guesses: [],
  guesses: -1,
  feedback: null,  
  outcome: null,
};

var gameReducer = function(state, action){
  state = state || initialState;
  if (action.type === actions.GEN_NUMBER){
    var randomNumber = Math.ceil(Math.random()*100);
    return Object.assign({}, state, {number: randomNumber});
  } 
  else if (action.type === actions.GUESS_NUMBER){
//    var newGuesses = state.guesses.concat(actions.guess);
//    return Object.assign({}, state, {guesses: newGuesses});
    return Object.assign({}, state, {guesses: action.guess});

  }
  else if (action.type === actions.CALC_FEEDBACK){
    var lastGuessIndex = state.guesses.length - 1;
    if(lastGuessIndex == -1){
      throw error;
    }
    else{
      var lastGuess = state.guesses[lastGuessIndex];
      //var delta = Math.abs(lastGuess - state.number);
      var delta = Math.abs(state.guesses - state.number);
      console.log(delta);
      var feedbackText = null;
     	if (delta == 0 ){
    		feedbackText = "hooray you won!!";
    	}
    	else if (delta <= 10){
    		feedbackText = "boiling hot!";
    	}
    	else if (delta <= 20) {
    		feedbackText = "hot";
    	}
    	else if (delta <= 30) {
    		feedbackText = "warm";
    	}
    	else if(delta <= 50){
    		feedbackText = "cold";
    	}
    	else {
    		feedbackText = "freezing cold";
    	}
      return Object.assign({}, state, {feedback: feedbackText});
    }
  }
  return state;
}

exports.gameReducer = gameReducer;
