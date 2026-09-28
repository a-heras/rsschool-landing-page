(function () {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');

    if (!burger || !nav) return;

    function openMenu() {
        nav.classList.add('nav--open');
        burger.classList.add('burger--active');
        burger.setAttribute('aria-expanded', 'true');
        document.body.classList.add('no-scroll');
    }

    function closeMenu() {
        nav.classList.remove('nav--open');
        burger.classList.remove('burger--active');
        burger.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
    }

    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = nav.classList.contains('nav--open');
        isOpen ? closeMenu() : openMenu();
    });

    nav.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeMenu();
    });

    document.addEventListener('click', e => {
        const isClickInsideNav = nav.contains(e.target);
        const isOpen = nav.classList.contains('nav--open');
        
        if (!isClickInsideNav && isOpen) {
            closeMenu();
        }
    });

    const mq = window.matchMedia('(max-width: 865px)');
    mq.addEventListener('change', (e) => {
        if (!e.matches) closeMenu();
    });
})();
