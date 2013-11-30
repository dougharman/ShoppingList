






function newForm() {

        
    
    $(".out_Form1 li:last").append('<form><fieldset class="fieldset1"><legend class="legend1"><input class="studentQuestion" type="checkbox">Student Question or Note:</legend><textarea></textarea></fieldset></form>');
    $("ul.out_Form1>li>form:last>fieldset>textarea").addClass("outputBox1");
    var toAdd_Text = $(".inputBox1").val();
    $("ul.out_Form1>li>form:last>fieldset>textarea").val(toAdd_Text);
    $(".inputBox1").val("");  
}


/*function maxQuestion() {
    if (question < 10) {

    } 
    else {
        "Please contact your Mentor"
    }
}   */



$(document).ready(function () {

//  When a student checks the box "Mark Complete", the Working lesson closes and Review of Concepts opens in the first column
    $( ".review" ).accordion({collapsible: true});

    $(".finish").click(function() {
        $(".finish, .review").toggleClass("hide");
    });


// Validate the "To Be Completed by Date"                       Not sure how to validate the expression validDateFormat
/*    $(".in_dateBox1").mouseleave(function() {
        var toAdd_Date = $(".in_dateBox1").val();
        var validDateFormat = /^\d{2}\d{2}\d{4}$/

        if (validDateFormat == false) {
            alert("Invalid Date Format.  Please correct.");
        }
        else {
            return toAdd_Date;
        } 
    });  */

// Save the student's Question or Note when they click submit
    $(".submitButton").click(function () {
        event.preventDefault();

// I'm not real sure I understand "!$.trim".  After looking at the "offical" answer, I Googled for examples of validating text and read the jQuery API
        if (!$.trim($(".inputBox1").val())) {
            alert("Please enter a Question or Note.");
        } else {
            newForm();
        }

    });


// To delete checked questions
    $("input").click(function() {
        $(this).closest("form").addClass("checked");
    });



});
