(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('themeToggle');
    const icon = toggle ? toggle.querySelector('.theme-toggle__icon') : null;

    const saved = localStorage.getItem('theme');
    const initial = saved || 'dark';

    root.setAttribute('data-theme', initial);
    updateIcon(initial);

    if (toggle) {
        toggle.addEventListener('click', () => {
            const current = root.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';

            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateIcon(next);
        });
    }

    function updateIcon(theme) {
        if (!icon) return;
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
})();