/* ══════════════════════════════════════════
   PROJECT DATA — add/remove images freely
══════════════════════════════════════════ */
const PROJECTS = [
  {
    title: 'Quizonic',
    sub: 'Multi-User Quiz Platform',
    color: '#00FFB2',
    desc: 'Role-based quiz platform supporting Admin and 100+ simulated users. Built 20+ RESTful APIs with Flask, Redis caching for leaderboards & FAQs, Celery for async background tasks, and secure JWT auth with Vue.js frontend.',
    highlight: '20+ REST APIs · Redis caching · Async task processing',
    tags: ['Flask','Vue.js','Redis','Celery','SQLite','JWT','Bootstrap'],
    github: 'https://github.com/gakshatb/Quizonic',
    live: '',
    images: [
      'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    ]
  },
  {
    title: 'Household Services App',
    sub: 'Role-Based Service Management',
    color: '#00B4FF',
    desc: 'Full-stack web app supporting Admin, Professional, and Customer roles. Manages 15+ users, 50+ services, 35+ service requests with structured workflows, role-based access control, and analytics dashboards.',
    highlight: '3 user roles · Normalized DB schema · Analytics dashboard',
    tags: ['Flask','SQLAlchemy','SQLite','Bootstrap','Jinja2'],
    github: 'https://github.com/gakshatb/Home-Servicing-Platform',
    live: '',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80',
    ]
  },
  {
    title: 'Customer Click Rate Prediction',
    sub: 'End-to-End ML Pipeline',
    color: '#9B7FFF',
    desc: 'Predicted customer purchase value from 115K+ user sessions with 40+ behavioral features. Engineered bounce rate, temporal attributes. Applied Gradient Boosting, Random Forest, GridSearchCV — R² > 0.90 on validation.',
    highlight: '115K+ sessions · R² 0.90+ · GridSearchCV tuning',
    tags: ['Python','Pandas','Scikit-learn','NumPy','Matplotlib'],
    github: 'https://github.com/gakshatb/Customer-Conversion-Prediction',
    live: '',
    images: [
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&q=80',
    ]
  },
  {
    title: 'Entity Extraction from Images',
    sub: 'Hackathon ML Project',
    color: '#FF6B6B',
    desc: 'Modular image entity extraction pipeline with rigorous CSV output sanity checks, ensuring data integrity for downstream analytical integration. Processed 1M+ data points with focus on performance and clean output.',
    highlight: '1M+ data points · Modular pipeline · Computer vision',
    tags: ['Python','OpenCV','Pandas','ML Models'],
    github: 'https://github.com/gakshatb/Entity-Extraction-from-Images',
    live: '',
    images: [
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80',
    ]
  },
  {
    title: 'Music Player Web App',
    sub: 'Interactive Frontend',
    color: '#FFB347',
    desc: 'Responsive music player UI built with vanilla JavaScript, featuring dynamic theme switching, playlist navigation, and real-time UI updates. 100% client-side rendering with JSON-based state management.',
    highlight: '100% client-side · Mobile-first · Theme switching',
    tags: ['JavaScript','HTML','CSS','JSON'],
    github: 'https://github.com/gakshatb/Music-Platform',
    live: '',
    images: [
      'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&q=80',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
    ]
  },
  {
    title: 'Rock Paper Scissor',
    sub: 'Game · Python',
    color: '#FF6EB4',
    desc: 'Classic Rock-Paper-Scissors game built in Python, featuring clean game logic, score tracking, and interactive CLI. One of the earliest projects demonstrating fundamental programming concepts.',
    highlight: 'Game logic · Score tracking · CLI interface',
    tags: ['Python','CLI'],
    github: 'https://github.com/gakshatb/Rock-Paper-Scissor',
    live: '',
    images: [
      'https://images.unsplash.com/photo-1586336153858-c9d40ebd16e4?w=800&q=80',
    ]
  },
];

