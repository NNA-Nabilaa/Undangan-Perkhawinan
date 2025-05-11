// Countdown Function
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

    document.getElementById(elementId).innerHTML = `${d}h ${h}j ${m}m ${s}s`;
  };

  update();
  setInterval(update, 1000);
}

// Start both countdowns
countdown("May 31, 2025 11:00:00", "countdown");
countdown("May 31, 2025 11:00:00", "footer-countdown");

// Autoplay BGM after interaction
document.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");

  const enableAudio = () => {
    bgm.play().catch(() => {});
    document.removeEventListener("click", enableAudio);
  };

  document.addEventListener("click", enableAudio);
});

// Auto-scroll to next page every 8 seconds (horizontal flipbook)
document.addEventListener("DOMContentLoaded", () => {
  const flipbook = document.querySelector('.flipbook');
  const pages = document.querySelectorAll('.page');
  let currentPage = 0;

  setInterval(() => {
    currentPage = (currentPage + 1) % pages.length;
    pages[currentPage].scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }, 5000);
});

// Word-by-word animation inside .page
document.querySelectorAll('.page').forEach((page, index) => {
  const nodes = Array.from(page.childNodes);
  nodes.forEach((node) => {
    if (node.nodeType === 3 && node.textContent.trim().length > 0) {
      const words = node.textContent.trim().split(/\s+/);
      const spanWords = words.map((word, i) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.style.animationDelay = `${i * 0.2}s`;
        span.textContent = word + ' ';
        return span;
      });
      const wrapper = document.createElement('span');
      spanWords.forEach(w => wrapper.appendChild(w));
      page.replaceChild(wrapper, node);
    }
  });
});
