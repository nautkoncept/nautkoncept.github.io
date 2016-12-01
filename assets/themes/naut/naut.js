$(window).on('load', function(e) {


    if ($(window).width() >= "900") {
        document.getElementById('shadow-bottom').style.height = ($('#footer h2').height() *2) + $('#insta-img').height() + 50 + "px"
        document.getElementById('footer').style.height = $('#shadow-bottom').height()

    } else {
        $('#shadow-top, shadow-bottom').remove()
    }

    document.getElementById('insta').style.height = $('#footer h2').height()  + $('#insta-img').height()
    document.getElementById('instagram').style.height = $('#insta-img').height() + "px"

})
