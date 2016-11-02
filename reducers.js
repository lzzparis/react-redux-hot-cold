var actions = require("./actions");

var initialState = {
  number:  Math.ceil(Math.random()*100),
  guesses: [],
  feedback: "Make your guess!",  
  numGuesses: 0,
  fewestGuesses: "∞",
  gameWon: false 

};

var gameReducer = function(state, action){
  state = state || initialState;
  if (action.type === actions.GUESS_NUMBER){
    var newGuesses = state.guesses;
    newGuesses.push(action.guess);
    return Object.assign({}, state, {guesses: newGuesses}, {numGuesses: newGuesses.length});
  }
  else if (action.type === actions.CALC_FEEDBACK){
    var lastGuessIndex = state.guesses.length - 1;
    if(lastGuessIndex == -1){
      throw error;
    }
    else{
      var lastGuess = state.guesses[lastGuessIndex];
      var delta = Math.abs(lastGuess - state.number);
      var feedbackText = null;
      var gameWon = false;
     	if (delta == 0 ){
    		feedbackText = "hooray you won!!";
        gameWon = true;
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
      return Object.assign({}, state, {feedback: feedbackText}, {gameWon: gameWon});
    }
  }
  else if (action.type === actions.RESET_GAME){
    var randomNumber = Math.ceil(Math.random()*100);
    return Object.assign({},initialState, {guesses:[]}, {number: randomNumber});
  }
  else if (action.type === actions.FETCH_FEWEST_GUESSES){
    var record = action.record;
    return Object.assign({}, state, {fewestGuesses: action.record});
  }
  else if (action.type === actions.SAVE_FEWEST_GUESSES){
    alert(action.feedback); 
    return Object.assign({}, state, {fewestGuesses: action.record});
  }
  return state;
}

exports.gameReducer = gameReducer;
