var fetch = require("isomorphic-fetch");

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

var FETCH_FEWEST_GUESSES = "FETCH_FEWEST_GUESSES";
var fetchFewestGuesses = function(record){
  return{
    type: FETCH_FEWEST_GUESSES,
    record: record
  }
}

var SAVE_FEWEST_GUESSES = "SAVE_FEWEST_GUESSES";
var saveFewestGuesses = function(record, feedback){
  return{
    type: SAVE_FEWEST_GUESSES,
    record: record,
    feedback: feedback
  }
}

var fetchRecord = function(){
  return function(dispatch){
    var url = "http://localhost:8080/fewest-guesses";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    return fetch(url, {method:"GET", headers:headers})
    //check status code
    .then(function(response){
      if(response.status < 200 || response >= 300){
        throw error;
      }
      return response;
    })
    //parse data
    .then(function(response){
      return response.json();
    })
    //handle success
    .then(function(data){
      var record = data.record;
      return dispatch(fetchFewestGuesses(record));
    })
    //handle error
    .catch(function(){
      console.error("I don't know how you could have screwed this up but you did");
    });
  };
};

var saveRecord = function(attempt){
  return function(dispatch){
    var url = "http://localhost:8080/fewest-guesses";
    var headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    var data = JSON.stringify( {attempt: attempt} ) ;

    return fetch(url, {method: "POST", headers: headers, body: data, mode: 'cors' })
    //check status code
    .then(function(response){
      if(response.status < 200 || response >= 300){
        throw error;
      }
      return response;
    })
    //parse data
    .then(function(response){
      return response.json();
    })
    //handle success
    .then(function(data){
      var record = data.record;
      var feedback = data.feedback;
      return dispatch(saveFewestGuesses(record, feedback));
    })
    //handle error
    .catch(function(){
      console.error("I don't know how you could have screwed this up but you did");
    });
  };
};

exports.GUESS_NUMBER = GUESS_NUMBER;
exports.guessNumber = guessNumber;
exports.CALC_FEEDBACK = CALC_FEEDBACK;
exports.calcFeedback = calcFeedback;
exports.RESET_GAME = RESET_GAME;
exports.resetGame = resetGame;

exports.FETCH_FEWEST_GUESSES = FETCH_FEWEST_GUESSES;
exports.fetchFewestGuesses = fetchFewestGuesses;
exports.fetchRecord = fetchRecord;
exports.SAVE_FEWEST_GUESSES = SAVE_FEWEST_GUESSES;
exports.saveFewestGuesses = saveFewestGuesses;
exports.saveRecord = saveRecord;