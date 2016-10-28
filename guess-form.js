var React = require("react");
var connect = require("react-redux").connect;

var actions = require("./actions");

var GuessForm = React.createClass({
  submitGuess: function(event){
    event.preventDefault();
    this.props.dispatch(actions.guessNumber(this.refs.guess.value));
    this.props.dispatch(actions.calcFeedback());
  },
  render: function(){
    return (
      <form>
				<input type="text" ref="guess" id="userGuess" className="text" placeholder="Enter your Guess" required/>
      	<input type="submit" id="guessButton" className="button" name="submit" value="Guess" onClick={this.submitGuess}/>
      </form>
    );
  }
});

var GuessFormContainer = connect()(GuessForm);

module.exports = GuessFormContainer;
