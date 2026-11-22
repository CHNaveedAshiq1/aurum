// AURUM, store logic, live clock and motion
const PRODUCTS = [
  { id:'p0', code:'AUR-N1-1962', name:'The Aurum No. 1', ref:'REF. AUR-00', price:14500, img:'img/hero-watch.jpg',
    spec:'Black lacquer dial · 18k gold · Alligator strap',
    story:'The first watch Aurum ever made, and still the one the family signs by hand. The No. 1 pairs a deep black lacquer dial with a solid 18k gold case, kept deliberately plain so the finishing does the talking.',
    inside:'Calibre A-1962, built in house with 214 parts, a 72 hour power reserve and regulation in five positions. A sapphire back shows the hand bevelled bridges and the gold rotor.',
    made:['The gold case is milled from a single billet, then polished by one pair of hands from first cut to final shine.','The dial is lacquered in nine coats, dried between each coat, and the gold markers are applied by hand under magnification.','The calibre is assembled, regulated in five positions and run for seven days before it meets the case.','A final inspection by eye and by ear closes the build, and the watchmaker signs the case back.'],
    caseSize:'40 mm', water:'50 m', dial:'Black lacquer', crystal:'Sapphire, front and back',
    straps:['Black alligator','Brown alligator','Black rubber sport'] },
  { id:'p1', code:'AUR-MR-1962', name:'Meridian Subdial', ref:'REF. AUR-01', price:9850, img:'img/watch-meridian.jpg',
    spec:'Small seconds at six · Brown alligator strap',
    story:'The Meridian moves its seconds hand to a small dial at six, the way the earliest Aurum pocket watches were laid out. It is the quietest piece in the collection, made for readers and travellers who check the time slowly.',
    inside:'Calibre A-1962 with 214 parts and a 72 hour power reserve, with the seconds train rerouted to drive the subdial at six. Regulated in five positions before casing.',
    made:['The case is milled from one billet of 18k gold and polished by a single watchmaker.','The subdial is recessed and finished with fine concentric rings, cut one at a time.','Gold markers are applied by hand under magnification, then the dial is lacquered and sealed under sapphire.','Each movement runs for seven days on the bench before final casing and inspection.'],
    caseSize:'39 mm', water:'50 m', dial:'Black lacquer, small seconds at six', crystal:'Sapphire, front and back',
    straps:['Brown alligator','Black alligator','Black rubber sport'] },
  { id:'p2', code:'AUR-SV-1962', name:'Sovereign Roman', ref:'REF. AUR-02', price:12400, img:'img/watch-sovereign.jpg',
    spec:'Roman numerals · Solid gold bracelet', featured:true,
    story:'The Sovereign is the formal heart of the collection: Roman numerals cut in solid gold and a bracelet milled from the same metal as the case. It is the piece most often chosen for anniversaries and handovers between generations.',
    inside:'Calibre A-1962, 214 parts, 72 hour power reserve, regulated in five positions. The solid gold bracelet adds 84 further hand finished links, each one polished and articulated separately.',
    made:['Case and bracelet start as one gold billet, milled, then separated and finished to match.','Each bracelet link is polished on its own and pinned by hand so the bracelet drapes without a stiff link.','Roman numerals are cut, polished and applied by hand under magnification.','The finished watch is timed for seven days, then inspected link by link before delivery.'],
    caseSize:'41 mm', water:'30 m', dial:'Black lacquer, Roman numerals', crystal:'Sapphire, front and back',
    straps:['Solid gold bracelet','Black alligator','Brown alligator'] },
  { id:'p3', code:'AUR-NC-1962', name:'Nocturne Open Heart', ref:'REF. AUR-03', price:11200, img:'img/watch-nocturne.jpg',
    spec:'Open heart aperture · Black sport strap',
    story:'The Nocturne opens a window in its dial so the balance wheel can be seen beating, the living part of the watch. It is the most technical piece in the collection, worn by people who like to watch time being made.',
    inside:'Calibre A-1962 with 214 parts and a 72 hour reserve. The balance beats at 28,800 vibrations per hour, visible through the open heart aperture and the sapphire back.',
    made:['The dial is cut for the aperture, then lacquered in nine coats so the edge stays perfectly clean.','The balance assembly is fitted and regulated in five positions with the aperture open, so nothing is hidden from the watchmaker either.','The case is milled from one gold billet and polished by one pair of hands.','A seven day bench run and a final by eye inspection close the build.'],
    caseSize:'41 mm', water:'50 m', dial:'Black lacquer, open heart aperture', crystal:'Sapphire, front and back',
    straps:['Black rubber sport','Black alligator','Brown alligator'] },
  { id:'p4', code:'AUR-RG-1962', name:'Regent Cream', ref:'REF. AUR-04', price:8650, img:'img/watch-regent.jpg',
    spec:'Cream dial · Date window · Alligator strap',
    story:'The Regent is the one cream dial in a black dial collection, a nod to the founder\u2019s own dress watch. Warm, calm and easy to read, it carries a date window at three and the slimmest case Aurum makes.',
    inside:'Calibre A-1962 with 214 parts, a 72 hour power reserve and a quick set date. Regulated in five positions and sealed under sapphire front and back.',
    made:['The cream dial is lacquered in nine coats to hold its warm tone, then the markers are applied by hand.','The slim gold case is milled from one billet and polished by a single watchmaker.','The date wheel is printed to match the dial tone exactly, so the window reads as part of the dial.','Seven days of bench timing and a final inspection complete the piece.'],
    caseSize:'38 mm', water:'30 m', dial:'Cream lacquer, date at three', crystal:'Sapphire, front and back',
    straps:['Tan alligator','Black alligator','Brown alligator'] },
  { id:'p5', code:'AUR-EC-1962', name:'Eclipse Moonphase', ref:'REF. AUR-05', price:13900, img:'img/watch-eclipse.jpg',
    spec:'Moonphase display · Navy alligator strap',
    story:'The Eclipse tracks the moon through a curved window at six, on a disc painted by hand in deep navy and gold. A full cycle takes 29.5 days, and the display stays accurate for 122 years before it needs one day of correction.',
    inside:'Calibre A-1962 with the moonphase module fitted, 214 parts in the base calibre plus the lunar train, and a 72 hour power reserve. Regulated in five positions before casing.',
    made:['The moon disc is painted by hand, two gold moons and a field of stars on deep navy.','The lunar train is assembled and set against a reference calendar before the dial is fitted.','The gold case is milled from one billet and polished by one pair of hands.','The watch runs for seven days, the moon is checked against the calendar, and the piece is signed.'],
    caseSize:'42 mm', water:'30 m', dial:'Black lacquer, moonphase at six', crystal:'Sapphire, front and back',
    straps:['Navy alligator','Black alligator','Brown alligator'] },
];
const byId = id => PRODUCTS.find(p => p.id === id);
const money = n => '$' + n.toLocaleString('en-US');
const bag = []; // product ids, one entry per item
const $ = s => document.querySelector(s);
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reduceMotion) document.body.classList.add('no-anim');

