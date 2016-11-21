$(window).on('load', function(e) {
    document.getElementById('player-top').style.height = (window.innerHeight - document.getElementById('videoWrapper').offsetHeight) / 2 + 'px'
    if ($(window).width() >= "900") {
        document.getElementById('shadow-bottom').style.height = ($('#footer h2').height() *2) + $('#insta-img').height()
        document.getElementById('footer').style.height = $('#shadow-bottom').height()

    }

    document.getElementById('insta').style.height = $('#footer h2').height()  + $('#insta-img').height()

})

$(document).ready(function() {

    var userFeed = new Instafeed({
        get: 'user',
        userId: '3624623948',
        accessToken: '3624623948.1677ed0.d2cfa5afe2644bdfa7cca203e427a089',
        template: '<img src="{{image}}"  />',
        resolution: 'standard_resolution'
    });
    userFeed.run();


})
