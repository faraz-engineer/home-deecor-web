async function includeHTML() {
    const components = [
        { id: 'header-placeholder', file: '/components/header.html' },
        { id: 'footer-placeholder', file: '/components/footer.html' }
    ];

    for (const comp of components) {
        const element = document.getElementById(comp.id);
        if (element) {
            try {
                const response = await fetch(comp.file);
                const content = await response.text();
                element.innerHTML = content;
            } catch (err) { console.error("Error:", err); }
        }
    }

    // 1. Mobile Menu Activate Karein
    setupMobileMenu();
    // 2. Sahi Link ko Highlight Karein (Active State)
    setActiveNavLink();
}

function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
        const icon = btn.querySelector('i');
        btn.onclick = () => {
            const isHidden = menu.classList.toggle('hidden');
            icon.className = isHidden ? 'ri-menu-line text-gray-700 text-xl' : 'ri-close-line text-gray-700 text-xl';
        };
    }
}

function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');

    navLinks.forEach(link => {
        // Purani active classes hatao
        link.classList.remove('border-b-2', 'border-primary', 'text-primary');
        
        // Agar link ka path current path se match kare
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === '/index.html')) {
            link.classList.add('border-b-2', 'border-primary', 'text-primary');
        }
    });

    mobileLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('border-l-4', 'border-primary', 'bg-gray-50', 'text-primary');
        }
    });
}

window.onload = includeHTML;