/* ── Render project cards ── */
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = PROJECTS.map((p, pi) => {
    const imgs = p.images.map((src, i) =>
      `<div class="proj-gallery-slide"><img src="${src}" alt="${p.title} screenshot ${i+1}" loading="lazy"/></div>`
    ).join('');
    const dots = p.images.length > 1 ? p.images.map((_, i) =>
      `<div class="proj-dot${i===0?' active':''}" data-idx="${i}" data-card="${pi}"></div>`
    ).join('') : '';
    const navBtns = p.images.length > 1
      ? `<div class="proj-gallery-nav"><button onclick="slideGallery(${pi},-1)" aria-label="Prev">‹</button><button onclick="slideGallery(${pi},1)" aria-label="Next">›</button></div>` : '';
    const countBadge = p.images.length > 1
      ? `<div class="proj-img-count" id="count-${pi}">1 / ${p.images.length}</div>` : '';
    const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    const liveLink = p.live ? `<a href="${p.live}" target="_blank" class="proj-link" style="color:${p.color};border-color:${p.color}40">Live Demo ↗</a>` : '';
    return `
    <div class="project-card reveal" style="transition-delay:${pi*.07}s" data-pi="${pi}">
      <div class="proj-gallery">
        <div class="proj-gallery-track" id="track-${pi}">${imgs}</div>
        ${navBtns}
        ${p.images.length>1?`<div class="proj-gallery-dots" id="dots-${pi}">${dots}</div>`:''}
        ${countBadge}
      </div>
      <div class="proj-body">
        <div>
          <div class="proj-header">
            <div><div class="proj-title">${p.title}</div><div class="proj-sub" style="color:${p.color}">${p.sub}</div></div>
            <div class="proj-dot-accent" style="background:${p.color};box-shadow:0 0 8px ${p.color}80"></div>
          </div>
        </div>
        <p class="proj-desc">${p.desc}</p>
        <div class="proj-highlight" style="background:${p.color}10;border-color:${p.color}40">
          <span style="color:${p.color}">${p.highlight}</span>
        </div>
        <div class="proj-tags">${tags}</div>
        <div class="proj-links">
          <a href="${p.github}" target="_blank" class="proj-link">GitHub ↗</a>
          ${liveLink}
        </div>
      </div>
    </div>`;
  }).join('');
}
renderProjects();

/* ── Gallery slider ── */
const galleryState = {};
function slideGallery(pi, dir) {
  const proj = PROJECTS[pi];
  if (!galleryState[pi]) galleryState[pi] = 0;
  galleryState[pi] = (galleryState[pi] + dir + proj.images.length) % proj.images.length;
  const idx = galleryState[pi];
  const track = document.getElementById('track-'+pi);
  if (track) track.style.transform = `translateX(-${idx*100}%)`;
  const dotsEl = document.getElementById('dots-'+pi);
  if (dotsEl) dotsEl.querySelectorAll('.proj-dot').forEach((d,i) => d.classList.toggle('active', i===idx));
  const countEl = document.getElementById('count-'+pi);
  if (countEl) countEl.textContent = `${idx+1} / ${proj.images.length}`;
}
document.addEventListener('click', e => {
  const dot = e.target.closest('.proj-dot');
  if (dot) {
    const pi = +dot.dataset.card, idx = +dot.dataset.idx;
    galleryState[pi] = idx;
    slideGallery(pi, 0);
  }
});

/* ── Touch swipe for galleries ── */
let touchStart = null;
document.addEventListener('touchstart', e => {
  const gal = e.target.closest('.proj-gallery');
  if (gal) { const card = gal.closest('.project-card'); touchStart = { x: e.touches[0].clientX, pi: +card.dataset.pi }; }
});
document.addEventListener('touchend', e => {
  if (!touchStart) return;
  const dx = e.changedTouches[0].clientX - touchStart.x;
  if (Math.abs(dx) > 40) slideGallery(touchStart.pi, dx < 0 ? 1 : -1);
  touchStart = null;
});