/* ---------- Render the collection ---------- */
$('#watchGrid').innerHTML = PRODUCTS.slice(1).map(p => `
  <article class="watch-card${p.featured ? ' featured' : ''}" data-tilt data-detail-card="${p.id}" tabindex="0" role="button" aria-label="View full details of ${p.name}">
    ${p.featured ? '<span class="card-badge">PIECE OF THE SEASON</span>' : ''}
    <div class="card-media"><img src="${p.img}" alt="${p.name} wristwatch" loading="lazy"></div>
    <div class="card-body">
      <p class="card-ref">${p.ref}</p>
      <h3>${p.name}</h3>
      <p class="card-spec">${p.spec}</p>
      <p class="card-price">${money(p.price)}</p>
      <button class="btn btn-add" type="button" data-add="${p.id}">ADD TO BAG</button>
      <button class="btn btn-detail" type="button" data-detail="${p.id}">VIEW DETAILS</button>
    </div>
  </article>`).join('');

/* ---------- Bag ---------- */
const toast = $('#toast');
let toastTimer;
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}
function bagTotal(){ return bag.reduce((s, id) => s + byId(id).price, 0); }
function renderBag(){
  $('#bagCount').textContent = bag.length;
  const counts = {};
  bag.forEach(id => counts[id] = (counts[id] || 0) + 1);
  $('#bagList').innerHTML = Object.keys(counts).map(id => {
    const p = byId(id);
    return `<div class="bag-item">
      <img src="${p.img}" alt="">
      <span class="bi-name">${p.name}${counts[id] > 1 ? ' × ' + counts[id] : ''}</span>
      <span class="bi-price">${money(p.price * counts[id])}</span>
      <button class="bi-remove" type="button" data-remove="${id}" aria-label="Remove one ${p.name}">×</button>
    </div>`;
  }).join('');
  $('#bagEmpty').hidden = bag.length > 0;
  $('#totalItems').textContent = bag.length;
  $('#totalPrice').textContent = money(bagTotal());
}
function addToBag(id, btn){
  bag.push(id);
  renderBag();
  const bagBtn = $('#bagBtn');
  bagBtn.classList.remove('pop'); void bagBtn.offsetWidth; bagBtn.classList.add('pop');
  if (btn) {
    const label = btn.textContent;
    btn.classList.add('added'); btn.textContent = 'ADDED';
    setTimeout(() => { btn.classList.remove('added'); btn.textContent = label; }, 1600);
  }
  showToast(`Added '${byId(id).name}' to your bag`);
}
document.addEventListener('click', e => {
  const add = e.target.closest('[data-add]');
  if (add) { addToBag(add.dataset.add, add); return; }
  const rem = e.target.closest('[data-remove]');
  if (rem) {
    const i = bag.indexOf(rem.dataset.remove);
    if (i > -1) bag.splice(i, 1);
    renderBag();
  }
});

