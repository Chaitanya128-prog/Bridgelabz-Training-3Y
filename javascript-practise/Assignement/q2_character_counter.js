document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('textarea');
    const counter = document.getElementById('counter');
    const resetBtn = document.getElementById('resetBtn');
    const maxChars = 100;

    // Prevent typing beyond 0 remaining
    textarea.addEventListener('keydown', (e) => {
        const remaining = maxChars - textarea.value.length;
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Tab'];
        if (remaining <= 0 && !allowedKeys.includes(e.key) && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
        }
    });

    textarea.addEventListener('input', () => {
        if (textarea.value.length > maxChars) {
            textarea.value = textarea.value.substring(0, maxChars);
        }
        const remaining = maxChars - textarea.value.length;
        counter.innerText = `${remaining} characters remaining`;

        counter.className = 'counter';
        if (remaining <= 0) {
            counter.classList.add('danger');
        } else if (remaining <= 20) {
            counter.classList.add('warning');
        }
    });

    resetBtn.addEventListener('click', () => {
        textarea.value = '';
        counter.innerText = '100 characters remaining';
        counter.className = 'counter';
    });
});