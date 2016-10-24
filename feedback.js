var React = require("react");

var Feedback = function(props){
  return (
    <div>
      <h2 id="feedback">{props.text}</h2>
    </div>
  )
}

module.exports = Feedback;
