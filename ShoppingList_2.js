/*var validformat=/^\d{2}\/\d{2}\/\d{4}$/

function validDate(toAdd_Date) {
    if (validDate == true) {
        return toAdd_Date;
    }
    else {
        alert("Invalid Date Format.  Please correct and resubmit.");
    } 
}   */

function newForm() {

        $(".out_Form1").append('<fieldset class="fieldset1"><legend class="legend1"><input class="check" type="checkbox">Student Question or Note:</legend><br><textarea class="student"></textarea></fieldset>');

        var toAdd_Text = $(".inputBox1").val();
        $(".student").val(toAdd_Text);
}


/*function maxQuestion() {
    if (question < 10) {

    } 
    else {
        "Please contact your Mentor"
    }
}   */



$(document).ready(function () {

    $( ".review" ).accordion({collapsible: true});

    $(".finish").click(function() {
        $(".finish, .review").toggleClass("hide");
    });

    // Save the student's input if they press enter instead of clicking submit 
    $("#inputBox").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();

        

/*      
        validDate($(".in_dateBox1").val());
            validDate($("#inputBox").val());
            showBanner($("#inputBox").val());
            showGuesses($("#inputBox").val());      */

        var toAdd_Text = $(".inputBox2").val();
        $(".outputBox1").val(toAdd_Text);
        }
    });

    // Save the student's input when they click submit
    $(".submitButton").click(function () {
        event.preventDefault();

        newForm();

/*      validDate($(".in_dateBox1").val());
            checkAnswer($("#inputBox").val());
            showBanner($("#inputBox").val());
            showGuesses($("#inputBox").val());  */
       
/*           */
    });
});