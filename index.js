var readlineSync = require('readline-sync');

console.log(" _____________________________________________");
console.log("|                                             |");
console.log("|         How well you know Mohan?            |");
console.log("|_____________________________________________|");

var userName = readlineSync.question("What is your name? ");
console.log("Hi! " + userName + ", let's see how well you know ME? ");

var quiz = [
  {question : "Where did Mohan born? ",
  options : " A. Asgard\n B. Thirumalagiri\n C. Hyderabad\n D. Knowhere",
  answer : "C"},

  {question : "When did Mohan born? ",
  options : " A. 16th May 1997\n B. 17th May 1997\n C. 17th May 1998\n D. 16th May 1998",
  answer : "A"},

  {question : "What is Mohan's native place? ",
  options : " A. Eatoor\n B. Hyderabad\n C. Asgard\n D. Titan",
  answer : "A"},

  {question : "How many siblings did Mohan have",
  options : " A. 0\n B. 1\n C. 2\n D. 3",
  answer : "C"},

  {question : "Who is Mohan's favorite superhero? ",
  options : " A. Captain America\n B. Ironman\n C. Hawkeye\n D. Superman",
  answer : "B"},
];

var q_no = 0;
var score = 0;

function checkAnswer(question, options, answer){
  var userAnswer = readlineSync.question("\n" + question + "\n" + options + "\n ");

  if (userAnswer === answer){
    console.log("\nYay!, your answer is correct.");
    score++;
  }else{
    console.log("\nOops!, your answer is wrong. ");
  }
  console.log("Your Score is ", score);
}

var choice = readlineSync.question(" To exit quiz press 'e'. Pres any key to take part in quiz (followed by return): ");
while(choice != 'e'){
  currentQuestion = quiz[q_no];
  checkAnswer(currentQuestion.question, currentQuestion.options, currentQuestion.answer);
  var choice = readlineSync.question("\n To exit quiz press 'e'. Pres any key to take part in quiz (followed by return): ");
  q_no++;
  if(q_no === quiz.length){
    console.log("\nYou've reached to the end of the quiz.");
    break;
  }
  
}
console.log("\nYour Score is ", score);
console.log("\nThank you for playing.");