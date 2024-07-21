// Toggel kelas aktiv
const navbarNav = document.querySelector ('.navbar-nav');
// ketika menu diklik
document.querySelector('#menubtn'). onclick = () => {

    navbarNav.classList.toggle ('active'); 
};

// Klir diluar sidebar untuk menghilangkan menu
const hamberger = document.querySelector('#menubtn');

 document.addEventListener('click', function(e) {
            if (!menubtn.contains(e.target) && !navbarNav.contains(e.target)) {
                navbarNav.classList.remove('active');
            }
        });


// Js slide sertification

document.addEventListener('DOMContentLoaded', function() {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    document.querySelector('.next').addEventListener('click', function() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % totalSlides;
        slides[currentIndex].classList.add('active');
    });
    
    document.querySelector('.prev').addEventListener('click', function() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        slides[currentIndex].classList.add('active');
    });
});
// end

 