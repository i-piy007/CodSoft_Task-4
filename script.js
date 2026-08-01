let songName=document.querySelector("#song-name")
let songArtist=document.querySelector("#song-artist")
let songImage=document.querySelector(".song-image")
let playPauseImage=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let volumeImg=document.querySelector("#volume-img")
let songRange=document.querySelector("#song-duration")
let musicAnim=document.querySelector("#musicanim")
let index=1;
let playingSong=false;
let track=document.createElement("audio")
let songs=[
    {
        name:"Rafta Rafta",
        path:"img/song1.mp3",
        image:"img/song1.jpg",
        artist:"Atif Aslam"
    },
    {
        name:"Kun Faya Kun",
        path:"img/song2.mp3",
        image:"img/song2.jpg",
        artist:"A.R. Rahman, Javed Ali, Mohit Chauhan"
    },
    {
        name:"Friday",
        path:"img/song3.mp3",
        image:"img/song3.jpg",
        artist:"Riton, Nightcrawlers, Mufasa & Hypeman"
    }
    // can add more songs here
]
function loadTrack(index){
    track.src=songs[index].path;
    songName.innerHTML=songs[index].name;
    songArtist.innerHTML=songs[index].artist;
    songImage.style=`background-image: url("${songs[index].image}");`
    volume();
    duration();
    setInterval(() =>{
        songRange.max=track.duration;
        songRange.value=track.currentTime;
    },1000)
    track.load();
}
loadTrack(index);

function playPause(){
    if(playingSong==false){
        playSong();
    }else{
        pauseSong();
    }
}
function playSong(){
    track.play();
    playingSong=true;
    playPauseImage.src="img/pause.png";
    musicAnime.style.display="block";


}
function pauseSong(){
    track.pause();
    playingSong=false;
    playPauseImage.src="img/play.png";
    musicAnime.style.display="none";


}
function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index);
        playSong();
    }else{
        index=0;
        loadTrack(index);
        playSong();
    }
}
function previousSong(){
    if(index>0){
        index--;
        loadTrack(index);
        playSong();
    }else{
        index=songs.length-1;
        loadTrack(index);
        playSong();
    }
}
function volume(){
    track.volume=volumneRange.value/100;
    if(volumeRange.value==0){
        volumeImg.src="img/mute.png";
    }
    else{
        volumeImg.src="img/volume-up.png";
    }
}
function Duration(){
    track.currentTime= songRange.value;
}