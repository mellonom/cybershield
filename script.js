// Анимация при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
// Определяем текущую страницу
const currentPage = window.location.pathname.split('/').pop();

// Добавляем класс 'active' к соответствующей ссылке
document.querySelectorAll('.menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
function generatePassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for(let i = 0; i < document.getElementById('length').value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  document.getElementById('password').textContent = password;
}
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
// Обновленный код для активных ссылок
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.menu a').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Анимация элементов
    const animateElements = () => {
        const elements = document.querySelectorAll('.stats-card, .threat-card');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => {
            el.style.opacity = 0;
            el.style.transform = 'translateY(20px)';
            observer.observe(el);
        });
    };

    // Переключение темы
    document.querySelector('.theme-toggle').addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });

    // Активное меню
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('.menu a').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    animateElements();
});