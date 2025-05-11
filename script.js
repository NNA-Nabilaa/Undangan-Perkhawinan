function countdown(targetDate, elementId) {
  const countDownDate = new Date(targetDate).getTime();

  const update = () => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    if (distance < 0) {
      document.getElementById(elementId).innerHTML = "Hari Bahagia Telah Tiba!";
      return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(elementId).innerHTML =
      `${d}h ${h}j ${m}m ${s}s`;
  };

  update();
  setInterval(update, 1000);
}

countdown("May 31, 2025 11:00:00", "countdown");
countdown("May 31, 2025 11:00:00", "footer-countdown");

function flipToNext() {
  document.querySelector('.flipbook').scrollBy({
    left: window.innerWidth,
    behavior: 'smooth'
  });
}
