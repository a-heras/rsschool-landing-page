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

    const cardSelections = {};

    function getLimit() {
        return window.innerWidth <= MOBILE_BREAKPOINT ? MOBILE_LIMIT : DESKTOP_LIMIT;
    }

    function getSelection(item) {
        if (!cardSelections[item.id]) {
            cardSelections[item.id] = { size: 0, dough: 0 };
        }
        return cardSelections[item.id];
    }

    function calcCardPrice(item) {
        const sel = getSelection(item);
        const size = item.sizes && item.sizes[sel.size];
        const dough = item.dough && item.dough[sel.dough];
        return (size ? size.price : item.price) + (dough ? dough.price : 0);
    }

    function getDisplayWeight(item) {
        const sel = getSelection(item);
        const size = item.sizes && item.sizes[sel.size];
        const dough = item.dough && item.dough[sel.dough];

        if (!size) return item.weight;

        const base = typeof size.weight === 'number' ? size.weight : parseInt(size.weight, 10) || 0;
        const extra = dough && typeof dough.weight === 'number' ? dough.weight : 0;

        const isDrink = item.category === 'drinks';
        const total = base + extra;

        if (isDrink) {
            const liters = (total / 1000).toFixed(1).replace('.', ',');
            return `${size.label} · ${liters} л`;
        }

        return `${size.label} · ${total} г`;
    }

    function cardHTML(item) {
        const sel = getSelection(item);

        const sizesHTML = item.sizes && item.sizes.length
            ? `
                <div class="card__options">
                    <span class="card__options-label">Размер</span>
                    <div class="card__options-list">
                        ${item.sizes.map((s, i) => `
                            <button
                                class="card__option-btn ${i === sel.size ? 'card__option-btn--active' : ''}"
                                type="button"
                                data-id="${item.id}"
                                data-type="size"
                                data-index="${i}"
                            >${s.label}</button>
                        `).join('')}
                    </div>
                </div>
            `
            : '';

        const doughHTML = item.dough && item.dough.length
            ? `
                <div class="card__options">
                    <span class="card__options-label">Тесто</span>
                    <div class="card__options-list">
                        ${item.dough.map((d, i) => `
                            <button
                                class="card__option-btn ${i === sel.dough ? 'card__option-btn--active' : ''}"
                                type="button"
                                data-id="${item.id}"
                                data-type="dough"
                                data-index="${i}"
                            >${d.label}</button>
                        `).join('')}
                    </div>
                </div>
            `
            : '';

        return `
            <article class="card" data-id="${item.id}">
                <div class="card__img" data-open-modal>
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="card__body">
                    <h3 class="card__title" data-open-modal>${item.name}</h3>
                    <p class="card__desc" data-open-modal>${item.desc}</p>
                    ${sizesHTML}
                    ${doughHTML}
                    <div class="card__meta">
                        <span class="card__weight" data-weight="${item.id}">${getDisplayWeight(item)}</span>
                        <span class="price" data-price="${item.id}">${calcCardPrice(item)} руб</span>
                    </div>
                    <button class="btn btn--primary card__add" type="button" data-add-to-cart="${item.id}">
                        В корзину
                    </button>
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

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.card__option-btn');
        if (!btn) return;

        const id = btn.dataset.id;
        const type = btn.dataset.type;
        const index = Number(btn.dataset.index);

        if (!cardSelections[id]) cardSelections[id] = { size: 0, dough: 0 };
        cardSelections[id][type] = index;

        const card = btn.closest('.card');
        if (!card) return;

        card.querySelectorAll(`.card__option-btn[data-type="${type}"]`).forEach(b => {
            b.classList.toggle('card__option-btn--active', Number(b.dataset.index) === index);
        });

        const item = products.find(p => p.id === id);
        if (!item) return;

        const priceEl = card.querySelector(`[data-price="${id}"]`);
        if (priceEl) priceEl.textContent = `${calcCardPrice(item)} руб`;

        const weightEl = card.querySelector(`[data-weight="${id}"]`);
        if (weightEl) weightEl.textContent = getDisplayWeight(item);
    });

    document.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-add-to-cart]');
        if (!btn) return;

        e.stopPropagation();

        const id = btn.dataset.addToCart;
        const item = products.find(p => p.id === id);
        if (!item) return;

        const sel = getSelection(item);
        const size = item.sizes && item.sizes[sel.size];
        const dough = item.dough && item.dough[sel.dough];

        const cartItem = {
            id: item.id,
            name: item.name,
            image: item.image,
            size: size ? size.label : '',
            dough: dough ? dough.label : '',
            price: calcCardPrice(item),
            qty: 1
        };

        if (window.cart) window.cart.add(cartItem);
    });

    document.addEventListener('click', (e) => {
        if (e.target.closest('.card__option-btn')) return;
        if (e.target.closest('[data-add-to-cart]')) return;

        const opener = e.target.closest('[data-open-modal]');
        if (!opener) return;

        const card = opener.closest('.card');
        if (!card) return;

        const id = card.dataset.id;
        const item = products.find(p => p.id === id);
        if (!item) return;

        const sel = getSelection(item);
        if (window.modal && window.modal.open) {
            window.modal.open(item, sel);
        }
    });

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