/* ══════════════════════════════════════════
   TYPEWRITER
══════════════════════════════════════════ */
const phrases = ['Software Engineer & DATA Scientist.','Flask · Vue.js · python · SQL.','IIT Madras × Walchand Engineering.','20 repositories on GitHub.','building systems that scale.'];
let pIdx=0,cIdx=0,del=false;
const typedEl = document.getElementById('typed-text');
function typeLoop(){
  const cur = phrases[pIdx];
  if(!del){
    typedEl.textContent = cur.slice(0,++cIdx);
    if(cIdx===cur.length){del=true;setTimeout(typeLoop,2200);return;}
    setTimeout(typeLoop,55);
  } else {
    typedEl.textContent = cur.slice(0,--cIdx);
    if(cIdx===0){del=false;pIdx=(pIdx+1)%phrases.length;setTimeout(typeLoop,380);return;}
    setTimeout(typeLoop,28);
  }
}
setTimeout(typeLoop,900);

/* ══════════════════════════════════════════
   COINS — scroll-tied 3D flip (fully reversible)
══════════════════════════════════════════ */
const coin1 = document.getElementById('coin-1');
const coin2 = document.getElementById('coin-2');
const coinsSection = document.getElementById('coins');

function updateCoins(){
  if(!coinsSection) return;
  const rect = coinsSection.getBoundingClientRect();
  const vh = window.innerHeight;
  // progress: 0 when section bottom enters viewport bottom, 1 when section top exits viewport top
  const total = rect.height + vh;
  const traveled = vh - rect.top;
  let progress = traveled / total;
  progress = Math.max(0, Math.min(1, progress));

  // Coin 1: 0 -> 720deg (two full flips) tied directly to progress, fully reversible
  const rotY1 = progress * 720;
  coin1.style.transform = `rotateY(${rotY1}deg) rotateX(${Math.sin(progress*Math.PI)*8}deg)`;

  // Coin 2: rotates the opposite direction and slightly offset, for visual variety
  const rotY2 = -progress * 720 + 180;
  coin2.style.transform = `rotateY(${rotY2}deg) rotateX(${Math.cos(progress*Math.PI)*8}deg)`;
}
window.addEventListener('scroll', updateCoins, { passive: true });
window.addEventListener('resize', updateCoins);
updateCoins();

/* ══════════════════════════════════════════
   SCROLL REVEALS
══════════════════════════════════════════ */
const revealObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const delay = parseFloat(e.target.style.transitionDelay||0)*1000;
      setTimeout(()=>e.target.classList.add('visible'),delay);
      revealObs.unobserve(e.target);
    }
  });
},{threshold:.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale').forEach(el=>revealObs.observe(el));

/* ══════════════════════════════════════════
   NAVBAR
══════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',scrollY>40),{passive:true});
hamburger.addEventListener('click',()=>{
  const open=mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open',open);
  hamburger.setAttribute('aria-expanded',open);
});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');hamburger.classList.remove('open');}));

/* ── Active nav link ── */
const sections=document.querySelectorAll('section[id]');
const navLinks=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  sections.forEach(s=>{if(scrollY>=s.offsetTop-100)cur=s.id});
  navLinks.forEach(a=>{
    const active=a.getAttribute('href')==='#'+cur;
    a.classList.toggle('active',active);
  });
},{passive:true});

/* ══════════════════════════════════════════
   PROGRESS BAR + BACK TO TOP
══════════════════════════════════════════ */
const pbar=document.getElementById('progress-bar');
const bTop=document.getElementById('back-top');
window.addEventListener('scroll',()=>{
  const pct=(scrollY/(document.documentElement.scrollHeight-innerHeight))*100;
  pbar.style.width=pct+'%';
  bTop.classList.toggle('visible',scrollY>400);
},{passive:true});
bTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ══════════════════════════════════════════
   CUSTOM CURSOR
══════════════════════════════════════════ */
const cdot=document.getElementById('cdot'),cring=document.getElementById('cring');
let mx=0,my=0,rx=0,ry=0;
window.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cdot.style.left=mx+'px';cdot.style.top=my+'px';},{passive:true});
function animCursor(){
  rx+=(mx-rx)*.12;ry+=(my-ry)*.12;
  cring.style.left=rx+'px';cring.style.top=ry+'px';
  requestAnimationFrame(animCursor);
}
animCursor();
document.querySelectorAll('a,button,.project-card,.gate-card,.cert-card,.edu-card,.exp-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>cring.classList.add('hovering'));
  el.addEventListener('mouseleave',()=>cring.classList.remove('hovering'));
});

