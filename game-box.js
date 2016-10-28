var React = require("react");

var FeedbackContainer = require("./feedback");
var GuessFormContainer = require("./guess-form");
var GuessCounterContainer = require("./guess-counter");
var GuessListContainer = require("./guess-list");

var GameBox = function(){
  return (
    <div className="game">
      <FeedbackContainer />
      <GuessFormContainer />
      <GuessCounterContainer />
      <GuessListContainer />
    </div>
  );
};

module.exports = GameBox;
