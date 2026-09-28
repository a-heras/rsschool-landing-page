(function () {
    const products = window.products || [];

    const gridPizza = document.querySelector('.catalog__grid--pizza');
    const gridDrinks = document.querySelector('.catalog__grid--drinks');
    const gridDesserts = document.querySelector('.catalog__grid--desserts');

    if (!gridPizza || !gridDrinks || !gridDesserts) return;

    const DESKTOP_LIMIT = 8;
    const MOBILE_LIMIT = 4;
    const MOBILE_BREAKPOINT = 768;

    const state = {
        pizza: { expanded: false },
        drinks: { expanded: false },
        desserts: { expanded: false }
    };

    function getLimit() {
        return window.innerWidth <= MOBILE_BREAKPOINT ? MOBILE_LIMIT : DESKTOP_LIMIT;
    }

    function cardHTML(item) {
        return `
            <article class="card" data-id="${item.id}">
                <div class="card__img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="card__body">
                    <h3 class="card__title">${item.name}</h3>
                    <p class="card__desc">${item.desc}</p>
                    <div class="card__meta">
                        <span class="card__weight">${item.weight}</span>
                        <span class="price">${item.price} руб</span>
                    </div>
                </div>
            </article>
        `;
    }

    function renderCategory(grid, category) {
        const items = products.filter(p => p.category === category);
        const expanded = state[category].expanded;
        const limit = getLimit();
        const visible = expanded ? items : items.slice(0, limit);

        grid.innerHTML = visible.map(cardHTML).join('');

        const moreBtn = document.querySelector(`.catalog__more-btn[data-category="${category}"]`);
        if (moreBtn) {
            moreBtn.hidden = expanded || items.length <= limit;
        }
    }

    function renderAll() {
        renderCategory(gridPizza, 'pizza');
        renderCategory(gridDrinks, 'drinks');
        renderCategory(gridDesserts, 'desserts');
    }

    document.querySelectorAll('.catalog__more-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            if (category && state[category]) {
                state[category].expanded = true;
                renderAll();
            }
        });
    });

    document.querySelectorAll('input[name="category"]').forEach(radio => {
        radio.addEventListener('change', () => {
            const category = radio.value;
            if (category && state[category]) {
                state[category].expanded = false;
                renderAll();
            }
        });
    });

    let lastWidth = window.innerWidth;
    window.addEventListener('resize', () => {
        const currentWidth = window.innerWidth;
        const wasMobile = lastWidth <= MOBILE_BREAKPOINT;
        const isMobile = currentWidth <= MOBILE_BREAKPOINT;

        if (wasMobile !== isMobile) {
            state.pizza.expanded = false;
            state.drinks.expanded = false;
            state.desserts.expanded = false;
            renderAll();
        }

        lastWidth = currentWidth;
    });

    renderAll();
})();