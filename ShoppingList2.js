

var eT = 0;     
function showBanner(guess) {
    if (guess == target) {   
    $(".banner").hide().each(function() {
        $(this).delay(eT).fadeIn('slow');
        eT += 600;
        });
    }
}

// "p" as in previous guess
var p = [];                                
function showGuesses(guess) {
    p.unshift(guess); 
}

var count = p.length;
var previousGuess = 1;


function checkAnswer(guess) {
    console.log(guess);
    var count = p.length;
    if (guess == target) {
        $(".messageBox p:first").append("<h2>You Win!</h2>");
        $(".messageBox p:nth-child(2)").empty();
        $(".displayOfGuess").hide();
        $(".safe_closed, .safe_open").toggleClass("hide");
        $(".gc2, .gurl").removeClass("hide");
        $(".gurl").attr("align","center");
    
        // John, plugin code for "modern blink"
      
        $(".messageBox p:first").modernBlink({
            duration: 1000,
            iterationCount: "5",
            auto: true
        })

    } else if (guess < 1 || guess > 100) {
        $(".messageBox p:nth-child(2)").contents().remove();
        $(".displayOfGuess").contents().remove();
        $(".messageBox p:nth-child(2)").append("<h2>Please enter a number between 1 and 100!</h2>");
    } else if (isNaN(guess)) {
        $(".messageBox p:nth-child(2)").contents().remove();
        $(".displayOfGuess").contents().remove();
        $(".messageBox p:nth-child(2)").append("<h2>Please enter a number!</h2>");
    } else if (count == 0) { 
        $(".messageBox p:nth-child(2)").contents().remove();
        $(".displayOfGuess").contents().remove();
        $(".messageBox p:nth-child(2)").append("<h2>Try again!</h2>");
    } else if (Math.abs(guess - target) < Math.abs(p[previousGuess] - target)) {
        $(".messageBox p:nth-child(2)").contents().remove();
        $(".displayOfGuess").contents().remove();
        $(".messageBox p:nth-child(2)").append("<h2>You're Getting <span>HOTTER!</span></h2>");
    } else {
        $(".messageBox p:nth-child(2)").contents().remove();
        $(".displayOfGuess").contents().remove();
        $(".messageBox p:nth-child(2)").append("<h2>You're Getting <span>COLDER!</span></h2>");    
    }

}        

function restart() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
        }
    target = getRandomInt(1, 100);
    console.log(target);
    $(".messageBox").hide();
    $(".displayOfGuess").hide();
    $(".banner ").hide();
    $(".safe_open").hide();
    $(".safe_closed").fadeIn('fast');
    $(".gc2, .gurl").hide();
    $("#inputBox").val("");
}    


$(document).ready(function () {

    // Save the player's guess when player presses enter 
    $("#inputBox").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
 /*           checkAnswer($("#inputBox").val());
            showBanner($("#inputBox").val());
            showGuesses($("#inputBox").val());  */
            var toAdd_Date = $(".in_dateBox2").val();
            $(".out_dateBox2").append("<p>" + toAdd_Date + "</p>");
            var toAdd_Lesson = $(".in_lessonBox2").val();
            $(".out_lessonBox2").append("<p>" + toAdd_Lesson + "</p>");
            var toAdd_Text = $(".inputBox2").val();
            $(".outputBox2").append("<p>" + toAdd_Text + "</p>");
        }
    });

    // Save the player's guess if player clicks on "Submit
    $("#submitButton").click(function () {
        event.preventDefault();
/*        checkAnswer($("#inputBox").val());
        showBanner($("#inputBox").val());
        showGuesses($("#inputBox").val());  */
        var toAdd_Date = $(".in_dateBox2").val();
        $(".out_dateBox2").append("<p>" + toAdd_Date + "</p>");
        var toAdd_Lesson = $(".in_lessonBox2").val();
        $(".out_lessonBox2").append("<p>" + toAdd_Lesson + "</p>");
        var toAdd_Text = $(".inputBox2").val();
        $(".outputBox2").append("<p>" + toAdd_Text + "</p>");
        
    });

    // Start over
    $("#startOver").keydown(function (event) {
        if (event.which == 13) 
        restart();
    });

    $("#startOver").click(function (event){
        restart();
    });





});