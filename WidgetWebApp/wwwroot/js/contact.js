﻿$(window).load(function () {
    $('#customSwitch1').on('click', function () {
        var hiddenMail = $('.hiddenMail');
        hiddenMail.attr("href", "");

        setTimeout(function () {
            hiddenMail.text("3");
        }, 1000, hiddenMail);
        setTimeout(function () {
            hiddenMail.text("2");
        }, 2000, hiddenMail);
        setTimeout(function () {
            hiddenMail.text("1");
        }, 3000, hiddenMail);
        setTimeout(function () {
            hiddenMail.text("Show");
        }, 4000, hiddenMail);
    });

    $('.hiddenMail').on('click', function (e) {
        e.preventDefault();
        if ($(this).text() == "Show" && $('#customSwitchCheck1').prop("checked")) {
            $('#customSwitch1').off("click");
            $(this).off("click");
            var email = $(this).attr("data-email").replace(/AT/, '@').replace(/DOT/, '.')
                .replace(/dog/, '').replace(/kidd/, 'kidd5');
            $(this).removeClass("hiddenMail");
            $(this).html(email);
            $(this).attr("href", "mailto:" + email);
        }
    });
});
