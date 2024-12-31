// Select the 'h2' element
let h2 = document.querySelector('h2');

// Select the element with class 'container'
let container = document.querySelector('.container');

// Select the audio element
let audio = document.querySelector('#background-audio');

// Toggle the 'newyear' class on the 'container' element 
// and the 'active' class on the 'h2' element when 'h2' is clicked
h2.onclick = function() {
    // Animasi: Toggle the 'newyear' class on the container
    container.classList.toggle('newyear');

    // Animasi: Toggle the 'active' class on the h2 element
    this.classList.toggle('active');

    // Audio: Check if audio is playing or not
    if (audio.paused) {
        audio.play(); // Start playing audio
        console.log("Audio is playing");
    } else {
        audio.pause(); // Pause the audio if already playing
        console.log("Audio is paused");
    }
};
