// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player) after the API code downloads.



var player;

function onYouTubeIframeAPIReady(id) {
    player = new YT.Player('player', {
        height: '349',
        width: '560',
        videoId: 'b-3UgtZ0Gek',
        suggestedQuality: 'highres',
        playerVars: {
            modestbranding: 1,
            controls: 0,
            disablekb: 1,
            showinfo: 0,
            nologo: 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function loadVideo(id){
    player.loadVideoById(id,0,'highres')
    document.getElementById('overlay').style.background = "transparent"
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == 1){             // playing
        $.when($("#loader_stage")
            .delay(0)
            .fadeOut(300))
            .done(function() {
                $('body').css('overflow', 'auto')
                $('body').unbind('touchmove')
        })
        document.getElementById('overlay').style.background = "transparent"
    }
    if (event.data == -1){             // playing
        $.when($("#loader_stage")
            .delay(0)
            .fadeOut(300))
            .done(function() {
                $('body').css('overflow', 'auto')
                $('body').unbind('touchmove')
        })
    }
    if (event.data == 0){
        player.seekTo(0)
        player.stopVideo()
    }
}
function stopVideo() {
  player.stopVideo();
  $("#player").fadeOut(300)
}