/* ---------- Detail sheet (bottom sheet, page keeps running behind) ---------- */
const dScrim = $('#detailScrim'), dSheet = $('#detailSheet');
let detailId = null, detailStrap = 0;
function renderDetailStraps(p){
  $('#detailStraps').innerHTML = p.straps.map((s, i) =>
    `<button type="button" class="strap-btn${i === detailStrap ? ' is-active' : ''}" data-strap="${i}">${s}</button>`).join('');
  $('#detailStraps').querySelectorAll('[data-strap]').forEach(b => b.addEventListener('click', () => {
    detailStrap = +b.dataset.strap;
    $('#detailStraps').querySelectorAll('[data-strap]').forEach(x => x.classList.toggle('is-active', x === b));
  }));
}
function openDetail(id){
  const p = byId(id); if (!p) return;
  detailId = id; detailStrap = 0;
  $('#detailImg').src = p.img; $('#detailImg').alt = p.name + ' wristwatch';
  $('#detailRef').textContent = p.ref;
  $('#detailName').textContent = p.name;
  $('#detailCode').textContent = p.code + ' · CALIBRE A-1962';
  $('#detailPrice').textContent = money(p.price);
  $('#detailStory').textContent = p.story;
  $('#detailInside').textContent = p.inside;
  $('#detailMade').innerHTML = p.made.map(s => `<li>${s}</li>`).join('');
  $('#detailData').innerHTML = [
    ['Case', p.caseSize + ', solid 18k gold'], ['Dial', p.dial], ['Crystal', p.crystal],
    ['Movement', 'Calibre A-1962, 214 parts'], ['Power reserve', '72 hours'],
    ['Water resistance', p.water], ['Warranty', 'Five years'], ['Delivery', 'Free, insured, worldwide'],
  ].map(([k, v]) => `<div class="dd-row"><dt>${k}</dt><dd>${v}</dd></div>`).join('');
  renderDetailStraps(p);
  dScrim.hidden = false;
  const showSheet = () => { dScrim.classList.add('show'); dSheet.classList.add('open'); };
  requestAnimationFrame(showSheet);
  setTimeout(showSheet, 60);
  dSheet.setAttribute('aria-hidden', 'false');
}
function closeDetail(){
  if (!dSheet.classList.contains('open')) return;
  dScrim.classList.remove('show'); dSheet.classList.remove('open');
  dSheet.setAttribute('aria-hidden', 'true');
  setTimeout(() => { dScrim.hidden = true; }, 380);
}
document.addEventListener('click', e => {
  if (e.target.closest('[data-add]')) return;
  const dBtn = e.target.closest('[data-detail]');
  if (dBtn) { openDetail(dBtn.dataset.detail); return; }
  const card = e.target.closest('[data-detail-card]');
  if (card) openDetail(card.dataset.detailCard);
});
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('[data-detail-card]')) {
    e.preventDefault(); openDetail(e.target.dataset.detailCard);
  }
  if (e.key === 'Escape') closeDetail();
});
$('#detailClose').addEventListener('click', closeDetail);
dScrim.addEventListener('click', closeDetail);
$('#detailAdd').addEventListener('click', e => { if (detailId) addToBag(detailId, e.currentTarget); });

