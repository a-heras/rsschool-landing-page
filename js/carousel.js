(function () {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrev');
    const nextBtn = document.getElementById('carouselNext');

    if (!track || !prevBtn || !nextBtn) return;

    const slides = track.querySelectorAll('.carousel__slide');
    const total = slides.length;
    if (total === 0) return;

    const dots = document.querySelectorAll('.carousel__dot');
    let currentIndex = 0;

    function update() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        slides.forEach((slide, i) => {
            slide.classList.toggle('carousel__slide--active', i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('carousel__dot--active', i === currentIndex);
            dot.setAttribute('aria-selected', String(i === currentIndex));
        });
    }

    function goTo(index) {
        currentIndex = (index + total) % total;
        update();
    }

    function next() {
        goTo(currentIndex + 1);
    }

    function prev() {
        goTo(currentIndex - 1);
    }

    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => goTo(i));
    });

    document.addEventListener('keydown', e => {
        if (e.target.closest('input, textarea, [contenteditable]')) return;
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
    });
})();