// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;

function onYouTubeIframeAPIReady(id) {
    player = new YT.Player('player', {
        height: '349',
        width: '560',
        videoId: '',
        suggestedQuality: 'highres',
        playerVars: {
            modestbranding: 1,
            controls: 0,
            disablekb: 1,
            showinfo: 0,
            nologo: 1,
            playsinline: 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function loadVideo(id){
    document.getElementById('youtube').style.top = $(window).scrollTop() + "px"
    $('#youtube').fadeIn(200, function(){
        $('#videoWrapper').fadeIn(2000, function(){
            document.getElementById('player-top').style.height = (window.innerHeight - document.getElementById('videoWrapper').offsetHeight) / 2 + 'px'
            $('#youtube-close').delay(2000).fadeIn(800)
        })
    })


    player.loadVideoById(id,0,'highres')
}

function onPlayerReady(event) {
   event.target.stopVideo();
}

function onPlayerStateChange(event) {
    if (event.data == 0){
        player.seekTo(0)
        player.stopVideo()
    }
}

function removePlayer(){

    $('#videoWrapper').fadeOut(800, function(){
        $('#youtube').fadeOut(200,function(){
            $('#youtube-close').fadeOut(1000)
        })
        player.stopVideo()
    })
}

$(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
        removePlayer()
    }
});