/* ---------- Bag panel ---------- */
const scrim = $('#scrim'), panel = $('#bagPanel');
function openPanel(){
  renderBag();
  scrim.hidden = false;
  requestAnimationFrame(() => { scrim.classList.add('show'); panel.classList.add('open'); });
  panel.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closePanel(){
  scrim.classList.remove('show'); panel.classList.remove('open');
  panel.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  setTimeout(() => { scrim.hidden = true; }, 380);
}
$('#bagBtn').addEventListener('click', openPanel);
$('#bagClose').addEventListener('click', closePanel);
scrim.addEventListener('click', closePanel);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });
$('#enquireBtn').addEventListener('click', () => {
  const note = $('#bagOk');
  if (bag.length === 0) {
    note.hidden = false;
    note.textContent = 'Your bag is empty. Add a piece first, and our concierge will write to you about it.';
    return;
  }
  note.hidden = false;
  note.textContent = 'Received. Our concierge will write to you about your selection within one working day.';
  showToast('Enquiry sent to the Aurum concierge');
});

/* ---------- Viewing form ---------- */
function setErr(input, errEl, msg){
  errEl.textContent = msg || '';
  input.classList.toggle('invalid', !!msg);
  return !msg;
}
$('#viewingForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = $('#vName'), email = $('#vEmail');
  const okName = setErr(name, $('#eVName'),
    /^[A-Za-z ]+$/.test(name.value.trim()) && name.value.trim().length >= 3
      ? '' : 'Please enter your full name, letters only.');
  const okEmail = setErr(email, $('#eVEmail'),
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
      ? '' : 'Please enter a valid email address.');
  const ok = $('#viewingOk');
  ok.hidden = !(okName && okEmail);
  if (okName && okEmail) showToast(`Viewing requested for ${$('#vWatch').value}`);
});

