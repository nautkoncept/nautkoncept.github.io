$(window).on('load', function(e) {
    $('body').bind('touchmove', function(e) {
        e.preventDefault()
    })

    $.when($("#splash")
        .fadeOut(0))
        .done(function() {
            $('#shell').fadeTo(3000, 1 );
            $('body').css('overflow', 'auto')
            $('body').unbind('touchmove')
    })
})
$("#spinner").css({
    '-webkit-animation-name': 'spinner',
    '-webkit-animation-timing-function': 'linear',
    '-webkit-animation-iteration-count': 'infinite',
    '-webkit-animation-duration': '1s',
    'animation-name': 'spinner',
    'animation-timing-function': 'linear',
    'animation-iteration-count': 'infinite',
    'animation-duration': '1s'
});
