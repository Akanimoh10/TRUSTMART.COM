// MENU TOGGLE
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const toggleBtn = document.querySelector(".theme-toggle");
const countdown = document.getElementById("countdown");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
let time = 24 * 60 * 60; 

function updateTimer() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdown.textContent = `${hours}:${minutes}:${seconds}`;

    if (time > 0) {
        time--;
    }
}

setInterval(updateTimer, 1000);