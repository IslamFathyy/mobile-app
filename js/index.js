$(".f").click(function () {
    $('html,body').animate({
            scrollTop: $(".title_features").offset().top - 50
        },
        1000);
});


$(".p").click(function () {
    $('html,body').animate({
            scrollTop: $(".title_section5").offset().top - 50
        },
        1000);
});


$(".u").click(function () {
    $('html,body').animate({
            scrollTop: $(".title_how").offset().top - 50
        },
        1000);
});


$(".c").click(function () {
    $('html,body').animate({
            scrollTop: $(".title_contact").offset().top - 50
        },
        1000);
});


$(".h").click(function () {
    $('html,body').animate({
            scrollTop: $("body").offset().top
        },
        1000);
});