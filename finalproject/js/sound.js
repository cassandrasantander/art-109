


let song = document.querySelector("#sfx");
let playBtn = document.querySelector("#play-button");
let pause = document.querySelector("#pause-button");

playBtn.addEventListener('click', function () {
    song.play();
    song.volume = .1;
})

pause.addEventListener('click', function () {
    song.pause();
})


song.onloadeddata = function(){
    playBtn.style.visibility = "visible";

}