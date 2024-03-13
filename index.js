var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    animatePress(userChosenColour);
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
    $("#" + name).fadeOut(100).fadeIn(100);
}
function animatePress(currentColour){
    $(".btn").addClass("pressed").setTimeout(() => {currentColour}, 100);
}
$("#green").click(function(){ 
    var audio = new Audio("sounds/green.mp3");
    audio.play();
    $("#green").fadeOut(100).fadeIn(100);
});
$("#red").click(function(){ 
    var audio = new Audio("sounds/red.mp3");
    audio.play();
    $("#red").fadeOut(100).fadeIn(100);
});
$("#yellow").click(function(){ 
    var audio = new Audio("sounds/yellow.mp3");
    audio.play();
    $("#yellow").fadeOut(100).fadeIn(100);
});
$("#blue").click(function(){ 
    var audio = new Audio("sounds/blue.mp3");
    audio.play();
    $("#blue").fadeOut(100).fadeIn(100);
});
$(document).ready(function() {
    $(".btn").click(function(event) {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        console.log (userClickedPattern);
    });
});

