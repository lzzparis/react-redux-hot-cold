var React = require("react");
var ReactDOM = require("react-dom"); 

//var Modal = require("./modal");
var GameNav = require("./game-nav");
var GameHeader = require("./game-header");
var GameBox = require("./game-box");

var Game = React.createClass({

  render: function(){
    return (
      <div>
        <GameNav /> 
        <GameHeader title="HOT OR COLD"/>
        <GameBox /> 
      </div>
    );
  }
});


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Game />, document.getElementById("app"));
});
