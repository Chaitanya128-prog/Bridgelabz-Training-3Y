document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const addBtn = document.getElementById('addBtn');
    const productInput = document.getElementById('productInput');

    // Add Product
    addBtn.addEventListener('click', () => {
        const val = productInput.value.trim();
        if (!val) return;
        const li = document.createElement('li');
        li.innerHTML = `<span class="product-text">${val}</span>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>`;
        productList.appendChild(li);
        productInput.value = '';
    });

    // Helper function to save inline edit
    function saveEdit(li, editBtn) {
        const input = li.querySelector('.edit-input');
        if (input) {
            const newText = input.value.trim() || 'Unnamed Product';
            const span = li.querySelector('.product-text');
            span.innerText = newText;
            editBtn.innerText = 'Edit';
        }
    }

    // Event Delegation on parent <ul> for Edit and Delete
    productList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        } else if (e.target.classList.contains('edit-btn')) {
            const li = e.target.parentElement;
            const span = li.querySelector('.product-text');
            
            if (e.target.innerText === 'Edit') {
                const currentText = span.innerText;
                span.innerHTML = `<input type="text" class="edit-input" value="${currentText}">`;
                const input = span.querySelector('.edit-input');
                input.focus();
                e.target.innerText = 'Save';

                // Auto-save when user clicks outside
                input.addEventListener('blur', () => {
                    saveEdit(li, e.target);
                });
            } else {
                saveEdit(li, e.target);
            }
        }
    });
});