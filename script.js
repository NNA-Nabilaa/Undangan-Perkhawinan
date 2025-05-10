// Countdown Timer
const countdownDate = new Date("June 1, 2025 10:00:00").getTime();
const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "Majlis Perkahwinan Telah Bermula!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Footer Countdown Timer
const footerCountdownDate = new Date("June 1, 2025 10:00:00").getTime();
const footerCountdownElement = document.getElementById("footer-countdown");

function updateFooterCountdown() {
    const now = new Date().getTime();
    const timeLeft = footerCountdownDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    footerCountdownElement.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

    if (timeLeft < 0) {
        clearInterval(footerCountdownInterval);
        footerCountdownElement.innerHTML = "Majlis Perkahwinan Telah Bermula!";
    }
}

const footerCountdownInterval = setInterval(updateFooterCountdown, 1000);
