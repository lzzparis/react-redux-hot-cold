var React = require("react");
var router = require('react-router');
var Link = router.Link;

var GameNav = function(props){
 return(
   <nav>
  	<ul className="clearfix">
			<li><Link to="/help">What ?</Link></li>
			<li><a className="new" href="#">+ New Game</a></li>
		</ul>
  </nav>
  );
};

module.exports = GameNav;
