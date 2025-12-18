

let song = document.querySelector("#song");
let playBtn = document.querySelector("#play-button");
let pause = document.querySelector("#pause-button");

playBtn.addEventListener('click', function () {
    song.play();
    song.volume = .5;
})

pause.addEventListener('click', function () {
    song.pause();
})


song.onloadeddata = function(){
    playBtn.style.visibility = "visible";

}

console.log("the night sky");