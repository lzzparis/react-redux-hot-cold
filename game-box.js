var React = require("react");

var FeedbackContainer = require("./feedback");
var GuessFormContainer = require("./guess-form");
var GuessCounterContainer = require("./guess-counter");
var GuessListContainer = require("./guess-list");
var GuessRecordContainer = require("./guess-record");

var GameBox = function(){
  return (
    <div className="game">
      <FeedbackContainer />
      <GuessFormContainer />
      <GuessCounterContainer />
      <GuessListContainer />
      <GuessRecordContainer />
    </div>
  );
};

module.exports = GameBox;
