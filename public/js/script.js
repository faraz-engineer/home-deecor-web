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
            } catch (err) {
                console.error("Component load nahi hua: ", err);
            }
        }
    }
}


window.onload = includeHTML;