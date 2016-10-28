var React = require("react");
var ReactDOM = require("react-dom"); 
var ReactRouter = require("react-router");
var Provider = require("react-redux").Provider;

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var Link = router.Link;


var Modal = require("./modal");
var GameNav = require("./game-nav");
var GameHeader = require("./game-header");
var GameBox = require("./game-box");
var store = require("./store");

var Game = React.createClass({
  render: function(){
    return (
      <div>
        <GameNav /> 
        <GameHeader title="HOT OR COLD"/>
        <GameBox /> 
        {this.props.children}
      </div>
    );
  }
});

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Game}>
      <Route path="/help" component={Modal}/>
    </Route>
  </Router>
);


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <Provider store={store}>
    {routes}
    </Provider>
    , document.getElementById("app"));
});