/* ---------- Heritage stat drill-downs (every breakdown sums exactly) ---------- */
const STAT_DETAILS = {
  years: { title:'64 years at the bench, era by era', totalLabel:'1962 to 2026, in total', total:'64 years',
    note:'Aurum was founded in 1962, and 2026 minus 1962 is 64. The three eras below add up to exactly that.',
    rows:[['1962 to 1988, the founding years','26 years'],['1988 to 2010, the second generation','22 years'],['2010 to 2026, the current bench','16 years']] },
  parts: { title:'214 parts in every calibre, group by group', totalLabel:'All groups, in total', total:'214 parts',
    note:'The same count the Craft section quotes for the Calibre A-1962. Every group below is counted on the bench, and the groups add up to exactly 214.',
    rows:[['Movement, Calibre A-1962','132 parts'],['Case and crown','41 parts'],['Dial and hands','18 parts'],['Strap and clasp','23 parts']] },
  hours: { title:'72 hours of power reserve, barrel by barrel', totalLabel:'Both barrels, in total', total:'72 hours',
    note:'The calibre carries two mainspring barrels that run in sequence, one after the other, so their hours add up to exactly 72.',
    rows:[['First mainspring barrel','40 hours'],['Second mainspring barrel, in sequence','32 hours']] },
};
let openStat = null;
document.querySelectorAll('[data-stat]').forEach(btn => btn.addEventListener('click', () => {
  const key = btn.dataset.stat, panel = $('#statDetail');
  if (openStat === key) {
    openStat = null; panel.hidden = true;
    btn.setAttribute('aria-expanded', 'false'); btn.classList.remove('is-active');
    return;
  }
  openStat = key;
  const d = STAT_DETAILS[key];
  $('#statDetailTitle').textContent = d.title;
  $('#statDetailRows').innerHTML = d.rows.map(([k, v]) => `<div class="sd-row"><span>${k}</span><strong>${v}</strong></div>`).join('');
  $('#statDetailTotalLabel').textContent = d.totalLabel;
  $('#statDetailTotal').textContent = d.total;
  $('#statDetailNote').textContent = d.note;
  panel.hidden = false;
  document.querySelectorAll('[data-stat]').forEach(b => {
    b.setAttribute('aria-expanded', b === btn ? 'true' : 'false');
    b.classList.toggle('is-active', b === btn);
  });
}));

/* ---------- Live clock ---------- */
(function buildMarkers(){
  const g = $('#clockMarkers');
  let html = '';
  for (let i = 0; i < 60; i++) {
    const a = i * 6 * Math.PI / 180;
    const hour = i % 5 === 0;
    const r1 = hour ? 118 : 126, r2 = 134;
    const x1 = 160 + r1 * Math.sin(a), y1 = 160 - r1 * Math.cos(a);
    const x2 = 160 + r2 * Math.sin(a), y2 = 160 - r2 * Math.cos(a);
    html += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${hour ? '#eed688' : 'rgba(201,162,39,.45)'}" stroke-width="${hour ? 3.4 : 1.4}" stroke-linecap="round"/>`;
  }
  g.innerHTML = html;
})();

const hourHand = $('#hourHand'), minHand = $('#minHand'), secHand = $('#secHand');
const digital = $('#digitalTime');
const pad = n => String(n).padStart(2, '0');
let lastSecond = -1, tickAt = 0;
function tickClock(now){
  const d = new Date();
  const ms = d.getMilliseconds();
  const s = d.getSeconds(), m = d.getMinutes(), h = d.getHours() % 12;
  if (s !== lastSecond) { lastSecond = s; tickAt = now; }
  // Mechanical tick: the second hand lands on the mark, then settles with a small wobble.
  const sinceTick = (now - tickAt) / 1000;
  const wobble = reduceMotion ? 0 : 2.6 * Math.exp(-sinceTick * 5.5) * Math.cos(sinceTick * 26);
  const secDeg = s * 6 + wobble;
  const minDeg = (m + s / 60) * 6;
  const hourDeg = (h + m / 60) * 30;
  secHand.setAttribute('transform', `rotate(${secDeg.toFixed(2)} 160 160)`);
  minHand.setAttribute('transform', `rotate(${minDeg.toFixed(2)} 160 160)`);
  hourHand.setAttribute('transform', `rotate(${hourDeg.toFixed(2)} 160 160)`);
  digital.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
  requestAnimationFrame(tickClock);
}
requestAnimationFrame(tickClock);

/* ---------- Header on scroll ---------- */
const head = $('#siteHead');
addEventListener('scroll', () => head.classList.toggle('scrolled', scrollY > 40), { passive: true });

