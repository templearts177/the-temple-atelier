document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const t=document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}}));

const layer=document.querySelector('.menu-layer');
const toggle=document.querySelector('.menu-toggle');
const closeBtn=document.querySelector('.menu-close');
const backdrop=document.querySelector('.menu-backdrop');
let lastFocus=null;
function openMenu(){if(!layer)return;lastFocus=document.activeElement;layer.classList.add('open');layer.setAttribute('aria-hidden','false');toggle.setAttribute('aria-expanded','true');document.body.classList.add('menu-open');setTimeout(()=>closeBtn.focus(),80)}
function closeMenu(){if(!layer)return;layer.classList.remove('open');layer.setAttribute('aria-hidden','true');toggle.setAttribute('aria-expanded','false');document.body.classList.remove('menu-open');if(lastFocus)lastFocus.focus()}
toggle?.addEventListener('click',openMenu);
closeBtn?.addEventListener('click',closeMenu);
backdrop?.addEventListener('click',closeMenu);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&layer?.classList.contains('open'))closeMenu()});
