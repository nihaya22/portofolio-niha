const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');
const toast = document.getElementById('toast');

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const selected = btn.dataset.filter;
    cards.forEach(card => {
      const cats = card.dataset.category || '';
      card.style.display = selected === 'all' || cats.includes(selected) ? '' : 'none';
    });
  });
});

document.querySelectorAll('[data-placeholder]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    toast.textContent = `${el.dataset.placeholder} link belum diisi — tinggal ganti di index.html ♡`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
  });
});

const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☾' : '☼';
});
