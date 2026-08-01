let songName=document.querySelector("#song-name")
let songArtist=document.querySelector("#song-artist")
let songImage=document.querySelector(".song-image")
let playPauseImage=document.querySelector("#play-pause")
let volumeRange=document.querySelector("#volume-range")
let volumeImg=document.querySelector("#volume-img")
let songRange=document.querySelector("#song-duration")
let currentTimeText=document.querySelector("#current-time")
let totalTimeText=document.querySelector("#total-time")
let musicAnim=document.querySelector("#musicanim")
let playlistImg=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let playlistSong=document.querySelectorAll(".playlist-song")
let index=0;
let playingSong=false;
let track=document.createElement("audio")
function formatTime(seconds){
    if(!isFinite(seconds)) return "0:00";
    let mins=Math.floor(seconds/60);
    let secs=Math.floor(seconds%60);
    return `${mins}:${secs<10?"0":""}${secs}`;
}
let songs=[
    {
        name:"Rafta Rafta",
        path:"img/Rafta Rafta.mp3",
        image:"img/song1.jpg",
        artist:"Atif Aslam"
    },
    {
        name:"Kun Faya Kun",
        path:"img/Kun Faya Kun.mp3",
        image:"img/song2.jpg",
        artist:"A.R. Rahman, Javed Ali, Mohit Chauhan"
    },
    {
        name:"Friday",
        path:"img/Friday.mp3",
        image:"img/song3.jpg",
        artist:"Riton, Nightcrawlers, Mufasa & Hypeman"
    },
    {
        name:"Othaiyadi Pathayila",
        path:"img/Othaiyadi Pathayila.mp3",
        image:"img/song4.jpg",
        artist:"Dhibu Ninan Thomas, Anirudh Ravichander & Arunraja Kamaraj"
    },
    {
        name:"I'm an Albatraoz",
        path:"img/I'm an Albatraoz.mp3",
        image:"img/song5.jpg",
        artist:"AronChupa"
    },{
        name:"Vaari Jaavan",
        path:"img/Vaari Jaavan.mp3",
        image:"img/song6.jpg",
        artist:"Shashwat Sachdev, Jyoti Nooran"
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
    track.currentTime=0;
    songRange.value=0;
    currentTimeText.innerHTML="0:00";
    totalTimeText.innerHTML="0:00";
    setInterval(() =>{
        songRange.max=track.duration;
        songRange.value=track.currentTime;
        currentTimeText.innerHTML=formatTime(track.currentTime);
        totalTimeText.innerHTML=formatTime(track.duration);
    },1000)
    track.loop=true; //which plays the same song again
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
    musicAnim.style.display="block";


}
function pauseSong(){
    track.pause();
    playingSong=false;
    playPauseImage.src="img/play.png";
    musicAnim.style.display="none";


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
    track.volume=volumeRange.value/100;
    if(volumeRange.value==0){
        volumeImg.src="img/mute.png";
    }
    else{
        volumeImg.src="img/volume-up.png";
    }
}
function duration(){
    track.currentTime= songRange.value;
    currentTimeText.innerHTML=formatTime(track.currentTime);
}
playlistImg.addEventListener("click",()=>{
    playlist.classList.toggle("playlist-active");
    if(playlist.classList.contains("playlist-active")){
        playlistImg.src="img/cross.png";
    }else{
        playlistImg.src="img/playlist.png";
    }
})
playlistSong.forEach((song,index)=>{
    song.addEventListener("click",()=>{
        loadTrack(index);
        playSong();
        playlist.classList.remove("playlist-active");//optional
        playlistImg.src="img/playlist.png";
    })
})