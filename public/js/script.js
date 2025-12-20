async function initApp() {
    // 1. Load Components
    await Promise.all([
        loadComp('header-placeholder', '/components/header.html'),
        loadComp('footer-placeholder', '/components/footer.html')
    ]);

    // 2. Setup Logic
    setupMobileMenu();
    handleActiveState();
}

async function loadComp(id, path) {
    const el = document.getElementById(id);
    if (!el) return;
    try {
        const res = await fetch(path);
        el.innerHTML = await res.text();
    } catch (e) { console.error("Component fail:", path); }
}

function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (!btn || !menu) return;

    btn.onclick = (e) => {
        e.stopPropagation();
        if (menu.style.display === "none") {
            menu.style.display = "block";
            btn.innerHTML = '<i class="ri-close-line text-2xl"></i>';
        } else {
            menu.style.display = "none";
            btn.innerHTML = '<i class="ri-menu-line text-2xl"></i>';
        }
    };
}

function handleActiveState() {
    const path = window.location.pathname;
    // Desktop Links
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === path || (path === '/' && link.getAttribute('href') === '/index.html')) {
            link.classList.add('text-primary', 'border-b-2', 'border-primary');
        }
    });
    // Mobile Links
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('bg-gray-100', 'text-primary', 'border-l-4', 'border-primary');
        }
    });
}

window.onload = initApp;