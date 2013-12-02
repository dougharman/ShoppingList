

function newForm(question) {
    $(".out_Form1 li:last").append('<form class="form1"><fieldset class="fieldset1"><legend class="legend1"><input class="studentQuestion" type="checkbox">Student Question or Note number: </legend><textarea></textarea></fieldset></form>');
    $("ul.out_Form1>li>form:last>fieldset>textarea").addClass("outputBox1");

// Question number will equal index value in the array
// Tied the following two lines with no success
/*    var elements = $("ul.out_Form1").get("form1");
    var q = jQuery.makeArray(elements); */

// Next iteration - working from example for .toArray() found in jQuery api 
// The statement $(".form1").toArray(); returns a horizontal array of three; placing it in brackets "[]" give me a vertical array.  I still
// can't count it! var "q" comes back undefined. Also, q.length give "q" undefined
/*      var q = [$(".form1").toArray()];
        var numberOfQuestions = q.length;
        var questionNumber = q.length[-1];
*/
// next try combine toArray and length

    var numberOfQuestions = $(".form1").toArray().length;    // now, this works
//  var questionNumber = $(".form1").toArray().length[-1];   // and this doesn't, so we'll replace questionNumber in the following with numberOfQuestion[-1]
//  still not working

//  work-around follows - it didn't work - responds NaN in legend line
    $("ul.out_Form1>li>form:last>fieldset>legend").append("<span>" + ($(".form1").toArray().length)-1 + "</span>");

//  While this hasn't worked - yet - I think I'm headed in the right direction.  My goal is to use the array index number as the question number.  Then,
//  when a question is checked, I can delete it by array index number
//  Questions:  How do I assign a variable name, e.g., "q", to the array created by .toArray(); alternatively does the method's output have a name
//              so I can get the last item's index number 

    var toAdd_Text = $(".inputBox1").val();
    $("ul.out_Form1>li>form:last>fieldset>textarea").val(toAdd_Text);
    $(".inputBox1").val("");  

}


$(document).ready(function () {

//  When a student checks the box "Mark Complete", the Working lesson closes and Review of Concepts opens in the first column
    $( ".review" ).accordion({collapsible: true});

    $(".finish").click(function() {
        $(".finish, .review").toggleClass("hide");
    });


// Validate the "To Be Completed by Date" 
// Not sure how to validate the expression validDateFormat.  Code below doesn't work.                     
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

// Save the student's Question or Note if they press Enter rather than click Submit
    $("#inputBox").keydown(function (event) {
        if (event.which == 13) {
            event.preventDefault();
// I'm not real sure I understand "!$.trim".  After looking at the "offical" answer, I Googled for examples of validating text and read the jQuery API
        if (!$.trim($(".inputBox1").val())) {
            alert("Please enter a Question or Note.");
        } else {
            newForm($("#inputBox").val());
        }
    }
    });

// Save the student's Question or Note when they click submit
    $(".submitButton").click(function () {
        event.preventDefault();
        if (!$.trim($(".inputBox1").val())) {
            alert("Please enter a Question or Note.");
        } else {
            newForm($("#inputBox").val());
        }

    });


// To delete checked questions
    $("input").click(function() {
        event.preventDefault();
//  This didn't work.  I need to access the form number assigned by the array.
/*      $(this).closest("form").addClass("checked");  */
    });



});
