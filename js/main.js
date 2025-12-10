    // змінюємо фон карток
    const cards = document.querySelectorAll(".plant-card");
    cards.forEach(card => {
        card.style.backgroundColor = "#e8f8e0";
    });

    // додаємо новий абзац у main
    const main = document.querySelector("main");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "GrowMate — інструмент для зручного догляду за рослинами.";
    main.append(newParagraph);

    // поточна дата у футері
    const footerDate = document.querySelector('#footer-date'); 
    const today = new Date();
    footerDate.textContent = today.toLocaleDateString();

    // Кнопка з прихованою інформацією
    document.addEventListener('DOMContentLoaded', () => {
    const showMoreBtn = document.getElementById('show-more-btn');
    const moreText = document.getElementById('more-text');

    showMoreBtn.addEventListener('click', () => {
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'block';
            showMoreBtn.textContent = 'Приховати';
        } else {
            moreText.style.display = 'none';
            showMoreBtn.textContent = 'Показати більше';
        }
    });
});

// Темна тема
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme'); // додає/видаляє клас

        // Зберігаємо вибір у localStorage, щоб тема залишалася після перезавантаження
        if (document.body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    // Завантажуємо тему з localStorage при завантаженні сторінки
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
});

    // Підсвітка меню при наведенні
    document.addEventListener('DOMContentLoaded', () => {
    // вибираємо всі посилання меню
    const menuItems = document.querySelectorAll('nav a');

    menuItems.forEach(item => {
        // подія наведення миші
        item.addEventListener('mouseenter', () => {
            item.classList.add('js-highlight'); // додаємо клас JS
        });

        // подія виходу миші
        item.addEventListener('mouseleave', () => {
            item.classList.remove('js-highlight'); // видаляємо клас
        });
    });

    // Зміна розміру шрифту клавішами ArrowUp / ArrowDown
    document.addEventListener('keydown', (e) => {
        const mainContent = document.querySelector('main'); 
        let style = window.getComputedStyle(mainContent);
        let fontSize = parseInt(style.fontSize);

        if (e.key === 'ArrowUp') {
            mainContent.style.fontSize = (fontSize + 2) + 'px';
        }
        if (e.key === 'ArrowDown') {
            mainContent.style.fontSize = (fontSize - 2) + 'px';
        }
    });
});

