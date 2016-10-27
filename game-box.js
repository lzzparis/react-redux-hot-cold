var React = require("react");

var Feedback = require("./feedback");
var GuessFormContainer = require("./guess-form");
var GuessCounterContainer = require("./guess-counter");

var GameBox = function(){
  var feedbackText = "Make your Guess!";
  //var count = 0;
  return (
    <div className="game">
      <Feedback text={feedbackText} />
      <GuessFormContainer />
      <GuessCounterContainer />
    </div>
  );
};

module.exports = GameBox;
