document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.theme-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme-val');
            // Applying attribute using setAttribute()
            document.body.setAttribute('data-theme', theme);
            document.body.className = theme;
        });
    });
});