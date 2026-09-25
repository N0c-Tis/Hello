/* =========================
   HELLO BUTTON / SCREENS
========================= */

function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(screenId);

    if (nextScreen) {
        nextScreen.classList.add("active");
    }
}


/* =========================
   HI CHARACTER SOUND
========================= */

function playHiSound() {
    const sound = document.getElementById("HiiSound");

    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
}


/* =========================
   CAT SOUND
========================= */

function playCatSound() {
    const sound = document.getElementById("catSound");

    if (sound) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
}


/* =========================
   BACKGROUND MUSIC
========================= */

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

function playMusic() {
    if (!music) return;

    music.play()
        .then(() => {
            musicButton.textContent = "🔊 Music On";
        })
        .catch(() => {
            musicButton.textContent = "🎵 Tap for Music";
        });
}

function toggleMusic() {
    if (!music) return;

    if (music.paused) {
        playMusic();
    } else {
        music.pause();
        musicButton.textContent = "🔇 Music Off";
    }
}