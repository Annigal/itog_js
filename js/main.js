document.addEventListener('DOMContentLoaded', () => {
    // Анимация нажатия на заголовок
    const header = document.querySelector('header h1');
    header.addEventListener('mouseover', () => {
        header.style.color = 'orange';
    });
    header.addEventListener('mouseout', () => {
        header.style.color = 'white';
    });

    // Анимация изображения
    const images = document.querySelectorAll('section img');
    images.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });

    // Анимация текста при клике
    const paragraphs = document.querySelectorAll('section p');
    paragraphs.forEach(p => {
        p.addEventListener('click', () => {
            p.style.fontSize = '1.2em';
            p.style.color = 'blue';
        });
    });

    // Плавное появление текста
    const textElements = document.querySelectorAll('section p');
    textElements.forEach(element => {
        let text = element.textContent;
        element.textContent = '';
        let i = 0;
        function typeEffect() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typeEffect, 20);
            }
        }
        typeEffect();
    });
});


