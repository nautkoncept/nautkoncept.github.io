$(document).ready(function() {

    setInterval(function() {
        $('#instagram :first-child')
            .fadeOut(500)
            .next('img')
            .fadeIn(500)
            .end()
            .appendTo('#instagram');
        },
    6000);
})
