

// Student Question or Note  
function newForm1 (question) {
    event.preventDefault();  
    $(".out_Form1 li:last").append('<form class="form1"><fieldset class="fieldset1"><legend class="legend1"><input class="studentQuestion" type="checkbox">Student Question or Note</legend><textarea></textarea></fieldset></form>');
    $("ul.out_Form1>li>form:last>fieldset>textarea").addClass("outputBox1");

    var toAdd_Text = $(".inputBox1").val();
    $("ul.out_Form1>li>form:last>fieldset>textarea").val(toAdd_Text);
    $(".inputBox1").val(""); 
}

// Mentor's Feedback
function newForm2 (question) {
    event.preventDefault();
    $(".out_Form2 li:last").append('<form class="form2"><fieldset class="fieldset2"><legend class="legend2"><input class="mentorFeedback" type="checkbox">Mentor&#180;s Feedback</legend><textarea></textarea></fieldset></form>');
    $("ul.out_Form2>li>form:last>fieldset>textarea").addClass("outputBox2");

    var toAdd_Text = $(".inputBox2").val();
    $("ul.out_Form2>li>form:last>fieldset>textarea").val(toAdd_Text);
    $(".inputBox2").val(""); 
}

$(document).ready(function () {
    event.preventDefault();

//  When a student checks the box "Mark Complete", the Working lesson closes and Review of Concepts opens in the first column
    $( ".review" ).accordion({collapsible: true, heightStyle: "content"});

    $(".finish").click(function() {
        $(".finish, .review").toggleClass("hide");
    });


// Validate the "To Be Completed by Date"              
/*   $(".in_dateBox1").mouseleave(function() {                           // Set-up for .in_dateBox1 and .in_dateBox2
        var toAdd_Date = $(".in_dateBox1").val();                       // Format is good
        var validDateFormat = /^(\d{2})-(\d{2})-(\d{4})$/               // Is returning the wrong error message ("alert")!!!
                                                                        // Need to fix and then add to Student Question or Note and 
        if (validDateFormat == false) {                                 // Mentor's Feedback
            alert("Invalid Date Format.  Please correct.");
        }
        else {
            return toAdd_Date;
        } 
    });
*/

// Save the student's Question or Note if they press Enter rather than click Submit
    $(".inputBox1").keydown(function (event) {
        if (event.which == 13) {
        if (!$.trim($(".inputBox1").val())) {
            alert("Please enter a Question or Note.");
        } else {
            newForm1($(".inputBox1").val());
            $(".deleteButton1").removeClass("hide");
        }
    }
    });

// Save the student's Question or Note when they click submit
    $(".submitButton1").click(function () {
        if (!$.trim($(".inputBox1").val())) {
            alert("Please enter a Question or Note.");
        } else {
            newForm1($(".inputBox1").val());
            $(".deleteButton1").removeClass("hide");
        }

    });

// To delete checked questions
    $(".deleteButton1").click(function() {
        $("input.studentQuestion:checked").closest("form").remove();
/*        if (newForm1.length = [0]) {                                      // To hide submit buttom after deleting all Student Question or Note's
            $(".deleteButton1").addClass("hide");                           // Code isn't working.  While newForm1 is an array, I'm
        }  */                                                               // not reading it correctly
    });

// Save the Mentor's Feedback if they press Enter rather than click Submit
    $(".inputBox2").keydown(function (event) {
        if (event.which == 13) {
        if (!$.trim($(".inputBox2").val())) {
            alert("Please enter a Question or Note.");
        } else {
            newForm2($(".inputBox2").val());
            $(".deleteButton2").removeClass("hide");

        }
    }
    });

// Save the Mentor's Feedback when they click submit
    $(".submitButton2").click(function () {
        if (!$.trim($(".inputBox2").val())) {
            alert("Please enter a Question or Note.");
        } else {
            newForm2($(".inputBox2").val());
            $(".deleteButton2").removeClass("hide");
        }

    });

// To delete checked questions
    $(".deleteButton2").click(function() {
        $("input.mentorFeedback:checked").closest("form").remove();
/*        if (newForm2.length = [0]) {                                      // See above
            $(".deleteButton2").addClass("hide");
        }  */
    });


});