/* ---------- 3D tilt on cards and hero watch ---------- */
if (matchMedia('(pointer: fine)').matches && !reduceMotion) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      const rx = ((e.clientY - r.top) / r.height - .5) * -6;
      const ry = ((e.clientX - r.left) / r.width - .5) * 8;
      card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    card.addEventListener('pointerleave', () => {
      card.style.transition = 'transform .7s cubic-bezier(.22,1.4,.36,1)';
      card.style.transform = '';
      setTimeout(() => card.style.transition = '', 700);
    });
  });

  const stage = $('#watchStage');
  const hero = $('#hero');
  hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - .5;
    const py = (e.clientY - r.top) / r.height - .5;
    stage.style.transform = `rotateY(${px * 10}deg) rotateX(${py * -7}deg)`;
  });
  hero.addEventListener('pointerleave', () => { stage.style.transform = ''; });
  stage.style.transition = 'transform .8s cubic-bezier(.22,1,.36,1)';
}

/* ---------- Motion (GSAP) ---------- */
if (window.gsap && !reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);
  const frame = document.querySelector('.watch-frame');
  gsap.to(frame, {
    rotateY: 7, rotateX: -2, y: -12, duration: 4.6,
    ease: 'sine.inOut', yoyo: true, repeat: -1,
    startAt: { rotateY: -7, rotateX: 2, y: 0 },
    transformPerspective: 1200
  });
  gsap.fromTo('.hero-title .w',
    { yPercent: 115, rotate: 3, opacity: 0 },
    { yPercent: 0, rotate: 0, opacity: 1, duration: 1.1, stagger: .16, ease: 'back.out(1.5)', delay: .15 });
  gsap.to('.hero .reveal', { opacity: 1, y: 0, duration: .9, stagger: .14, delay: .55, ease: 'power3.out',
    startAt: { y: 24 } });
  gsap.fromTo('.watch-stage',
    { opacity: 0, scale: .92 },
    { opacity: 1, scale: 1, duration: 1.3, delay: .3, ease: 'power3.out' });

  document.querySelectorAll('.rise-title').forEach(title => {
    const words = title.textContent.trim().split(/\s+/);
    title.innerHTML = words.map(w => `<span class="w">${w}</span>`).join(' ');
    gsap.fromTo(title.querySelectorAll('.w'),
      { yPercent: 115, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: .85, stagger: .07, ease: 'back.out(1.6)',
        scrollTrigger: { trigger: title, start: 'top 86%' } });
  });

  gsap.fromTo('.watch-card',
    { y: 70, opacity: 0, rotateX: 6 },
    { y: 0, opacity: 1, rotateX: 0, duration: .9, stagger: .12, ease: 'back.out(1.3)',
      scrollTrigger: { trigger: '.grid', start: 'top 84%' } });

  gsap.fromTo('.craft-card',
    { y: 56, opacity: 0 },
    { y: 0, opacity: 1, duration: .85, stagger: .12, ease: 'power3.out',
      scrollTrigger: { trigger: '.craft-row', start: 'top 86%' } });

  gsap.fromTo('.live-clock',
    { opacity: 0, scale: .9, rotate: -3 },
    { opacity: 1, scale: 1, rotate: 0, duration: 1.1, ease: 'back.out(1.4)',
      scrollTrigger: { trigger: '.live-clock', start: 'top 84%' } });

  // Count-up stats
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = +el.dataset.count;
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: () => gsap.fromTo(el, { innerText: 0 },
        { innerText: target, duration: 1.6, ease: 'power2.out', snap: { innerText: 1 } })
    });
  });

  // Hero parallax on the background word
  gsap.to('.hero-word', {
    yPercent: 24, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  });
} else {
  document.body.classList.add('no-gsap');
  document.querySelectorAll('[data-count]').forEach(el => el.textContent = el.dataset.count);
  if (!reduceMotion) $('#watchStage').classList.add('sway');
  else document.querySelectorAll('.reveal').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
}

renderBag();
