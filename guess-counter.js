var React = require("react");
var connect = require("react-redux").connect;

var GuessCounter = function(props){
  return(
    <p>Guess #{props.count}!</p>
  );
};

var mapStateToProps = function(state, props){
  return {
    count: state.guesses.length
  }
}

var GuessCounterContainer = connect(mapStateToProps)(GuessCounter);

module.exports = GuessCounterContainer;
