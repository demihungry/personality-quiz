/*Add your JavaScript here*/
var summerScore = 0;
var winterScore = 0;
var question = 0;
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var done = document.getElementById("done");
var restart = document.getElementById("restart");

q1a1.addEventListener("click", winter);
q1a2.addEventListener("click", summer);
q2a1.addEventListener("click", summer);
q2a2.addEventListener("click", winter);
q3a1.addEventListener("click", summer);
q3a2.addEventListener("click", winter);
q4a1.addEventListener("click", winter);
q4a2.addEventListener("click", summer);
q5a1.addEventListener("click", summer);
q5a2.addEventListener("click", winter);
done.addEventListener("click", showResult);
restart.addEventListener("click", clear);


function winter(){
  winterScore += 1;
  question += 1;
  console.log("winterScore = " + winterScore + " question = " + question);
  if (question == 1){
    q1a1.disabled = true;
    q1a2.disabled = true;
  }
  if (question == 2){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
  }
  if (question == 3){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
    q3a1.disabled = true;
    q3a2.disabled = true;
  }

  if (question == 4){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
    q3a1.disabled = true;
    q3a2.disabled = true;
    q4a1.disabled = true;
    q4a2.disabled = true;
  }
  
  if (question == 5){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
    q3a1.disabled = true;
    q3a2.disabled = true;
    q4a1.disabled = true;
    q4a2.disabled = true;
    q5a1.disabled = true;
    q5a2.disabled = true;
  }
}

function summer(){
  summerScore += 1;
  question += 1;
  console.log("summerScore = " + summerScore + " question = " + question);
  if (question == 1){
    q1a1.disabled = true;
    q1a2.disabled = true;
  }
  if (question == 2){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
  }
  if (question == 3){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
    q3a1.disabled = true;
    q3a2.disabled = true;
  }

  if (question == 4){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
    q3a1.disabled = true;
    q3a2.disabled = true;
    q4a1.disabled = true;
    q4a2.disabled = true;
  }
  
  if (question == 5){
    q1a1.disabled = true;
    q1a2.disabled = true;
    q2a1.disabled = true;
    q2a2.disabled = true;
    q3a1.disabled = true;
    q3a2.disabled = true;
    q4a1.disabled = true;
    q4a2.disabled = true;
    q5a1.disabled = true;
    q5a2.disabled = true;
  }
}

function showResult(){
  if (question != 5){
    result.innerHTML = "You are not done yet...";
  }
  else if (winterScore < summerScore){
    console.log("Congratulations! You are a summer person, this means that you like the beach, warm weather, and answered this quiz with adventure in mind. You're crazy for wanting to attack that man with a branch but oh well, have a nice day!");
    result.innerHTML = "Congratulations! You are a summer person, this means that you like the beach, warm weather, and answered this quiz with adventure in mind. You're crazy for wanting to attack that man with a branch but oh well, have a nice day!";
  }
  else if (winterScore > summerScore){
    console.log("You are a winter person, you chose to take the safe route and somehow still ended up being attacked, just like the winter months brings us warmth from the holidays and family gatherings but attacks us with the its cold weather. Being a winter person, you probably like the cold and are introverted, a horrible combination; have a horrible day!");
    result.innerHTML = "You are a winter person, you chose to take the safe route and somehow still ended up being attacked, just like the winter months brings us warmth from the holidays and family gatherings but attacks us with the its cold weather. Being a winter person, you probably like the cold and are introverted, a horrible combination; have a horrible day!";
  }

}

function clear(){
  winterScore = 0;
  summerScore = 0;
  question = 0;
  q1a1.disabled = false;
  q1a2.disabled = false;
  q2a1.disabled = false;
  q2a2.disabled = false;
  q3a1.disabled = false;
  q3a2.disabled = false;
  q4a1.disabled = false;
  q4a2.disabled = false;
  q5a1.disabled = false;
  q5a2.disabled = false;
  result.innerHTML = "Your result is...";
  
}
