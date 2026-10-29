document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const studentRows = document.querySelectorAll('#studentTable tbody tr:not(#noResults)');
    const noResults = document.getElementById('noResults');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();
        let matches = 0;

        studentRows.forEach(row => {
            const text = row.innerText.toLowerCase();
            if (text.includes(query)) {
                row.style.display = '';
                matches++;
            } else {
                row.style.display = 'none';
            }
        });

        noResults.style.display = matches === 0 ? '' : 'none';
    });
});