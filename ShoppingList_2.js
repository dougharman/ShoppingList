/* var validformat=/^\d{2}\/\d{2}\/\d{4}$/

function validDate(toAdd_Date) {
    if (validDate == true) {
        return toAdd_Date;
    }
    else {
        alert("Invalid Date Format.  Please correct and resubmit.");
    } 
}  */




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
            
            checkAnswer($("#inputBox").val());
            showBanner($("#inputBox").val());
            showGuesses($("#inputBox").val());      */
            var toAdd_Lesson = $(".in_lessonBox2").val();
            $(".out_lessonBox2").append("<span>" + toAdd_Lesson + "</span>");

            var toAdd_Date = $(".in_dateBox2").val();
            $(".out_dateBox2").append("<span>" + toAdd_Date + "</span>");
            
            var toAdd_Text = $(".inputBox2").val();
            $(".outputBox2").val(toAdd_Text);
        }
    });

    // Save the student's input when they click submit
    $(".submitButton").click(function () {
        event.preventDefault();
/*        checkAnswer($("#inputBox").val());
        showBanner($("#inputBox").val());
        showGuesses($("#inputBox").val());  
       
        var toAdd_Lesson = $(".in_lessonBox2").val();
        $(".lesson2").append("<span>" + toAdd_Lesson + "</span>");

        var toAdd_Date = $(".in_dateBox2").val();
        $(".date2").append("<span>" + toAdd_Date + "</span>");  */


        $("form").addClass("out_Form1"); 
        $("span1").addClass("fieldset1");
        $("span2").addClass("fieldset1, legend1");
       
        $("span3").addClass("fieldset1, legend1, outputBox1");
        $("span4").append("textarea");
  
      

        var toAdd_Text = $(".inputBox1").val();
        $(".outputBox1").val(toAdd_Text);     


        
    });

});