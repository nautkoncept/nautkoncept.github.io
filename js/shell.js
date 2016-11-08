

var windowWidth = window.innerWidth


var sectionHeader   = document.getElementById("section_header"),
    sectinoVideo    = document.getElementById("section_video"),
    sectionMeta     = document.getElementById("section_meta")

window.onresize = function(event) {
sectionHeader.style.height  = (window.innerHeight - sectinoVideo.offsetHeight) / 2
sectionMeta.style.height    = (window.innerHeight - sectinoVideo.offsetHeight) / 2
}();
