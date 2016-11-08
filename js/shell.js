

var windowWidth = window.innerWidth


var sectionHeader           = document.getElementById("section_header"),
    sectinoVideo            = document.getElementById("section_video"),
    sectionVideoSelection   = document.getElementById("section_video_selection")

window.onresize = function(event) {
sectionHeader.style.height          = (window.innerHeight - sectinoVideo.offsetHeight) / 2
sectionVideoSelection.style.height  = (window.innerHeight - sectinoVideo.offsetHeight) / 2
}();
