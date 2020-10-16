$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 60) {
        $('.nav-menu').addClass("");
    }
    else {
        $('.nav-menu').removeClass("");
    }
});