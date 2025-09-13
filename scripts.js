// Enhanced JavaScript for improved functionality
document.addEventListener('DOMContentLoaded', function () {
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Mobile menu functionality
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    if (menuToggle && closeMenu && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.add('open');
            document.body.style.overflow = 'hidden';
        });

        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            document.body.style.overflow = 'auto';
        });

        // Close mobile menu when clicking on links
        const mobileLinks = document.querySelectorAll('#mobileMenu a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Progress bar
    const progressBar = document.getElementById("progressBar");
    if (progressBar) {
        window.onscroll = function () {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        };
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const themeToggleDesktop = document.getElementById('themeToggleDesktop');

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        const icon = document.querySelector('#themeToggle i, #themeToggleDesktop i');
        if (icon) {
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', toggleTheme);
    }

    // Typing effect
    const typingText = document.getElementById('typingText');
    if (typingText) {
        const texts = [
            "Senior Backend Engineer",
            "Python & Go Developer",
            "Distributed Systems Expert",
            "Problem Solver"
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;
        let erasingDelay = 50;
        let newTextDelay = 2000;

        function type() {
            const currentText = texts[textIndex];

            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = erasingDelay;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingDelay = newTextDelay;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingDelay = 500;
            }

            setTimeout(type, typingDelay);
        }

        // Start typing effect after page loads
        setTimeout(type, 1000);
    }

    // Animation on scroll
    const animatedElements = document.querySelectorAll('.animate-fadeInUp');

    function checkScroll() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            }
        });
    }

    // Initial check and then on scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);

    // Window control buttons (for fun)
    const closeWindow = document.getElementById('closeWindow');
    const minimizeWindow = document.getElementById('minimizeWindow');
    const maximizeWindow = document.getElementById('maximizeWindow');

    if (closeWindow) {
        closeWindow.addEventListener('click', () => {
            alert('"Close window" simulation - In a real app, this would close the window');
        });
    }

    if (minimizeWindow) {
        minimizeWindow.addEventListener('click', () => {
            document.body.style.display = 'none';
            setTimeout(() => {
                document.body.style.display = 'block';
                alert('Window minimized and restored');
            }, 500);
        });
    }

    if (maximizeWindow) {
        maximizeWindow.addEventListener('click', () => {
            alert('"Maximize window" simulation - In a real app, this would maximize the window');
        });
    }
});
