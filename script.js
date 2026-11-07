const INVITATION = {
  date: '2026-12-11T17:30:00-06:00'
};

function countdown() {
  const el = document.querySelector('.countdown');
  if (!el) return;
  const diff = new Date(INVITATION.date).getTime() - Date.now();
  if (diff <= 0) {
    el.innerHTML = '<p class="small-caps">¡HOY ES EL GRAN DÍA! ♡</p>';
    return;
  }
  const vals = {
    days: Math.floor(diff / 86400000),
    hours: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    seconds: Math.floor(diff / 1000) % 60
  };
  for (const [id, val] of Object.entries(vals)) {
    const node = document.getElementById(id);
    if (node) node.textContent = String(val).padStart(2, '0');
  }
}

countdown();
setInterval(countdown, 1000);

const musicToggle = document.getElementById('music-toggle');
const backgroundSong = document.getElementById('background-song');

function setMusicPlaying(isPlaying) {
  musicToggle?.classList.toggle('is-playing', isPlaying);
  musicToggle?.setAttribute('aria-pressed', String(isPlaying));
  musicToggle?.setAttribute('aria-label', isPlaying ? 'Pausar canción' : 'Reproducir canción');
}

if (musicToggle && backgroundSong) {
  backgroundSong.addEventListener('play', () => setMusicPlaying(true));
  backgroundSong.addEventListener('pause', () => setMusicPlaying(false));
  backgroundSong.addEventListener('ended', () => setMusicPlaying(false));

  musicToggle.addEventListener('click', () => {
    if (backgroundSong.paused) {
      backgroundSong.play().catch(() => {
        setMusicPlaying(false);
        musicToggle.setAttribute('aria-label', 'No se pudo reproducir la canción. Intenta de nuevo');
      });
    } else {
      backgroundSong.pause();
    }
  });
}

