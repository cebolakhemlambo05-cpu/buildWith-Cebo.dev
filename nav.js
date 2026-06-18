// nav.js — buildWithCebo.dev
// Controls nav active state, hamburger, reveal animations and scroll shrink

document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-center a, .mobile-nav a').forEach(link => {
    const hrefPage = (link.getAttribute('href') || '').split('#')[0].split('?')[0];
    if (hrefPage === page) link.classList.add('active');
  });

  const ham = document.querySelector('.hamburger');
  const mob = document.querySelector('.mobile-nav');
  if (ham && mob) {
    const toggleMenu = () => {
      ham.classList.toggle('open');
      mob.classList.toggle('open');
      document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
    };

    ham.addEventListener('click', toggleMenu);
    mob.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      ham.classList.remove('open');
      mob.classList.remove('open');
      document.body.style.overflow = '';
    }));
  }

  window.addEventListener('scroll', () => {
    document.querySelector('nav')?.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  const revealElements = Array.from(document.querySelectorAll('.reveal'));
  if (revealElements.length > 0) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      }, { threshold: 0.09 });
      revealElements.forEach(el => observer.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('visible'));
    }

    setTimeout(() => {
      if (document.querySelectorAll('.reveal.visible').length === 0) {
        revealElements.forEach(el => el.classList.add('visible'));
      }
    }, 250);
  }
});

