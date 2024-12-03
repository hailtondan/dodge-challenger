const audioButton = document.getElementById("audioButton");
const motorSound = document.getElementById("motorSound");
const video = document.getElementById("video");
("toggleMenu");
function playSound() {
    const audio = new Audio("Midias/Ronco.dodge (2).mp3");
    audio.play();
}




video.addEventListener("mouseenter", function() {
    video.play(); 
});


video.addEventListener("mouseleave", function() {
    video.pause(); 
});




let isPlaying = false;

audioButton.addEventListener("click", function() {
    if (!isPlaying) {
        motorSound.play(); 
        audioButton.innerText = "Parar o Ronco"; 
        isPlaying = true; 
    } else {
        motorSound.pause();
        motorSound.currentTime = 0;
        
        
        audioButton.innerHTML = "";
        
        
        const imgElement = document.createElement("img");
        imgElement.src = "Midias/Logo.demon.png";
        imgElement.alt = "Ronco do Motor";
        imgElement.style.width = "50px"; 
        
        
        audioButton.appendChild(imgElement);
        
        isPlaying = false;
        
    }
});

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

