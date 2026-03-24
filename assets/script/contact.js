/**
 * contact.js – form submission & toast notification
 */
document.addEventListener('DOMContentLoaded', () => {
  const form  = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  const showToast = (msg, success = true) => {
    toast.textContent = msg;
    toast.style.background = success ? 'var(--accent)' : 'var(--pop)';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3500);
  };

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn       = form.querySelector('[type="submit"]');
      const original  = btn.textContent;
      btn.textContent = 'Sending…';
      btn.disabled    = true;

      /* FormSubmit.co – change action attr to your email in contact.html */
      try {
        const res = await fetch(form.action, {
          method:  'POST',
          body:    new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          showToast('✅ Message sent! I\'ll get back to you soon.');
          form.reset();
        } else {
          showToast('❌ Something went wrong. Please try again.', false);
        }
      } catch {
        showToast('❌ Network error. Please try again.', false);
      } finally {
        btn.textContent = original;
        btn.disabled    = false;
      }
    });
  }

  /* ── About tab switcher (also used on about.html) ── */
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const group = btn.closest('.tab-section');
      group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      group.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });
});
