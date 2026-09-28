(function () {
    const modal = document.getElementById('modal');
    const content = document.getElementById('modalContent');

    if (!modal || !content) return;

    let currentProduct = null;
    let selectedSize = 0;
    let selectedDough = 0;

    function calcPrice() {
        if (!currentProduct) return 0;
        const size = currentProduct.sizes[selectedSize];
        const dough = currentProduct.dough[selectedDough];
        return (size ? size.price : currentProduct.price) + (dough ? dough.price : 0);
    }

    function getDisplayWeight() {
        if (!currentProduct) return '';
        const size = currentProduct.sizes[selectedSize];
        const dough = currentProduct.dough[selectedDough];

        if (!size) return currentProduct.weight;

        const base = typeof size.weight === 'number' ? size.weight : parseInt(size.weight, 10) || 0;
        const extra = dough && typeof dough.weight === 'number' ? dough.weight : 0;

        const isDrink = currentProduct.category === 'drinks';
        const total = base + extra;

        if (isDrink) {
            const liters = (total / 1000).toFixed(1).replace('.', ',');
            return `${size.label} · ${liters} л`;
        }

        return `${size.label} · ${total} г`;
    }

    function renderContent() {
        const p = currentProduct;

        const sizesHTML = p.sizes && p.sizes.length
            ? `
                <div class="modal__option">
                    <span class="modal__option-label">Размер</span>
                    <div class="modal__option-list">
                        ${p.sizes.map((s, i) => `
                            <button
                                class="modal__option-btn ${i === selectedSize ? 'modal__option-btn--active' : ''}"
                                type="button"
                                data-type="size"
                                data-index="${i}"
                            >${s.label}</button>
                        `).join('')}
                    </div>
                </div>
            `
            : '';

        const doughHTML = p.dough && p.dough.length
            ? `
                <div class="modal__option">
                    <span class="modal__option-label">Тесто</span>
                    <div class="modal__option-list">
                        ${p.dough.map((d, i) => `
                            <button
                                class="modal__option-btn ${i === selectedDough ? 'modal__option-btn--active' : ''}"
                                type="button"
                                data-type="dough"
                                data-index="${i}"
                            >${d.label}</button>
                        `).join('')}
                    </div>
                </div>
            `
            : '';

        content.innerHTML = `
            <div class="modal__img">
                <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="modal__body">
                <h3 class="modal__title" id="modalTitle">${p.name}</h3>
                <p class="modal__desc">${p.desc}</p>
                ${sizesHTML}
                ${doughHTML}
                <div class="modal__meta">
                    <span class="modal__weight">${getDisplayWeight()}</span>
                    <span class="modal__price">${calcPrice()} руб</span>
                </div>
                <button class="btn btn--primary modal__add" type="button" data-action="add-to-cart">
                    В корзину
                </button>
            </div>
        `;
    }

    function open(product, selection) {
        currentProduct = product;
        selectedSize = selection?.size ?? 0;
        selectedDough = selection?.dough ?? 0;
        renderContent();
        modal.hidden = false;
        document.body.classList.add('no-scroll');
        document.documentElement.classList.add('no-scroll');
    }

    function close() {
        modal.hidden = true;
        currentProduct = null;
        document.body.classList.remove('no-scroll');
        document.documentElement.classList.remove('no-scroll');
    }

    content.addEventListener('click', (e) => {
        const btn = e.target.closest('.modal__option-btn');
        if (btn) {
            const type = btn.dataset.type;
            const index = Number(btn.dataset.index);

            if (type === 'size') selectedSize = index;
            if (type === 'dough') selectedDough = index;

            renderContent();
            return;
        }

        const addBtn = e.target.closest('[data-action="add-to-cart"]');
        if (addBtn && currentProduct) {
            const size = currentProduct.sizes[selectedSize];
            const dough = currentProduct.dough[selectedDough];

            const item = {
                id: currentProduct.id,
                name: currentProduct.name,
                image: currentProduct.image,
                size: size ? size.label : '',
                dough: dough ? dough.label : '',
                price: calcPrice(),
                qty: 1
            };

            if (window.cart) window.cart.add(item);
            close();
        }
    });

    modal.addEventListener('click', (e) => {
        if (e.target.closest('[data-modal-close]')) close();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.hidden) close();
    });

    window.modal = { open, close };
})();