/* ══════════════════════════════════════════
   CONTACT FORM → GOOGLE SHEETS
   HOW TO SET UP:
   1. Open Google Sheets → Extensions → Apps Script
   2. Paste the doPost(e) function below, deploy as Web App (Anyone)
   3. Copy the Web App URL and replace SHEET_URL below
══════════════════════════════════════════ */
const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwCVPH6CNbAKTCjnq0TD1sXir5aYpJMJ9xyFcfqyYEK7zqpSNi4KX8IFpkJYvmR65KNpg/exec';
/* Apps Script code to paste:
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  sheet.appendRow([
    new Date(), data.name, data.email, data.phone,
    data.company, data.subject, data.message
  ]);
  return ContentService.createTextOutput(JSON.stringify({status:'ok'}))
    .setMimeType(ContentService.MimeType.JSON);
}
*/
const form=document.getElementById('contact-form');
const btnText=document.getElementById('btn-text');
const formBtn=document.getElementById('form-btn');
const successMsg=document.getElementById('form-success');
const errorMsg=document.getElementById('form-error');

form.addEventListener('submit',async e=>{
  e.preventDefault();
  successMsg.classList.remove('success');
  errorMsg.classList.remove('error');
  successMsg.style.display='none';
  errorMsg.style.display='none';
  const name=document.getElementById('f-name').value.trim();
  const email=document.getElementById('f-email').value.trim();
  const subject=document.getElementById('f-subject').value;
  const message=document.getElementById('f-msg').value.trim();
  if(!name||!email||!subject||!message){
    errorMsg.textContent='❌ Please fill in all required fields.';
    errorMsg.classList.add('error');
    errorMsg.style.display='flex';return;
  }
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
    errorMsg.textContent='❌ Please enter a valid email address.';
    errorMsg.classList.add('error');
    errorMsg.style.display='flex';return;
  }
  formBtn.disabled=true;
  btnText.textContent='Sending…';
  const payload={
    name,email,
    phone:document.getElementById('f-phone').value.trim(),
    company:document.getElementById('f-company').value.trim(),
    subject,message,
    timestamp:new Date().toISOString()
  };
  try{
    /* If SHEET_URL is not set, simulate success for demo */
    if(SHEET_URL.includes('PASTE_YOUR')){
      await new Promise(r=>setTimeout(r,1200));
      form.reset();
      successMsg.classList.add('success');
      successMsg.style.display='flex';
    } else {
      await fetch(SHEET_URL,{
        method:'POST',
        mode:'no-cors',
        headers:{'Content-Type':'text/plain;charset=utf-8'},
        body:JSON.stringify(payload)
      });
      /* no-cors responses are always "opaque" — we can't read status,
         so if fetch didn't throw, we treat it as success */
      form.reset();
      successMsg.classList.add('success');
      successMsg.style.display='flex';
    }
  } catch(err){
    errorMsg.textContent='❌ Could not send. Please email gakshatb@gmail.com directly.';
    errorMsg.classList.add('error');
    errorMsg.style.display='flex';
  } finally {
    formBtn.disabled=false;
    btnText.textContent='Send Message ✉';
  }
});

/* ══════════════════════════════════════════
   PROJECT CARD HOVER BORDER
══════════════════════════════════════════ */
document.querySelectorAll('.project-card').forEach((card,i)=>{
  const c=PROJECTS[i]?.color||'#00FFB2';
  card.addEventListener('mouseenter',()=>card.style.borderColor=c+'50');
  card.addEventListener('mouseleave',()=>card.style.borderColor='');
});

/* Re-attach after render */
setTimeout(()=>{
  document.querySelectorAll('.project-card').forEach((card,i)=>{
    const c=PROJECTS[i]?.color||'#00FFB2';
    card.addEventListener('mouseenter',()=>{card.style.borderColor=c+'50';cring.classList.add('hovering')});
    card.addEventListener('mouseleave',()=>{card.style.borderColor='';cring.classList.remove('hovering')});
  });
},200);
