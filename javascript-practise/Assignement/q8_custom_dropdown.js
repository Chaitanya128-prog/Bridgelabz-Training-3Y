document.addEventListener('DOMContentLoaded', () => {
    const customDropdown = document.getElementById('customDropdown');
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownMenu = document.getElementById('dropdownMenu');
    const options = document.querySelectorAll('.dropdown-option');

    dropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            dropdownBtn.innerText = option.innerText;
            dropdownMenu.style.display = 'none';
        });
    });

    // Capturing phase listener to close dropdown when clicking outside
    window.addEventListener('click', (e) => {
        if (!customDropdown.contains(e.target)) {
            dropdownMenu.style.display = 'none';
        }
    }, true); // Capturing phase enabled
});