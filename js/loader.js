$(document).ready(function() {
    $('body').bind('touchmove', function(e) {
        e.preventDefault()
    })
    // $.when($("#loader_stage")
    //     .delay(0)
    //     .fadeOut(300))
    //     .done(function() {
    //         $('body').css('overflow', 'auto')
    //         $('body').unbind('touchmove')
    // })
})

$("#spinner").css({
    '-webkit-animation-name': 'spinner',
    '-webkit-animation-timing-function': 'linear',
    '-webkit-animation-iteration-count': 'infinite',
    '-webkit-animation-duration': '2s',
    'animation-name': 'spinner',
    'animation-timing-function': 'linear',
    'animation-iteration-count': 'infinite',
    'animation-duration': '2s'
});
