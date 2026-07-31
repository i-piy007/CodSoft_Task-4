let songName=document.querySelector('#song-name');
let songArtist=document.querySelector('#song-artist');
let songImage=document.querySelector('#song-image');
let index=0;
let playingSong=false;
let track=document.createElement('audio');
let songs=[
    {
        name:"Safar",
        path:"https://music.youtube.com/watch?v=W1WixN9HPIE",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYZPC4ZSbVwHH83WXjz6qg2MAvJcXilbMeSbpVFBxEYQ&s=10",
        artist:"Bhuvan Bam"
    },
    {
        name:"Kun Faya Kun",
        path:"https://music.youtube.com/watch?v=_fmA1RoHbzA&list=RDAMVM_fmA1RoHbzA",
        image:"img/song2.jpg",
        artist:"A.R. Rahman, Javed Ali, Mohit Chauhan"
    },
    // can add more songs here
]
function loadtrack(index){
    track.src=songs[index].path;
    songName.innerHTML=songs[index].name;
    songArtist.innerHTML=songs[index].artist;
    songImage.style=`background-image: url("${songs[index].image}");`
}
loadtrack(index);
