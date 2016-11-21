$(window).on('load', function(e) {


    $('#insta-slider img:gt(0)').hide();

    setInterval(function() {
            $('#insta-slider :first-child')
                .fadeOut(500)
                .next('img')
                .fadeIn(500)
                .end()
                .appendTo('#insta-slider');
        },
    6000);


})
