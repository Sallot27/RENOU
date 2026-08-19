// ============================================================
// كوننا الصغير — تفاعلات الموقع
// ============================================================

/* ---------- حقل النجوم المتلألئة ---------- */
(function starfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.floor((w * h) / 9000);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.3 + 0.3,
      baseAlpha: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.015 + 0.005,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    for (const s of stars) {
      const twinkle = Math.sin(t * s.speed + s.phase) * 0.35 + 0.65;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(243, 239, 228, ${s.baseAlpha * twinkle})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();

/* ---------- قلوب عائمة برفق ---------- */
(function floatingHearts() {
  const container = document.getElementById('floating-hearts');
  if (!container) return;
  const symbols = ['❤', '✦', '♡'];

  function spawn() {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.setProperty('--drift', (Math.random() * 80 - 40) + 'px');
    heart.style.animationDuration = 9 + Math.random() * 8 + 's';
    heart.style.fontSize = 0.8 + Math.random() * 1.1 + 'rem';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 18000);
  }

  setInterval(spawn, 2200);
  spawn();
})();

/* ---------- الكشف عند التمرير ---------- */
(function scrollReveal() {
  const chapters = document.querySelectorAll('.chapter');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('in-view');
      });
    },
    { threshold: 0.2 }
  );
  chapters.forEach((c) => observer.observe(c));
})();

/* ---------- زر افتح قلبي ---------- */
(function openHeart() {
  const btn = document.getElementById('open-heart');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const letter = document.getElementById('letter');
    if (letter) letter.scrollIntoView({ behavior: 'smooth' });
  });
})();

/* ---------- تشغيل/إيقاف الموسيقى ---------- */
(function musicToggle() {
  const btn = document.getElementById('music-toggle');
  const audio = document.getElementById('bg-audio');
  if (!btn || !audio) return;

  let started = false;
  btn.addEventListener('click', () => {
    if (!started) {
      audio.volume = 0.5;
      started = true;
    }
    if (audio.paused) {
      audio.play().catch(() => {});
      btn.classList.add('playing');
    } else {
      audio.pause();
      btn.classList.remove('playing');
    }
  });
})();
