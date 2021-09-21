// loder
const loder = document.getElementById('loder');

function load() {
    loder.style.display = 'none';
}

// mobile menu
const nav = document.getElementById('nav');
const ham = document.querySelector('.hamburger')
const cross = document.querySelector('.cross');

ham.addEventListener('click',show);
cross.addEventListener('click',hide);

function show() {
    nav.style.transform = 'translatex(0%)';
    ham.style.display= 'none';
    cross.style.display ="block";  
}

function hide() {
    
    nav.style.transform = 'translatex(-100%)';
    cross.style.display="none"
    ham.style.display= 'block'; 
      
}