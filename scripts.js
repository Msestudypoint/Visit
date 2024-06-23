document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('visible');
    }

    slides[currentIndex].classList.add('visible');
    setInterval(showNextSlide, 5000);
});
