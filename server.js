var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var fewestGuessesRecord = null;

app.get("/fewest-guesses", function(req, res){
  var data = {record: fewestGuessesRecord};
  res.status(200).json(data);
});

app.post("/fewest-guesses", function(req, res){
  var attempt = req.body.attempt;
  var feedback = "";
  if (fewestGuessesRecord == null){
    feedback = "Congratulations, you're the first person to win!";
    fewestGuessesRecord = attempt;
  }
  else if (attempt == fewestGuessesRecord){
    feedback = "You tied the existing record for fewest guesses!";
  }
  else if (attempt < fewestGuessesRecord){
    feedback = "You BROKE the existing record for fewest guesses!!";
    fewestGuessesRecord = attempt;
  }
  else {
    feedback = "Aw, someone else was better at guessing than you...";
  }
  var results = {
    standingRecord: fewestGuessesRecord, 
    feedback: feedback
  };
  res.status(201).json(results);
});

app.listen(process.env.PORT || 8080, process.env.IP);