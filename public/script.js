const toggleButtons = document.querySelectorAll('[data-collapse-toggle]');
const menu = document.getElementById('mobile-menu-2');

toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const isHidden = menu.classList.contains('hidden');

        btn.setAttribute('aria-expanded', String(isHidden)); // Actualiza aquí adentro

        if (isHidden) {
            menu.classList.remove('hidden');
            menu.classList.add('flex');
        } else {
            menu.classList.remove('flex');
            menu.classList.add('hidden');
        }
    });
});
