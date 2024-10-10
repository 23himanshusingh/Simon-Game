var gamePattern = [];
var userClickedPattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var randomNumber;

var level = 0;

var started = false;

$(document).keypress(function(){
    if (!started){
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});

function nextSequence(){

    level += 1;

    userClickedPattern = [];

    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4)

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);


    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);


  

}


$(".btn").on("click", function (){
    var userChosenColour = this.id;
    playSound(userChosenColour);
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);

});

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}



function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel){
    console.log(gamePattern);
    console.log(userClickedPattern);
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if (gamePattern.length === userClickedPattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
        console.log("wrong");
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}




  





