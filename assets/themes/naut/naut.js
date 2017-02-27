/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-27T13:28:02+01:00
* @Email:  me@andreeray.se
* @Filename: naut.js
* @Last modified by:   andreeray
* @Last modified time: 2017-02-27T14:43:18+01:00
*/



$(window).on('load', function(e) {


    if ($(window).width() >= "900") {
        document.getElementById('shadow-bottom').style.height = ($('#footer h2').height() * 2) + $('#insta-img').height() + 50 + "px"
        document.getElementById('footer').style.height = $('#shadow-bottom').height()

    } else {
        $('#shadow-top, shadow-bottom').remove()
    }

    document.getElementById('insta').style.height = $('#footer h2').height()  + $('#insta-img').height()
    document.getElementById('instagram').style.height = $('#insta-img').height() + "px"

})
