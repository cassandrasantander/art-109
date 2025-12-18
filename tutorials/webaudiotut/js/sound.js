
let loopBeat;
let bassSynth;


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



function setup() {

bassSynth = new Tone.MembraneSynth().toMaster();

    loopBeat = new Tone.Loop(bsong, '4n');

    Tone.Transport.bpm.value = 140;
    Tone.Transport.start();
    loopBeat.start(0);
}

function bsong(time) {
    bassSynth.triggerAttackRelease('c1', '8n', time);
    console.log(time )
}
