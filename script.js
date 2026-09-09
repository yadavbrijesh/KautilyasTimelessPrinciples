const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Discourage casual copying of protected text blocks.
// Note: this only blocks the easy methods (selection, right-click, Ctrl+C) —
// it does not prevent copying via view-source, reader mode, or with JS disabled.
document.querySelectorAll('.no-copy').forEach(el => {
  el.addEventListener('copy', e => e.preventDefault());
  el.addEventListener('cut', e => e.preventDefault());
  el.addEventListener('contextmenu', e => e.preventDefault());
  el.addEventListener('selectstart', e => e.preventDefault());
});

