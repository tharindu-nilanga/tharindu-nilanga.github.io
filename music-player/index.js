let currentMusic = 0;

const music = document.querySelector('#audio');
const songName = document.querySelector('.name');
const currentTime = document.querySelector('.current-time')
const songDuration = document.querySelector('.song-duration');
const seekBar = document.querySelector('.seek-bar');
const playButton = document.querySelector('.play-button');
const cover = document.querySelector('.cover');
const item1 = document.querySelector('.i1');
const item2 = document.querySelector('.i2');
const item3 = document.querySelector('.i3');


playButton.addEventListener('click', () => {
    playButton.classList.toggle('pause');
    
    if(playButton.className.includes('pause')){
        music.pause();
    }else{
        
        music.play();
    }
    
    
})

//formating time in min and secs

const formatTime = (time) => {
    let min = Math.floor(time / 60);
    if(min < 10){
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if(sec < 10){
        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;
}

//setup music

const setMusic = (i) => {
    
    currentTime.innerHTML='00:00';
    seekBar.max = music.duration;
    setTimeout(() => {
        seekBar.max=music.duration;
        songDuration.innerHTML = formatTime(music.duration);
        
    }, 300);
    
    seekBar.value = 0;
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;
    
    songName.innerHTML = song.name;
    cover.style.backgroundImage = `url('${song.cover}')`;
    
    
    
    
}

setMusic(0);



item1.addEventListener('click', () => {
    setMusic(0);
    if(!playButton.className.includes('pause')){playButton.classList.toggle('pause');}
})
item2.addEventListener('click', () => {
    setMusic(1);
    if(!playButton.className.includes('pause')){playButton.classList.toggle('pause');}
})
item3.addEventListener('click', () => {
    setMusic(2);
    if(!playButton.className.includes('pause')){playButton.classList.toggle('pause');}
    
})

