var React = require("react");
var connect = require("react-redux").connect;


var GuessList = function(props){
  var list = [];
  for(var i=0 ; i < props.guesses.length; i++){
    list.push(<li>{props.guesses[i]}</li>);
  }
  return(
    <ul id="guessList" className="guessBox clearfix">{list}</ul>
  );
};

var mapStateToProps = function(state, props){
  return{
    guesses: state.guesses
  }
}

var GuessListContainer = connect(mapStateToProps)(GuessList);

module.exports = GuessListContainer;