$(document).ready(function() {
    $('body').bind('touchmove', function(e) {
        e.preventDefault()
    })

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
