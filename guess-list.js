var React = require("react");
var connect = require("react-redux").connect;


var GuessList = function(props){

  var list = [];
  for(var i=0 ; i < props.guesses.length; i++){
    list.push(<li key={i}>{props.guesses[i]}</li>);
  }
  return(
    <div>
    <p style={{display:"none"}}>{props.feedback}</p>
    <ul id="guessList" className="guessBox clearfix">{list}</ul>
    </div>
  );
};

var mapStateToProps = function(state, props){
  return{
    feedback:state.feedback,
    guesses: state.guesses
  }
}

var GuessListContainer = connect(mapStateToProps)(GuessList);

module.exports = GuessListContainer;