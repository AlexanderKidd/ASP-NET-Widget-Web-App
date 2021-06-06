$(window).load(function () {
    $('#whereToBuy').on('click', function () {
        var whereToBuy = $('#whereToBuy');
        whereToBuy.removeAttr('href');
        whereToBuy.text("Made Ya Look!");
    });
});
