

var windowWidth = window.innerWidth
var windowHeight = window.innerHeight


var sectionHeader   = document.getElementById("section_header"),
    sectinoVideo    = document.getElementById("section_video"),
    sectionMeta     = document.getElementById("section_meta")

sectionHeader.style.height  = (windowHeight - sectinoVideo.offsetHeight) / 2
sectionMeta.style.height    = (windowHeight - sectinoVideo.offsetHeight) / 2

console.log(windowHeight - sectinoVideo.offsetHeight)

// sectinoVideo.style.height = "50px";
