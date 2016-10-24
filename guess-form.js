var React = require("react");

var GuessForm = function(props){
  return(
    <form>
				<input type="text" name="userGuess" id="userGuess" className="text" placeholder="Enter your Guess" required/>
      	<input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
    </form>
  );
};

module.exports = GuessForm;
