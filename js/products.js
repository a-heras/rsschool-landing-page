window.products = [
    /* ============ ПИЦЦА ============ */
    {
        id: 'pizza-margherita',
        category: 'pizza',
        name: 'Маргарита',
        desc: 'Томаты, моцарелла, базилик. Классика, которая никогда не подводит.',
        image: 'images/pizza.svg',
        weight: '30 см · 450 г',
        price: 15,
        sizes: [
            { label: '25 см', price: 12, weight: 350 },
            { label: '30 см', price: 15, weight: 450 },
            { label: '35 см', price: 18, weight: 600 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-pepperoni',
        category: 'pizza',
        name: 'Пепперони',
        desc: 'Острая салями, моцарелла, чили. Для тех, кто любит поострее.',
        image: 'images/pizza.svg',
        weight: '30 см · 480 г',
        price: 20,
        sizes: [
            { label: '25 см', price: 16, weight: 380 },
            { label: '30 см', price: 20, weight: 480 },
            { label: '35 см', price: 24, weight: 640 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-four-cheese',
        category: 'pizza',
        name: 'Четыре сыра',
        desc: 'Горгонзола, дорблю, чеддер, моцарелла. Сырный рай, бро.',
        image: 'images/pizza.svg',
        weight: '30 см · 470 г',
        price: 23,
        sizes: [
            { label: '25 см', price: 19, weight: 370 },
            { label: '30 см', price: 23, weight: 470 },
            { label: '35 см', price: 27, weight: 620 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-hawaiian',
        category: 'pizza',
        name: 'Гавайская',
        desc: 'Курица, ананас, моцарелла. Спорная, но любимая.',
        image: 'images/pizza.svg',
        weight: '30 см · 500 г',
        price: 22,
        sizes: [
            { label: '25 см', price: 18, weight: 400 },
            { label: '30 см', price: 22, weight: 500 },
            { label: '35 см', price: 26, weight: 660 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-bbq',
        category: 'pizza',
        name: 'Барбекю',
        desc: 'Курица, красный лук, соус BBQ. Дымный вкус.',
        image: 'images/pizza.svg',
        weight: '30 см · 510 г',
        price: 24,
        sizes: [
            { label: '25 см', price: 20, weight: 400 },
            { label: '30 см', price: 24, weight: 510 },
            { label: '35 см', price: 28, weight: 680 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-mushroom',
        category: 'pizza',
        name: 'Грибная',
        desc: 'Шампиньоны, моцарелла, трюфельное масло.',
        image: 'images/pizza.svg',
        weight: '30 см · 460 г',
        price: 21,
        sizes: [
            { label: '25 см', price: 17, weight: 360 },
            { label: '30 см', price: 21, weight: 460 },
            { label: '35 см', price: 25, weight: 610 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-diablo',
        category: 'pizza',
        name: 'Дьябло',
        desc: 'Салями, халапеньо, чили. Огонь, брат.',
        image: 'images/pizza.svg',
        weight: '30 см · 490 г',
        price: 25,
        sizes: [
            { label: '25 см', price: 21, weight: 390 },
            { label: '30 см', price: 25, weight: 490 },
            { label: '35 см', price: 29, weight: 650 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-veggie',
        category: 'pizza',
        name: 'Вегетарианская',
        desc: 'Перец, томаты, оливки, моцарелла. Без мяса.',
        image: 'images/pizza.svg',
        weight: '30 см · 440 г',
        price: 19,
        sizes: [
            { label: '25 см', price: 15, weight: 340 },
            { label: '30 см', price: 19, weight: 440 },
            { label: '35 см', price: 23, weight: 580 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-carbonara',
        category: 'pizza',
        name: 'Карбонара',
        desc: 'Бекон, сливочный соус, пармезан.',
        image: 'images/pizza.svg',
        weight: '30 см · 520 г',
        price: 26,
        sizes: [
            { label: '25 см', price: 22, weight: 410 },
            { label: '30 см', price: 26, weight: 520 },
            { label: '35 см', price: 30, weight: 690 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-tuna',
        category: 'pizza',
        name: 'Тунец',
        desc: 'Тунец, красный лук, каперсы.',
        image: 'images/pizza.svg',
        weight: '30 см · 470 г',
        price: 27,
        sizes: [
            { label: '25 см', price: 23, weight: 370 },
            { label: '30 см', price: 27, weight: 470 },
            { label: '35 см', price: 31, weight: 620 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-mexicana',
        category: 'pizza',
        name: 'Мексиканская',
        desc: 'Говядина, фасоль, халапеньо, чили.',
        image: 'images/pizza.svg',
        weight: '30 см · 530 г',
        price: 28,
        sizes: [
            { label: '25 см', price: 24, weight: 420 },
            { label: '30 см', price: 28, weight: 530 },
            { label: '35 см', price: 32, weight: 700 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },
    {
        id: 'pizza-ranch',
        category: 'pizza',
        name: 'Ранч',
        desc: 'Курица, бекон, соус ранч, моцарелла.',
        image: 'images/pizza.svg',
        weight: '30 см · 540 г',
        price: 26,
        sizes: [
            { label: '25 см', price: 22, weight: 430 },
            { label: '30 см', price: 26, weight: 540 },
            { label: '35 см', price: 30, weight: 710 }
        ],
        dough: [
            { label: 'Тонкое', price: 0, weight: 0 },
            { label: 'Пышное', price: 2, weight: 50 }
        ]
    },

    /* ============ НАПИТКИ ============ */
    {
        id: 'drink-lemonade',
        category: 'drinks',
        name: 'Лимонад',
        desc: 'Домашний, с мятой и лимоном.',
        image: 'images/drink-lemonade.svg',
        weight: '0,5 л',
        price: 5,
        sizes: [
            { label: '0,3 л', price: 4, weight: 300 },
            { label: '0,5 л', price: 5, weight: 500 }
        ],
        dough: []
    },
    {
        id: 'drink-cola',
        category: 'drinks',
        name: 'Кола',
        desc: 'Классика, холодная.',
        image: 'images/drink-cola.svg',
        weight: '0,5 л',
        price: 4,
        sizes: [
            { label: '0,3 л', price: 3, weight: 300 },
            { label: '0,5 л', price: 4, weight: 500 }
        ],
        dough: []
    },
    {
        id: 'drink-juice',
        category: 'drinks',
        name: 'Апельсиновый сок',
        desc: 'Свежевыжатый.',
        image: 'images/drink-juice.svg',
        weight: '0,3 л',
        price: 6,
        sizes: [
            { label: '0,3 л', price: 6, weight: 300 },
            { label: '0,5 л', price: 9, weight: 500 }
        ],
        dough: []
    },
    {
        id: 'drink-water',
        category: 'drinks',
        name: 'Вода',
        desc: 'Минеральная, без газа.',
        image: 'images/drink-water.svg',
        weight: '0,5 л',
        price: 3,
        sizes: [
            { label: '0,5 л', price: 3, weight: 500 }
        ],
        dough: []
    },
    {
        id: 'drink-tea',
        category: 'drinks',
        name: 'Чай',
        desc: 'Чёрный или зелёный.',
        image: 'images/drink-tea.svg',
        weight: '0,4 л',
        price: 3,
        sizes: [
            { label: '0,3 л', price: 3, weight: 300 },
            { label: '0,4 л', price: 4, weight: 400 }
        ],
        dough: []
    },
    {
        id: 'drink-coffee',
        category: 'drinks',
        name: 'Кофе',
        desc: 'Американо, свежесваренный.',
        image: 'images/drink-coffee.svg',
        weight: '0,3 л',
        price: 5,
        sizes: [
            { label: '0,2 л', price: 4, weight: 200 },
            { label: '0,3 л', price: 5, weight: 300 }
        ],
        dough: []
    },
    {
        id: 'drink-milkshake',
        category: 'drinks',
        name: 'Милкшейк',
        desc: 'Ванильный или шоколадный.',
        image: 'images/drink-milkshake.svg',
        weight: '0,4 л',
        price: 7,
        sizes: [
            { label: '0,3 л', price: 6, weight: 300 },
            { label: '0,4 л', price: 7, weight: 400 }
        ],
        dough: []
    },
    {
        id: 'drink-smoothie',
        category: 'drinks',
        name: 'Смузи',
        desc: 'Ягодный, без сахара.',
        image: 'images/drink-smoothie.svg',
        weight: '0,4 л',
        price: 8,
        sizes: [
            { label: '0,3 л', price: 7, weight: 300 },
            { label: '0,4 л', price: 8, weight: 400 }
        ],
        dough: []
    },

    /* ============ ДЕСЕРТЫ ============ */
    {
        id: 'dessert-tiramisu',
        category: 'desserts',
        name: 'Тирамису',
        desc: 'Классический, с маскарпоне.',
        image: 'images/dessert-tiramisu.svg',
        weight: '150 г',
        price: 8,
        sizes: [
            { label: '100 г', price: 6, weight: 100 },
            { label: '150 г', price: 8, weight: 150 }
        ],
        dough: []
    },
    {
        id: 'dessert-cheesecake',
        category: 'desserts',
        name: 'Чизкейк',
        desc: 'Нью-Йорк, с ягодным соусом.',
        image: 'images/dessert-cheesecake.svg',
        weight: '140 г',
        price: 7,
        sizes: [
            { label: '100 г', price: 5, weight: 100 },
            { label: '140 г', price: 7, weight: 140 }
        ],
        dough: []
    },
    {
        id: 'dessert-brownie',
        category: 'desserts',
        name: 'Брауни',
        desc: 'Шоколадный, с орехами.',
        image: 'images/dessert-brownie.svg',
        weight: '120 г',
        price: 6,
        sizes: [
            { label: '100 г', price: 5, weight: 100 },
            { label: '120 г', price: 6, weight: 120 }
        ],
        dough: []
    },
    {
        id: 'dessert-panna-cotta',
        category: 'desserts',
        name: 'Панна котта',
        desc: 'С ванилью и ягодами.',
        image: 'images/dessert-panna-cotta.svg',
        weight: '130 г',
        price: 7,
        sizes: [
            { label: '100 г', price: 5, weight: 100 },
            { label: '130 г', price: 7, weight: 130 }
        ],
        dough: []
    },
    {
        id: 'dessert-eclair',
        category: 'desserts',
        name: 'Эклер',
        desc: 'С заварным кремом.',
        image: 'images/dessert-eclair.svg',
        weight: '90 г',
        price: 4,
        sizes: [
            { label: '90 г', price: 4, weight: 90 }
        ],
        dough: []
    },
    {
        id: 'dessert-macaron',
        category: 'desserts',
        name: 'Макарон',
        desc: 'Миндальный, 3 шт.',
        image: 'images/dessert-macaron.svg',
        weight: '60 г',
        price: 5,
        sizes: [
            { label: '60 г', price: 5, weight: 60 }
        ],
        dough: []
    },
    {
        id: 'dessert-ice-cream',
        category: 'desserts',
        name: 'Мороженое',
        desc: 'Пломбир, 2 шарика.',
        image: 'images/dessert-ice-cream.svg',
        weight: '120 г',
        price: 5,
        sizes: [
            { label: '120 г', price: 5, weight: 120 }
        ],
        dough: []
    },
    {
        id: 'dessert-pancakes',
        category: 'desserts',
        name: 'Панкейки',
        desc: 'С кленовым сиропом.',
        image: 'images/dessert-pancakes.svg',
        weight: '180 г',
        price: 8,
        sizes: [
            { label: '180 г', price: 8, weight: 180 }
        ],
        dough: []
    }
];