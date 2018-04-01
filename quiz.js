var audio = new Audio("raven.mp3");
    function check() {
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var question5 = document.quiz.question5.value;
        var question6 = document.quiz.question6.value;
        var question7 = document.quiz.question7.value;
        var question8 = document.quiz.question8.value;
        var question9 = document.quiz.question9.value;
        var correct = 0;

        if (question1 == "Trenton"){
            correct++;
        }
        if (question2 == "Albany"){
            correct++;
        }
        if (question3 == "Austin"){
            correct++;
        }
        if (question4 == "Sacramento"){
            correct++;
        }
        if (question5 == "Tallahassee"){
            correct++;
        }
        if (question6 == "Juneau"){
            correct++;
        }
        if (question7 == "Springfield"){
            correct++;
        }
        if (question8 == "Topeka"){
            correct++;
        }
        if (question9 == "Harrisburg"){
            correct++;
        }

       document.getElementById("after_submit").style.visibility="visible";
       document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
       console.log(correct);

       
    }

setTimeout(fortySeconds, 1000 * 40);
setTimeout(timeUp, 1000 * 60);
document.getElementById("time-left").innerHTML = "You have one minute. Good luck.";

function fortySeconds() {

  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  
  document.getElementById("time-left").innerHTML = "You have 20 seconds left.";
  console.log("20 seconds left");
}
function timeUp() {

 document.getElementById("time-left").innerHTML = "Time's Up!";
  console.log("time is up");

  audio.play()
}
