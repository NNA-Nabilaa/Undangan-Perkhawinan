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

    document.getElementById(elementId).innerHTML = ${d}h ${h}j ${m}m ${s}s;
  };

  update();
  setInterval(update, 1000);
}

// Start both countdowns
countdown("May 31, 2025 11:00:00", "countdown");
countdown("May 31, 2025 11:00:00", "footer-countdown");

function flipToNext() {
  document.querySelector('.flipbook').scrollBy({
    left: window.innerWidth,
    behavior: 'smooth'
  });
}

// Autoplay BGM after interaction
document.addEventListener("DOMContentLoaded", () => {
  const bgm = document.getElementById("bgm");

  const enableAudio = () => {
    bgm.play().catch(() => {});
    document.removeEventListener("click", enableAudio);
  };

  document.addEventListener("click", enableAudio);
});

// Auto-scroll to next page every 5 seconds
document.addEventListener("DOMContentLoaded", () => {
  const flipbook = document.querySelector('.flipbook');
  const pages = document.querySelectorAll('.page');
  let currentPage = 0;

  setInterval(() => {
    currentPage = (currentPage + 1) % pages.length;
    pages[currentPage].scrollIntoView({ behavior: 'smooth', inline: 'start' });
  }, 5000);
});

// Fade in each word one-by-one per page for specific elements
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".page h1, .page h2, .page h3, .page p").forEach((element) => {
    const textNodes = element.childNodes;
    
    textNodes.forEach((node) => {
      if (node.nodeType === 3 && node.textContent.trim() !== "") {
        const words = node.textContent.trim().split(/\s+/);
        const fragment = document.createDocumentFragment();
        words.forEach((word, i) => {
          const span = document.createElement("span");
          span.className = "word";
          span.textContent = word + " ";
          span.style.animationDelay = ${i * 0.2}s;
          fragment.appendChild(span);
        });
        element.replaceChild(fragment, node);
      }
    });
  });
});





document.getElementById('openBtn').addEventListener('click', () => {
  document.getElementById('front').style.display = 'none';
  document.getElementById('mainContent').style.display = 'block';
  const music = document.getElementById('bgMusic');
  music.play().catch(() => console.log("Autoplay blocked"));
});

function showSection(id) {
  const sections = document.querySelectorAll('main > section');
  sections.forEach(section => {
    section.style.display = (section.id === id) ? 'block' : 'none';
  });
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

