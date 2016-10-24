var React = require("react");

var GuessCounter = function(props){
  return(
    <p>Guess #{props.count}!</p>
  );
};

module.exports = GuessCounter;
