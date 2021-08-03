// Get DOM elements
const container = document.getElementById('container');
const previousBtn = document.getElementById('previous');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressBar = document.getElementById('progress-bar');
const title = document.getElementById('song-title');
const artist = document.getElementById('song-artist');
const duration = document.getElementById('song-duration');
const albumArt = document.getElementById('album-art');

// Track Array
const tracks = ["Aadat Instrumental-Bhanwaray NESCAFÉ Basement", 'Powfu - Death Bed (Lyrics) ft. beabadoobee','Heather x Eyes Blue (Lofi Remix)','Sickick - Talking to the Moon (Bruno Mars Remix)','sapientdream - Pastlives (lyrics)','XXXTENTACION - SAD!'];
console.log(tracks.length)
// Artist Array
const artists = ['Nescafe Basement','Powfu ft beabadoobee','Fran Vasilić','Sickick, Bruno Mars','sapientdream','Xxxtentacion'];
// Duuration Array 
const durations = ['10:36','2:54','3:00','1:56','2:33','2:47'];
// Index of Currently Playing Song

let trackIndex = 1;

// Load the initial track
loadTrack(tracks[trackIndex]);

// Function to load the selected track
function loadTrack(track) {
    // Update the text for the title of track
    title.innerText = track;
    // Update the src in the audio element with the audio file of the selected track
    audio.src = `music/${track}.mp3`;
    // Update the src in the img element with the image file of the selected track
    albumArt.src = `images/${track}.jpeg`;
    // Update the artist of the selected track
    artist.innerText = artists[trackIndex];
    // Update the duration of the selected track
    duration.innerText = durations[trackIndex];
};

// Function to play the track
function playTrack() {
    // Add the second class 'play' to the container
    container.classList.add('play');
    // Remove the play icon and display the pause icon instead
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    // Play the track using the audio element
    audio.play();

};

// Function to pause the track
function pauseTrack() {
    // Remove the second class 'play' from the container
    container.classList.remove('play');
    // Remove the pause icon and display the play icon instead
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
    // Pause the track using the audio element
    audio.pause();

};

// Function to shuffle the track
function shuffleTrack() {
    // to generate the random number
    shuffle =Math.round(Math.random()*5);
    // Change the value of trackIndex by shuffle to select the random track from the trackArray
    trackIndex = shuffle ;
    // Load the selected track
    loadTrack(tracks[trackIndex]);
    // Play the selected track
    playTrack();
    console.log(trackIndex)

};

// Function to switch to previous track
function prevTrack() {
    // Decrement the value of trackIndex by 1 to select the previous track from the trackArray
    trackIndex--;
    // Check if selected track index is less than 0
    if ( trackIndex < 0 ) {
        // Reassign the trackIndex to last track in the trackArray
        trackIndex = tracks.length - 1;
    };
    // Load the selected track
    loadTrack(tracks[trackIndex]);
    // Play the selected track
    playTrack();

};

// Function to switch to next track
function nextTrack() {
    // Increment the value of trackIndex by 1 to select the next track from the trackArray
    trackIndex++;
    // Check if selected track index is greater than the index of last track
    if ( trackIndex > tracks.length - 1 ) {
        // Reassign the trackIndex to last track in the trackArray
        trackIndex = 0;
    };
    // Load the selected track
    loadTrack(tracks[trackIndex]);
    // Play the selected track
    playTrack();

};

// Function to update the progress bar
function updateProgress(e) {
    // Destructure the total duration and currentTime of the audio
    const { duration, currentTime } = e.srcElement;
    // Calculate the percentage of overall audio played using currentTime and total duration
    const progressPercentage = currentTime / duration * 100;
    // Reassign width of progress bar using the progressPercentage
    progressBar.style.width = `${progressPercentage}%`;
};

// Function to set the Progress Bar
function setProgress(e) {
    // Get the overall width in px for progress bar container
    const width = this.clientWidth;
    // Get the x axis px value for the location of click on the progress bar container
    const clickLocation = e.offsetX;
    // Get the total duration of the track
    const duration = audio.duration;
    // Reassign the currentTime of audio track by calculating based on above metrics
    audio.currentTime = clickLocation / width * duration;
};

// Event Listeners
// 1. Listen for click on the play button
playBtn.addEventListener('click', () => {
    // Check if track is playing
    const isPlaying = container.classList.contains('play');
    // Conditional statement based on status of audio playback
    if (isPlaying) {
        // If the track is playing, pause the track
        pauseTrack();
    } else {
        // If the track is not playing, play the track
        playTrack();
    }
});



// 2. Listen for click on the previousBtn
previousBtn.addEventListener('click', prevTrack);

// 3. Listen for click on the nextBtn
nextBtn.addEventListener('click', nextTrack);

// 4. Listen for click on the nextBtn
shuffleBtn.addEventListener('click', shuffleTrack);

// 5. Listen for a timeupdate on audio element
audio.addEventListener('timeupdate', updateProgress);

// 6. Listen for click on the progress bar
progress.addEventListener('click', setProgress);

// 7. Listen for end of playback for current track
audio.addEventListener('ended', nextTrack);

// 8. Listen for space to resume/play the track
document.addEventListener('keyup', event => {
     // Check if track is playing
     const isPlaying = container.classList.contains('play');
     if (event.code === 'Space') {
     // Conditional statement based on status of audio playback
     if (isPlaying) {
         // If the track is playing, pause the track
         pauseTrack();
     } else {
         // If the track is not playing, play the track
         playTrack();
     }
    }
  });

// 8. Listen for arrows to play prev/next track
document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    }
    else if (e.keyCode == '40') {
        // down arrow
    }
    else if (e.keyCode == '37') {
       prevTrack();
    }
    else if (e.keyCode == '39') {
       nextTrack();
    }

}