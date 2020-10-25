$(document).ready(function () {

    // let newButton = $("<button>");
    let newDiv = $("<div>");
    let scoreCount = 0;
    // startButton begins quiz
    $("#startButton").on("click", function () {
        // Remove startButton
        $("#startButton").remove();
        // Question 1
        $("#questionHeader").text("Question 1?");

        $(".card-body").append(newDiv);
        // Question 1 Answers
        $(".card-body").append("<button class='quizButtons' id='Q1A1'>Incorrect Answer</button>");
        $(".card-body").append("<br id='tempBreak'>");
        $(".card-body").append("<button class='quizButtons' id='Q1A2'>Correct Answer</button>");
        $(".card-body").append("<br id='tempBreak'>");
        $(".card-body").append("<button class='quizButtons'id='Q1A3'>Incorrect Answer</button>");
        $(".card-body").append("<br id='tempBreak'>");
        $(".card-body").append("<button class='quizButtons'id='Q1A4'>Incorrect Answer</button>");
        // If the user picks the correct answer, increment scoreCount
        $("#Q1A2").on("click", function () {
            scoreCount++;
        });
        // If any button is clicked:
        $(".quizButtons").on("click", function () {
            // Ask Question 2
            $("#questionHeader").text("Question 2?");
            // Remove Question 1 buttons and line breaks
            $("#tempBreak").remove();
            $("#tempBreak").remove();
            $("#tempBreak").remove();
            $("#Q1A1").remove();
            $("#Q1A2").remove();
            $("#Q1A3").remove();
            $("#Q1A4").remove();
            // Add answer buttons for Question 2
            $(".card-body").append("<button class='quizButtons' id='Q2A1'>Correct Answer</button>");
            $(".card-body").append("<br id='tempBreak'>");
            $(".card-body").append("<button class='quizButtons' id='Q2A2'>Incorrect Answer</button>");
            $(".card-body").append("<br id='tempBreak'>");
            $(".card-body").append("<button class='quizButtons' id='Q2A3'>Incorrect Answer</button>");
            $(".card-body").append("<br id='tempBreak'>");
            $(".card-body").append("<button class='quizButtons' id='Q2A4'>Incorrect Answer</button>");
            // If the user picks the correct answer, increment scoreCount
            $("#Q2A1").on("click", function () {
                scoreCount++;
            });
            // If any button is clicked:
            $(".quizButtons").on("click", function () {
                // Ask Question 3
                $("#questionHeader").text("Question 3?");
                // Remove Question 1 buttons and line breaks
                $("#tempBreak").remove();
                $("#tempBreak").remove();
                $("#tempBreak").remove();
                $("#Q2A1").remove();
                $("#Q2A2").remove();
                $("#Q2A3").remove();
                $("#Q2A4").remove();
                // Add answer buttons for Question 3
                $(".card-body").append("<button class='quizButtons' id='Q3A1'>Incorrect Answer</button>");
                $(".card-body").append("<br id='tempBreak'>");
                $(".card-body").append("<button class='quizButtons' id='Q3A2'>Incorrect Answer</button>");
                $(".card-body").append("<br id='tempBreak'>");
                $(".card-body").append("<button class='quizButtons' id='Q3A3'>Correct Answer</button>");
                $(".card-body").append("<br id='tempBreak'>");
                $(".card-body").append("<button class='quizButtons' id='Q3A4'>Incorrect Answer</button>");
                // If the user picks the correct answer, increment scoreCount
                $("#Q3A3").on("click", function () {
                    scoreCount++;
                });
                // If any button is clicked:
                $(".quizButtons").on("click", function () {
                    // Ask Question 4
                    $("#questionHeader").text("Question 4?");
                    // Remove Question 3 buttons and line breaks
                    $("#tempBreak").remove();
                    $("#tempBreak").remove();
                    $("#tempBreak").remove();
                    $("#Q3A1").remove();
                    $("#Q3A2").remove();
                    $("#Q3A3").remove();
                    $("#Q3A4").remove();
                    // Add answer buttons for Question 4
                    $(".card-body").append("<button class='quizButtons' id='Q4A1'>Correct Answer</button>");
                    $(".card-body").append("<br id='tempBreak'>");
                    $(".card-body").append("<button class='quizButtons' id='Q4A2'>Incorrect Answer</button>");
                    $(".card-body").append("<br id='tempBreak'>");
                    $(".card-body").append("<button class='quizButtons' id='Q4A3'>Incorrect Answer</button>");
                    $(".card-body").append("<br id='tempBreak'>");
                    $(".card-body").append("<button class='quizButtons' id='Q4A4'>Incorrect Answer</button>");
                    // If the user picks the correct answer, increment scoreCount
                    $("#Q4A1").on("click", function () {
                        scoreCount++;
                    });
                    // If any button is clicked:
                    $(".quizButtons").on("click", function () {
                        // Ask Question 5
                        $("#questionHeader").text("Question 5?");
                        // Remove Question 4 buttons and line breaks
                        $("#tempBreak").remove();
                        $("#tempBreak").remove();
                        $("#tempBreak").remove();
                        $("#Q4A1").remove();
                        $("#Q4A2").remove();
                        $("#Q4A3").remove();
                        $("#Q4A4").remove();
                        // Add answer buttons for Question 5
                        $(".card-body").append("<button class='quizButtons' id='Q5A1'>Incorrect Answer</button>");
                        $(".card-body").append("<br id='tempBreak'>");
                        $(".card-body").append("<button class='quizButtons' id='Q5A2'>Incorrect Answer</button>");
                        $(".card-body").append("<br id='tempBreak'>");
                        $(".card-body").append("<button class='quizButtons' id='Q5A3'>Incorrect Answer</button>");
                        $(".card-body").append("<br id='tempBreak'>");
                        $(".card-body").append("<button class='quizButtons' id='Q5A4'>Correct Answer</button>");
                        $(".card-body").append("<br id='tempBreak'>");
                        // If the user picks the correct answer, increment scoreCount
                        $("#Q5A4").on("click", function () {
                            scoreCount++;
                        });
                        // If any button is clicked?
                        $(".quizButtons").on("click", function(){
                        // Remove Question 5 content
                        $("#tempBreak").remove();
                        $("#tempBreak").remove();
                        $("#tempBreak").remove();
                        $("#Q5A1").remove();
                        $("#Q5A2").remove();
                        $("#Q5A3").remove();
                        $("#Q5A4").remove();

                        $(".card-body").append("<h3>Score:  " + scoreCount + " / 5</h3>");

                        });
                        // Header text display score
                        // Remove Buttons

                    });
                });

            });

        });

    });
});