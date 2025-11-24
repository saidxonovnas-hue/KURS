// Global o'zgaruvchi: Telegram manzili
const TELEGRAM_URL = 'https://t.me/Saidxonovnas_School'; 
// Global o'zgaruvchi: To'lovni tasdiqlash sahifasi
const PAYMENT_PAGE_URL = 'payment.html'; 

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle'); 
    const mainNav = document.getElementById('mainNav'); 
    const registerForm = document.getElementById('register-form'); 

    // --- 1. Hamburger menyu funksiyasi (MUAMMO HAL QILINDI) ---
    // Bu kod register.html va index.html da ishlaydi
    if (menuToggle && mainNav) { 
        menuToggle.addEventListener('click', function () { 
            mainNav.classList.toggle('active'); 
        });
        // Menyudagi linkni bosganda yopish
        mainNav.querySelectorAll('a').forEach(link => { 
            link.addEventListener('click', () => { 
                mainNav.classList.remove('active'); 
            });
        });
    }

    // --- 2. Formani Yuborish (register.html sahifasida ishlaydi) ---
    if (registerForm) {
        registerForm.addEventListener('submit', function (e) { 
            e.preventDefault(); 

            const name = document.getElementById('user-name').value;
            const courseSelect = document.getElementById('user-course');
            const course = courseSelect.value;
            const phone = document.getElementById('user-phone').value;
            
            const selectedOption = courseSelect.options[courseSelect.selectedIndex];
            const priceUZS = selectedOption.getAttribute('data-price');
            
            const formattedPrice = new Intl.NumberFormat('uz-UZ', { 
                style: 'currency', 
                currency: 'UZS', 
                minimumFractionDigits: 0 
            }).format(priceUZS);

            // Ma'lumotlarni localStoragga saqlash
            localStorage.setItem('regName', name); 
            localStorage.setItem('regCourse', course); 
            localStorage.setItem('regPhone', phone); 
            localStorage.setItem('regPrice', formattedPrice); 
            
            // MUHIM: 50ms kutish beriladi, shunda ma'lumot saqlanib ulguradi va sahifaga o'tadi
            setTimeout(() => {
                window.location.href = PAYMENT_PAGE_URL; 
            }, 50); 
        });
    }
});