var React = require("react");
var connect = require("react-redux").connect;

var actions = require("./actions");

var GuessForm = React.createClass({
  getInitialState: function(){
    return{
      inputValue: ""
    }
  },
  componentDidMount: function(){
    this.props.dispatch(actions.fetchRecord());
  },
  componentWillReceiveProps:function(nextProps){
    if(nextProps.gameWon){
      this.props.dispatch(actions.saveRecord(nextProps.numGuesses));
    }
  },
  updateInput:function(event){
    this.setState({inputValue:event.target.value})
  },
  resetInput:function(){
    this.setState({inputValue:""});
  },
  submitGuess: function(event){
    event.preventDefault();
    this.props.dispatch(actions.guessNumber(this.refs.guess.value));
    var result = this.props.dispatch(actions.calcFeedback());
    this.resetInput();
  },
  render: function(){
    return (
      <form>
				<input type="text" ref="guess" id="userGuess" className="text" placeholder="Enter your Guess" 
          onChange={this.updateInput} value={this.state.inputValue} required/>
      	<input type="submit" id="guessButton" className="button" name="submit" value="Guess" onClick={this.submitGuess}/>
      </form>
    );
  }
});

var mapStateToProps = function(state, props){
  return {
    gameWon: state.gameWon,
    numGuesses: state.numGuesses,
    number: state.number
  }
};

var GuessFormContainer = connect(mapStateToProps)(GuessForm);

module.exports = GuessFormContainer;
