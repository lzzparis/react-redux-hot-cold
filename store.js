var redux = require("redux");
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require("redux-thunk").default;


var reducers = require("./reducers");
var actions = require("./actions");



var store = createStore (reducers.gameReducer, applyMiddleware(thunk));


module.exports = store;

