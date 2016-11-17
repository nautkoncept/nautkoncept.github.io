// var frame = document.getElementById('section_video').offsetHeight;

$(document).ready(function(){
    document.getElementById('player-top').style.height = (window.innerHeight - document.getElementById('videoWrapper').offsetHeight ) / 2 + 'px'
    if ($( window ).width() >="900") {
        document.getElementById('shadow-bottom').style.height = $('footer').height()
        document.getElementById('footer').style.height = $('#shadow-bottom').height()
    }

    var page = $(window);
   $(window).mousewheel(function(event, delta, deltaX, deltaY){
       if (delta < 0) page.scrollTop(page.scrollTop() + 5);
       else if (delta > 0) page.scrollTop(page.scrollTop() - 5);
       return false;
   })

})
