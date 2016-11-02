var React = require("react");
var router = require('react-router');
var Link = router.Link;
var connect = require("react-redux").connect;

var actions = require("./actions");

var GameNav = React.createClass({
  newGame: function(){
    this.props.dispatch(actions.resetGame());
    console.log(this.props.number);
    this.props.dispatch(actions.fetchRecord());
  },
  render: function(){
    return(
      <nav>
        <ul className="clearfix">
          <li><Link to="/help">What ?</Link></li>
          <li><a className="new" href="#" onClick={this.newGame}>+ New Game</a></li>
		    </ul>
      </nav>
    );
  }
});

var mapStateToProps = function(state, props){
  return {
    number: state.number
  }
}

var GameNavContainer = connect(mapStateToProps)(GameNav);

module.exports = GameNavContainer;
