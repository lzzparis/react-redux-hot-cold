var React = require("react");
var connect = require("react-redux").connect;

var actions = require("./actions");

var GuessForm = React.createClass({
  getInitialState: function(){
    return{
      inputValue: ""
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
    this.props.dispatch(actions.calcFeedback());
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

var GuessFormContainer = connect()(GuessForm);

module.exports = GuessFormContainer;
