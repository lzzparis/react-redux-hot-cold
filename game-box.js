var React = require("react");

var Feedback = require("./feedback");
var GuessForm = require("./guess-form");
var GuessCounter = require("./guess-counter");

var GameBox = function(){
  var feedbackText = "Make your Guess!";
  var count = 0;
  return (
    <div className="game">
      <Feedback text={feedbackText} />
      <GuessForm />
      <GuessCounter count={count} />
    </div>
  );
};

module.exports = GameBox;
