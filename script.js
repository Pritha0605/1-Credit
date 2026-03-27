document.addEventListener('DOMContentLoaded', () => {
  const typedText = document.getElementById('typing-text');
  const words = ['learning AI models.', 'building software solutions.', 'solving complex problems.', 'growing in full stack development.'];
  let wordIndex = 0;
  let charIndex = 0;
  let forward = true;

  function type() {
    const current = words[wordIndex];
    if (forward) {
      typedText.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        forward = false;
        setTimeout(type, 1300);
        return;
      }
    } else {
      typedText.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        forward = true;
        wordIndex = (wordIndex + 1) % words.length;
      }
    }
    setTimeout(type, forward ? 100 : 50);
  }
  type();

  const sections = document.querySelectorAll('section');
  const revealElements = document.querySelectorAll('.reveal');
  const navLinks = document.querySelectorAll('.nav-link');

  function revealOnScroll() {
    const triggerBottom = window.innerHeight / 1.1;
    revealElements.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerBottom) {
        item.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  function setActiveNav() {
    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 125;
      if (window.scrollY >= sectionTop) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
    });
  }

  window.addEventListener('scroll', setActiveNav);
  setActiveNav();

  document.getElementById('mobile-toggle').addEventListener('click', () => {
    document.getElementById('nav-menu').classList.toggle('visible');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      if (link.hash !== '') {
        e.preventDefault();
        document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth < 768) {
          document.getElementById('nav-menu').classList.remove('visible');
        }
      }
    });
  });

  document.getElementById('year').textContent = new Date().getFullYear();
});
