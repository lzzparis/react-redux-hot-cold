var React = require("react");
var connect = require("react-redux").connect;

var Feedback = function(props){

  return (
    <div>
      <h2 id="feedback">{props.text}</h2>
    </div>
  )
}

var mapStateToProps = function(state, props){
  return {
    text: state.feedback
  }
};

var FeedbackContainer = connect(mapStateToProps)(Feedback);

module.exports = FeedbackContainer;
