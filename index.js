var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

$(document).ready(function() {
    $(".btn").click(function(event) {
        var userChosenColour = $(this).attr("id");
        userClickedPattern.push(userChosenColour);
        playSound(userChosenColour);
        animatePress(userChosenColour);
});
});
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {$("#" + currentColor).removeClass("pressed");}, 100);
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


