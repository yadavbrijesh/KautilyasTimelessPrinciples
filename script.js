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

// Shared list of published Timeless Principles.
// Add a new entry here when a new principle page goes live — the homepage
// "Latest Timeless Principle" section picks from this list automatically.
const TIMELESS_PRINCIPLES = [
  { num: '01', title: 'Why strong institutions matter more than strong leaders.', body: 'History celebrates great leaders. But it also teaches a quieter lesson: many states decline soon after their most extraordinary leaders disappear. Strong institutions provide the continuity individual leadership cannot.', href: 'principle-01.html' },
  { num: '02', title: 'Why readiness matters more than action.', body: 'Decisive leadership is often admired because we see only the moment of decision. We rarely see the long period of preparation that made that decision possible.', href: 'principle-02.html' },
  { num: '03', title: 'Why wise leaders choose dialogue over conflict.', body: 'Conflict often appears decisive, while dialogue is often mistaken for weakness. War was never the first instrument of statecraft — it was the last.', href: 'principle-03.html' },
  { num: '04', title: 'Internal weakness is more dangerous than external threats.', body: 'The greatest dangers to a kingdom rarely originate outside its borders. They develop quietly within — through inefficiency, indiscipline, and the gradual erosion of public confidence.', href: 'principle-04.html' },
  { num: '05', title: 'Intelligence is the first line of defence.', body: 'A ruler who remains unaware of the condition of his own kingdom, the intentions of rivals, or the sentiments of the people, is governing in darkness.', href: 'principle-05.html' },
  { num: '06', title: 'Wise leaders seek wise counsel.', body: 'Leadership is not about having all the answers. It is about asking the right people the right questions before making important decisions — and knowing that advice is only as good as the honesty behind it.', href: 'principle-06.html' },
  { num: '07', title: 'Prosperity is the foundation of stability.', body: 'When we think of national strength, we often think of military power. Acharya Kautilya looked deeper — the true strength of a nation rests upon the prosperity of its people.', href: 'principle-07.html' },
  { num: '08', title: 'Justice creates loyalty.', body: 'People obey authority. They remain loyal to justice. A ruler who governs with justice earns something that force alone could never secure — the willing support of the people.', href: 'principle-08.html' },
  { num: '09', title: 'A leader must first govern himself.', body: 'Before a ruler could govern a kingdom, command an army or administer justice, Acharya Kautilya believed he must first learn to govern himself.', href: 'principle-09.html' },
  { num: '10', title: 'Power must always serve purpose.', body: 'Power was never meant for personal glory. It existed to protect the state, preserve order and promote the prosperity of the people.', href: 'principle-10.html' },
];

// Populate the homepage's "Latest Timeless Principle" section, if present on this page.
const pfNum = document.getElementById('pfNum');
const pfTitle = document.getElementById('pfTitle');
const pfBody = document.getElementById('pfBody');
const pfLink = document.getElementById('pfLink');
if (pfNum && pfTitle && pfBody && pfLink && TIMELESS_PRINCIPLES.length) {
  // Currently set to always show the latest (last) entry in the list above.
  // To show a random principle instead, swap the line below for:
   const featured = TIMELESS_PRINCIPLES[Math.floor(Math.random() * TIMELESS_PRINCIPLES.length)];
  // const featured = TIMELESS_PRINCIPLES[TIMELESS_PRINCIPLES.length - 1];
  pfNum.innerHTML = featured.num + '<span>OF THE SERIES</span>';
  pfTitle.textContent = featured.title;
  pfBody.textContent = featured.body;
  pfLink.href = featured.href;
}


