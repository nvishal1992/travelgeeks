// Floating hearts on welcome screen
const welcome = document.getElementById('welcome');

function createHeart() {
  // Limit hearts on very small screens for performance
  if (window.innerWidth < 400 && document.querySelectorAll('.heart').length > 15) {
    return;
  }

  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.bottom = '-20px';
  heart.style.animationDuration = `${(Math.random() * 3 + 3).toFixed(2)}s`;
  heart.style.background = `hsl(${Math.random() * 30 + 340}, 85%, 75%)`;
  welcome.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}

const heartInterval = window.innerWidth < 400 ? 700 : 400;
setInterval(createHeart, heartInterval);

// Show diary section and hide welcome on button click
const openBtn = document.getElementById('openDiary');
const diarySection = document.getElementById('diary-section');
const welcomeSection = document.getElementById('welcome');
const backBtn = document.getElementById('backBtn');

openBtn.addEventListener('click', () => {
  diarySection.classList.add('active');
  diarySection.setAttribute('aria-hidden', 'false');
  welcomeSection.style.display = 'none';
});

backBtn.addEventListener('click', () => {
  diarySection.classList.remove('active');
  diarySection.setAttribute('aria-hidden', 'true');
  welcomeSection.style.display = 'flex';
});
