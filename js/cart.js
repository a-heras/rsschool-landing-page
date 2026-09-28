(function () {
    const STORAGE_KEY = 'pizza-bro-cart';
    const countEl = document.getElementById('cartCount');
    const btn = document.getElementById('cartBtn');
    const dropdown = document.getElementById('cartDropdown');
    const body = document.getElementById('cartBody');
    const totalEl = document.getElementById('cartTotal');
    const clearBtn = document.getElementById('cartClear');

    let items = [];

    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        items = saved ? JSON.parse(saved) : [];
    } catch (e) {
        items = [];
    }

    function save() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch (e) {}
    }

    function updateCount() {
        if (!countEl) return;
        const total = items.reduce((sum, i) => sum + (i.qty || 1), 0);
        countEl.textContent = total;
    }

    function getTotal() {
        return items.reduce((sum, i) => sum + i.price * (i.qty || 1), 0);
    }

    function renderDropdown() {
        if (!body || !totalEl) return;

        if (items.length === 0) {
            body.innerHTML = '<div class="cart-dropdown__empty">Корзина пуста</div>';
            totalEl.textContent = '0 руб';
            return;
        }

        body.innerHTML = items.map((item, i) => `
            <div class="cart-item" data-index="${i}">
                <div class="cart-item__img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item__info">
                    <div class="cart-item__name">${item.name}</div>
                    <div class="cart-item__meta">${item.size}${item.dough ? ' · ' + item.dough : ''}</div>
                    <div class="cart-item__price">${item.price} руб</div>
                </div>
                <div class="cart-item__controls">
                    <button class="cart-item__qty-btn" type="button" data-action="dec" data-index="${i}">−</button>
                    <span class="cart-item__qty">${item.qty || 1}</span>
                    <button class="cart-item__qty-btn" type="button" data-action="inc" data-index="${i}">+</button>
                    <button class="cart-item__remove" type="button" data-action="remove" data-index="${i}" aria-label="Удалить">×</button>
                </div>
            </div>
        `).join('');

        totalEl.textContent = `${getTotal()} руб`;
    }

    function updateAll() {
        updateCount();
        save();
        renderDropdown();
    }

    function add(item) {
        const existing = items.find(i =>
            i.id === item.id &&
            i.size === item.size &&
            i.dough === item.dough
        );

        if (existing) {
            existing.qty = (existing.qty || 1) + 1;
        } else {
            items.push({ ...item, qty: 1 });
        }

        updateAll();
    }

    function remove(index) {
        items.splice(index, 1);
        updateAll();
    }

    function inc(index) {
        if (items[index]) {
            items[index].qty = (items[index].qty || 1) + 1;
            updateAll();
        }
    }

    function dec(index) {
        if (!items[index]) return;
        if ((items[index].qty || 1) > 1) {
            items[index].qty -= 1;
            updateAll();
        } else {
            remove(index);
        }
    }

    function clear() {
        items = [];
        updateAll();
    }

    function getAll() {
        return items.slice();
    }

    function open() {
        if (dropdown) {
            dropdown.hidden = false;
            renderDropdown();
        }
    }

    function close() {
        if (dropdown) dropdown.hidden = true;
    }

    function toggle() {
        if (!dropdown) return;
        if (dropdown.hidden) open();
        else close();
    }

    window.cart = {
        add,
        remove,
        inc,
        dec,
        clear,
        getAll,
        updateCount,
        open,
        close,
        toggle
    };

    if (btn) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggle();
        });
    }

    if (body) {
        body.addEventListener('click', (e) => {
            const actionBtn = e.target.closest('[data-action]');
            if (!actionBtn) return;

            const action = actionBtn.dataset.action;
            const index = Number(actionBtn.dataset.index);

            if (action === 'inc') inc(index);
            if (action === 'dec') dec(index);
            if (action === 'remove') remove(index);
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', () => clear());
    }

    document.addEventListener('click', (e) => {
        if (!dropdown || dropdown.hidden) return;
        if (e.target.closest('.cart-wrapper')) return;
        close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && dropdown && !dropdown.hidden) close();
    });

    if (dropdown) {
        dropdown.addEventListener('click', (e) => e.stopPropagation());
    }

    // Добавление в корзину с главной (карусель)
    document.addEventListener('click', (e) => {
        const addBtn = e.target.closest('[data-add-simple]');
        if (!addBtn) return;

        e.preventDefault();

        const id = addBtn.dataset.addSimple;
        const products = window.products || [];
        const item = products.find(p => p.id === id);

        if (!item) return;

        const size = item.sizes && item.sizes[0];
        const dough = item.dough && item.dough[0];

        add({
            id: item.id,
            name: item.name,
            image: item.image,
            size: size ? size.label : '',
            dough: dough ? dough.label : '',
            price: size ? size.price : item.price,
            qty: 1
        });
    });

    updateAll();
})();