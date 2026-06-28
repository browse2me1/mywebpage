// Mobile menu
function toggleMenu(){
  document.getElementById('mobMenu').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('mobMenu').classList.remove('open');
}
// Close on outside click
document.addEventListener('click',e=>{
  const menu=document.getElementById('mobMenu');
  const btn=document.getElementById('menuBtn');
  if(menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){
    menu.classList.remove('open');
  }
});

// Scroll reveal
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Nav shadow on scroll
window.addEventListener('scroll',()=>{
  document.querySelector('nav').style.background=
    window.scrollY>40?'rgba(13,27,62,0.97)':'rgba(13,27,62,0.85)';
});