$(window).on('load', function(e) {

    document.getElementById('insta-slider').style.height = document.getElementById('insta-img').clientHeight

    $(function() {
        $('#insta-slider img:gt(0)').hide();
        setInterval(function() {
                $('#insta-slider :first-child')
                    .fadeOut(500)
                    .next('img')
                    .fadeIn(500)
                    .end()
                    .appendTo('#insta-slider');
            },
            5000);
    });


})
