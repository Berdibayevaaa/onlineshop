$(document).ready(function() {
    $(".faq-answer").hide();
    $(".faq-question").click(function() {
        $(this).next(".faq-answer").slideToggle("fast");

        const indicator = $(this).find(".indicator");
        if (indicator.text() === "+") {
            indicator.text("-");
        } else {
            indicator.text("+");
        }
    });
});