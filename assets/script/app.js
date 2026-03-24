/**
 * app.js – shared utilities: splash, theme, navbar, scroll-reveal
 * ES7 compatible
 */

/* ── Splash screen ── */
const hideSplash = () => {
  const splash = document.getElementById('splash');
  if (!splash) return;
  setTimeout(() => splash.classList.add('hidden'), 800);
};
window.addEventListener('load', hideSplash);

/* ── Theme ── */
const THEME_KEY = 'portfolio-theme';

const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  const btn = document.getElementById('themeBtn');
  const sunSVG  = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M11.288 4.713Q11 4.425 11 4V2q0-.425.288-.712T12 1t.713.288T13 2v2q0 .425-.288.713T12 5t-.712-.288M16.95 7.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275M20 13q-.425 0-.713-.288T19 12t.288-.712T20 11h2q.425 0 .713.288T23 12t-.288.713T22 13zm-8.712 9.713Q11 22.425 11 22v-2q0-.425.288-.712T12 19t.713.288T13 20v2q0 .425-.288.713T12 23t-.712-.288M5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275m12.7 12.725l-1.4-1.425q-.275-.3-.275-.712t.275-.688t.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M2 13q-.425 0-.712-.288T1 12t.288-.712T2 11h2q.425 0 .713.288T5 12t-.288.713T4 13zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3M7.75 16.25Q6 14.5 6 12t1.75-4.25T12 6t4.25 1.75T18 12t-1.75 4.25T12 18t-4.25-1.75m7.075-1.425Q16 13.65 16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16t2.825-1.175M12 12"/></svg>`;
  const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12.075 22q-2.1 0-3.937-.8t-3.2-2.162t-2.163-3.2t-.8-3.938q0-3.1 1.713-5.625t4.587-3.7q.35-.125.725-.088t.625.238q.2.175.313.488t.112.812q.05 1.975.8 3.763T13 10.975t3.2 2.15t3.775.8q.525 0 .8.088t.45.287q.2.25.263.65t-.063.725q-1.15 2.875-3.7 4.6T12.075 22m0-2q2.2 0 4.075-1.1t2.95-3.025q-2.15-.2-4.075-1.087t-3.45-2.413t-2.425-3.45T8.075 4.85Q6.15 5.925 5.063 7.813T3.975 11.9q0 3.375 2.363 5.738T12.075 20M14.3 7.3l-1.6-1.6q-.3-.3-.3-.7t.3-.7l1.6-1.6q.3-.3.7-.3t.7.3l1.6 1.6q.3.3.3.7t-.3.7l-1.6 1.6q-.3.3-.7.3t-.7-.3m5 3l-.6-.6q-.3-.3-.3-.7t.3-.7l.6-.6q.3-.3.7-.3t.7.3l.6.6q.3.3.3.7t-.3.7l-.6.6q-.3.3-.7.3t-.7-.3"/></svg>`;
  if (btn) btn.innerHTML = theme === 'dark' ? sunSVG : moonSVG;
};

const initTheme = () => {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(saved);
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();

  const btn = document.getElementById('themeBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  /* ── Hamburger ── */
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

  /* ── Active nav link ── */
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* ── Scroll-reveal (one-time per element) ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // one-time only
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ── Skill progress bars ── */
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target.querySelector('.progress-fill');
        if (fill) fill.style.width = fill.dataset.width;
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.progress-track').forEach(el => progressObserver.observe(el));

  /* ── Typewriter effect ── */
  const typeEl = document.getElementById('typewriter');
  if (typeEl) {
    const roles  = typeEl.dataset.roles ? JSON.parse(typeEl.dataset.roles) : [];
    let ri = 0, ci = 0, deleting = false;
    const type = () => {
      const role = roles[ri];
      typeEl.textContent = deleting ? role.slice(0, ci--) : role.slice(0, ci++);
      if (!deleting && ci > role.length)      { deleting = true; setTimeout(type, 1400); return; }
      if (deleting && ci < 0)                 { deleting = false; ri = (ri + 1) % roles.length; }
      setTimeout(type, deleting ? 55 : 110);
    };
    if (roles.length) type();
  }

  /* ── Counter animation ── */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el      = entry.target;
        const target  = parseInt(el.dataset.target, 10);
        const suffix  = el.dataset.suffix || '';
        let current   = 0;
        const step    = Math.ceil(target / 60);
        const tick    = () => {
          current += step;
          if (current >= target) { el.textContent = target + suffix; return; }
          el.textContent = current + suffix;
          requestAnimationFrame(tick);
        };
        tick();
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));
});
