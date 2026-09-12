const b=document.querySelector('.menu-toggle'),n=document.querySelector('#primary-nav');
if(b&&n){
  const closeMenu=()=>{n.classList.remove('open');b.setAttribute('aria-expanded','false');b.textContent='MENU'};
  b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',String(o));b.textContent=o?'CLOSE':'MENU'});
  n.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&n.classList.contains('open')){closeMenu();b.focus()}});
}
