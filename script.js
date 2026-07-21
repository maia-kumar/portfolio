// For simple enhancement, e.g., smooth scroll
document.querySelectorAll('nav ul li a').forEach(link => {
link.addEventListener('click', function(e){
const href = this.getAttribute('href');
if(href.startsWith('#')){
e.preventDefault();
document.querySelector(href).scrollIntoView({behavior: "smooth"});
}
});
});
