var React = require("react");
var connect = require("react-redux").connect;

var GuessRecord = function(props){
  return(
    <p>Current record: {props.record}</p>
  );
};

var mapStateToProps = function(state, props){
  return {
    record: state.fewestGuesses
  };
};

var GuessRecordContainer = connect(mapStateToProps)(GuessRecord);

module.exports = GuessRecordContainer;