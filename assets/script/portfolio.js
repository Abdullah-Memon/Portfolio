/**
 * portfolio.js – project filter & modal logic
 */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.hidden = !match;
      });
    });
  });

  /* ── Modal ── */
  const backdrop = document.getElementById('modalBackdrop');
  const modal    = document.getElementById('modalContent');
  const closeBtn = document.getElementById('modalClose');

  const openModal = (data) => {
    document.getElementById('modalTitle').textContent       = data.title;
    document.getElementById('modalDesc').textContent        = data.desc;
    document.getElementById('modalStack').innerHTML         = data.stack.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('modalLiveLink').href           = data.live  || '#';
    document.getElementById('modalGithubLink').href         = data.github || '#';
    if (!data.live)   document.getElementById('modalLiveLink').style.display   = 'none';
    if (!data.github) document.getElementById('modalGithubLink').style.display = 'none';
    backdrop.classList.add('open');
  };

  document.querySelectorAll('[data-modal]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const card  = trigger.closest('.project-card');
      const data  = JSON.parse(card.dataset.info);
      openModal(data);
    });
  });

  const closeModal = () => backdrop.classList.remove('open');
  if (closeBtn)  closeBtn.addEventListener('click', closeModal);
  if (backdrop)  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
