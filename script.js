 $(document).ready(function() { // this waits until the document is fully loaded
   
    var newButton = $("<button>");
    var newDiv = $("<div>");
   
    // $("#testDiv").on("click", function () {

    //     alert("Clicked");

    // });

    $("#startQuiz").on("click", function () {
      //  alert("Cliiiiicked");
        $("#startQuiz").text("Hello");

        $(".card-body").append(newDiv);
        $(".card-body").append(newButton).attr('id', 'button1');

        $(".card-body").append(newDiv);
        $(".card-body").append(newButton).attr('id', 'button1');
    });
});