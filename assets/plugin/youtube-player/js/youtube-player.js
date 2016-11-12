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
        playsinline = 1,
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
    document.getElementById('youtube-player').style.display = "block"
    document.getElementById('youtube-player').style.top = "0"
    player.loadVideoById(id,0,'highres')

}

function onPlayerReady(event) {
   event.target.stopVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == -1){
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

function removePlayer(){
    document.getElementById('youtube-player').style.display = "none"
}
