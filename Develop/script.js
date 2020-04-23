$(window).bind("scroll", function () {
    if ($(window).scrollTop() >= 300) {
        $(".uk-navbar").addClass("sticky")
    } else {
        $(".uk-navbar").removeClass("sticky");
    }
});