document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides; 
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (slider && totalSlides > 1) {
        setInterval(showNextSlide, 3000); 
    }

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#f9f9f9';
            item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            item.style.transform = 'scale(1.02)';
            item.style.transition = 'all 0.3s';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = '';
            item.style.boxShadow = '';
            item.style.transform = '';
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Pesan Anda telah berhasil dikirim. Terima kasih telah menghubungi kami!');
            contactForm.reset();
        });
    }

    const navButtons = document.querySelectorAll('.btn');
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const target = button.getAttribute('href');
            if (target) {
                window.location.href = target;
                event.preventDefault();
            }
        });
    });
});
