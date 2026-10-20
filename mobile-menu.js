


// Responsive mobile navigation
(function () {
    const menuButton = document.getElementById('mobile-menu-toggle');
    const navigation = document.getElementById('primary-navigation');

    if (!menuButton || !navigation) return;

    function closeMenu() {
        navigation.classList.remove('mobile-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Abrir menú de navegación');
    }

    menuButton.addEventListener('click', function () {
        const isOpen = navigation.classList.toggle('mobile-open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.setAttribute('aria-label', isOpen
            ? 'Cerrar menú de navegación'
            : 'Abrir menú de navegación');
    });

    navigation.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) closeMenu();
    });
})();
