var readlineSync = require('readline-sync');
var chalk = require('chalk');

var cyan = chalk.cyanBright;
var red = chalk.redBright;
var magenta = chalk.magentaBright;
var bg = chalk.bgCyan;
var green = chalk.green;
var bold = chalk.bold;

var score=0;
var userName = readlineSync.question(cyan("What's your name?: "));
console.log(cyan("Welcome ")+bg.bold(userName)+cyan(" to Marvel Quiz"));

function play(question, answer){
  var userAnswer = readlineSync.question(magenta(question));
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(green("You're absolutely right!"));
    score++;
  }else{
    console.log(red("Oops, hard luck!"));
  }
  console.log("You're score is: "+cyan(score));
  console.log(cyan("_____"));
};

var questionsToAsk = [{
  question: "Which was the first Marvel movie to be released?: ",
  answer: "Ironman"
},{
  question: "Who is the oldest Avenger?: ",
  answer: "Thor"
},{
  question: "Who is known to be the first Avenger?: ",
  answer: "Captain America"
},{
  question: "Who is Tony Stark's personal bodyguard?: ",
  answer: "Happy Hogan"
},{
  question: "Who owns the Time Stone?: ",
  answer: "Doctor Strange"
}];

for(var i=0; i<questionsToAsk.length; i++){
  var currentQuestion = questionsToAsk[i];
  play(currentQuestion.question,currentQuestion.answer);
};

console.log(cyan("Awesome, your final score is: ")+score);