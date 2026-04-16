// Mobile menu toggle (Interactive Element 1)
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = menuBtn.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Close menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = menuBtn.querySelector('i');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  });
});

// Countdown Timer (Interactive Element 2)
let targetTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000); // 2 days from now

function updateTimer() {
  const now = new Date().getTime();
  const distance = targetTime - now;
  
  if (distance < 0) {
    document.getElementById('days').innerText = '00';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    return;
  }
  
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById('days').innerText = days < 10 ? '0' + days : days;
  document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
  document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
  document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);

// Reset timer button
const resetBtn = document.getElementById('resetTimer');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    targetTime = new Date().getTime() + (2 * 24 * 60 * 60 * 1000);
    updateTimer();
    // Flash feedback
    resetBtn.style.transform = 'scale(0.95)';
    setTimeout(() => { resetBtn.style.transform = ''; }, 200);
  });
}

// Surprise discount button (Interactive Element 3)
const surpriseBtn = document.getElementById('surpriseBtn');
const discountMsg = document.getElementById('discountMsg');
const discountCodes = ['CASIO1974', 'G-SHOCK40', 'TOUGH25', 'LEGACY20'];

surpriseBtn.addEventListener('click', () => {
  const randomCode = discountCodes[Math.floor(Math.random() * discountCodes.length)];
  const discountValue = Math.floor(Math.random() * (35 - 15 + 1) + 15);
  
  discountMsg.innerHTML = `
    <div style="background:#ff6b3520; padding:0.8rem; border-radius:12px; margin-top:0.5rem;">
      🎉 <strong>${randomCode}</strong> 🎉<br>
      Get ${discountValue}% OFF + Free Casio Strap!
    </div>
  `;
  
  surpriseBtn.innerHTML = '<i class="fas fa-check"></i> Code Copied!';
  surpriseBtn.style.background = '#ffd93d';
  surpriseBtn.style.color = '#0a0a0a';
  
  setTimeout(() => {
    surpriseBtn.innerHTML = '<i class="fas fa-key"></i> Reveal Hidden Deal';
    surpriseBtn.style.background = '#ff6b35';
    surpriseBtn.style.color = '#0a0a0a';
  }, 3000);
});

// Shop button interaction
const shopBtn = document.getElementById('shopBtn');
if (shopBtn) {
  shopBtn.addEventListener('click', () => {
    alert('⚡ CASIO ChronoMaster Pre-order Live! ⚡\n\nLimited Edition: Only 1974 units worldwide.\nFree 5-year warranty + Engraving included.');
  });
}

// Watch trailer button
const trailerBtn = document.getElementById('watchTrailerBtn');
if (trailerBtn) {
  trailerBtn.addEventListener('click', () => {
    alert('📺 CASIO Legacy Trailer\n\n"Toughness since 1974 - The legend continues"\n\nFull video coming March 2026.');
  });
}

// Smooth scroll with offset for navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const elementPosition = target.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  });
});