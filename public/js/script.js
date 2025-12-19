// 1. Function jo Header aur Footer ko load karega
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
                if (!response.ok) throw new Error("File nahi mili");
                const content = await response.text();
                element.innerHTML = content;
            } catch (err) {
                console.error("Error loading component:", err);
            }
        }
    }

    // Header load hone ke FORAN BAAD mobile menu ko activate karein
    setupMobileMenu();
}

// 2. Mobile Menu ki Logic
function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        const menuIcon = mobileMenuButton.querySelector('i');

        // Click event listener
        mobileMenuButton.onclick = function () {
            if (mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.remove('hidden');
                menuIcon.className = 'ri-close-line text-gray-700'; // Close icon
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.className = 'ri-menu-line text-gray-700'; // Burger icon
            }
        };
    }
}

// 3. Screen load hote hi sab shuru karein
window.onload = includeHTML;