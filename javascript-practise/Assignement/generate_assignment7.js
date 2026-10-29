const fs = require('fs');

const files = {
// ==========================================
// Q1: Dynamic Product List Manager
// ==========================================
"q1_product_manager.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dynamic Product List Manager</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        ul { list-style: none; padding: 0; }
        li { margin: 8px 0; padding: 8px; background: #f0f0f0; display: flex; align-items: center; gap: 10px; width: 350px; }
        .product-text { flex-grow: 1; }
        button { cursor: pointer; padding: 4px 8px; }
    </style>
</head>
<body>
    <h2>Product List Manager</h2>
    <input type="text" id="productInput" placeholder="Enter product name">
    <button id="addBtn">Add Product</button>
    <ul id="productList"></ul>
    <script src="q1_product_manager.js"></script>
</body>
</html>`,

"q1_product_manager.js": `document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('productList');
    const addBtn = document.getElementById('addBtn');
    const productInput = document.getElementById('productInput');

    // Add Product
    addBtn.addEventListener('click', () => {
        const val = productInput.value.trim();
        if (!val) return;
        const li = document.createElement('li');
        li.innerHTML = \`<span class="product-text">\${val}</span>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>\`;
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
                span.innerHTML = \`<input type="text" class="edit-input" value="\${currentText}">\`;
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
});`,

// ==========================================
// Q2: Live Character Counter with Warning Behavior
// ==========================================
"q2_character_counter.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Live Character Counter</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        textarea { width: 300px; height: 100px; display: block; margin-bottom: 10px; padding: 8px; }
        .counter { font-weight: bold; margin-bottom: 10px; }
        .warning { color: #d97706; }
        .danger { color: #dc2626; }
    </style>
</head>
<body>
    <h2>Live Character Counter (Max 100)</h2>
    <textarea id="textarea" placeholder="Start typing..."></textarea>
    <div id="counter" class="counter">100 characters remaining</div>
    <button id="resetBtn">Reset</button>
    <script src="q2_character_counter.js"></script>
</body>
</html>`,

"q2_character_counter.js": `document.addEventListener('DOMContentLoaded', () => {
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
        counter.innerText = \`\${remaining} characters remaining\`;

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
});`,

// ==========================================
// Q3: Multi-Step Form with Next/Back & Validation
// ==========================================
"q3_multistep_form.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Multi-Step Form</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .step { display: none; margin-bottom: 15px; }
        .step.active { display: block; }
        .error { color: red; font-size: 13px; margin-top: 5px; }
        button { margin-right: 5px; padding: 6px 12px; }
    </style>
</head>
<body>
    <h2>Multi-Step Registration</h2>
    <div id="formContainer">
        <div class="step active" id="step1">
            <label>Name: </label>
            <input type="text" id="name">
            <div class="error" id="error1"></div>
        </div>
        <div class="step" id="step2">
            <label>Email: </label>
            <input type="email" id="email">
            <div class="error" id="error2"></div>
        </div>
        <div class="step" id="step3">
            <label>Password: </label>
            <input type="password" id="password">
            <div class="error" id="error3"></div>
        </div>
        <button id="backBtn" style="display: none;">Back</button>
        <button id="nextBtn">Next</button>
    </div>
    <div id="summary" style="display: none;"></div>
    <script src="q3_multistep_form.js"></script>
</body>
</html>`,

"q3_multistep_form.js": `document.addEventListener('DOMContentLoaded', () => {
    let currentStep = 1;
    const totalSteps = 3;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const summary = document.getElementById('summary');

    function updateSteps() {
        for (let i = 1; i <= totalSteps; i++) {
            document.getElementById(\`step\${i}\`).classList.toggle('active', i === currentStep);
        }

        backBtn.style.display = currentStep > 1 && currentStep <= totalSteps ? 'inline-block' : 'none';
        nextBtn.innerText = currentStep === totalSteps ? 'Submit' : 'Next';

        if (currentStep > totalSteps) {
            document.getElementById('formContainer').style.display = 'none';
            summary.style.display = 'block';
            summary.innerHTML = \`<h3>Form Summary</h3>
                                 <p><strong>Name:</strong> \${nameInput.value}</p>
                                 <p><strong>Email:</strong> \${emailInput.value}</p>
                                 <p><strong>Password:</strong> ********</p>\`;
        }
    }

    function validateCurrentStep() {
        const errorDiv = document.getElementById(\`error\${currentStep}\`);
        errorDiv.innerText = '';

        if (currentStep === 1) {
            if (!nameInput.value.trim()) {
                errorDiv.innerText = 'Name is required.';
                return false;
            }
        } else if (currentStep === 2) {
            if (!emailInput.value.includes('@')) {
                errorDiv.innerText = 'Valid email containing @ is required.';
                return false;
            }
        } else if (currentStep === 3) {
            if (passwordInput.value.length < 6) {
                errorDiv.innerText = 'Password must be at least 6 characters.';
                return false;
            }
        }
        return true;
    }

    nextBtn.addEventListener('click', () => {
        if (validateCurrentStep()) {
            currentStep++;
            updateSteps();
        }
    });

    backBtn.addEventListener('click', () => {
        if (currentStep > 1) {
            currentStep--;
            updateSteps();
        }
    });
});`,

// ==========================================
// Q4: Theme Switcher Using Attribute Manipulation
// ==========================================
"q4_theme_switcher.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Theme Switcher</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 40px; transition: background 0.3s, color 0.3s; }
        body[data-theme="light"] { background-color: #ffffff; color: #111111; }
        body[data-theme="dark"] { background-color: #1e1e1e; color: #ffffff; }
        body[data-theme="blue"] { background-color: #0f172a; color: #38bdf8; }
        button { padding: 8px 16px; margin-right: 8px; cursor: pointer; }
    </style>
</head>
<body data-theme="light" class="light">
    <h2>Theme Switcher Demo</h2>
    <p>Click a button below to change the attribute data-theme on body.</p>
    <button class="theme-btn" data-theme-val="light">Light Theme</button>
    <button class="theme-btn" data-theme-val="dark">Dark Theme</button>
    <button class="theme-btn" data-theme-val="blue">Blue Theme</button>
    <script src="q4_theme_switcher.js"></script>
</body>
</html>`,

"q4_theme_switcher.js": `document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.theme-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.getAttribute('data-theme-val');
            // Applying attribute using setAttribute()
            document.body.setAttribute('data-theme', theme);
            document.body.className = theme;
        });
    });
});`,

// ==========================================
// Q5: Image Gallery with Modal Preview
// ==========================================
"q5_image_gallery_modal.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Image Gallery Modal</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; max-width: 600px; }
        .grid img { width: 100%; height: 120px; object-fit: cover; cursor: pointer; border-radius: 4px; }
        .modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: none; justify-content: center; align-items: center; }
        .modal-box { background: white; padding: 15px; border-radius: 8px; text-align: center; }
        .modal-box img { max-width: 400px; max-height: 300px; border-radius: 4px; }
    </style>
</head>
<body>
    <h2>Image Gallery Preview</h2>
    <div class="grid">
        <img class="gallery-img" src="https://picsum.photos/id/10/400/300" alt="1">
        <img class="gallery-img" src="https://picsum.photos/id/20/400/300" alt="2">
        <img class="gallery-img" src="https://picsum.photos/id/30/400/300" alt="3">
        <img class="gallery-img" src="https://picsum.photos/id/40/400/300" alt="4">
        <img class="gallery-img" src="https://picsum.photos/id/50/400/300" alt="5">
        <img class="gallery-img" src="https://picsum.photos/id/60/400/300" alt="6">
    </div>

    <div class="modal-overlay" id="modalOverlay">
        <div class="modal-box" id="modalBox">
            <img id="modalImg" src="" alt="Preview">
        </div>
    </div>
    <script src="q5_image_gallery_modal.js"></script>
</body>
</html>`,

"q5_image_gallery_modal.js": `document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBox = document.getElementById('modalBox');
    const modalImg = document.getElementById('modalImg');
    const galleryImages = document.querySelectorAll('.gallery-img');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modalOverlay.style.display = 'flex';
        });
    });

    // Close modal when clicking outside modal-box
    modalOverlay.addEventListener('click', () => {
        modalOverlay.style.display = 'none';
    });

    // Use stopPropagation so clicking inside modalBox does not close it
    modalBox.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});`,

// ==========================================
// Q6: Real-Time Table Filter Using input Event
// ==========================================
"q6_table_filter.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Real-Time Table Filter</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        input { margin-bottom: 15px; padding: 6px; width: 250px; }
        table { border-collapse: collapse; width: 400px; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: left; }
        th { background: #f0f0f0; }
    </style>
</head>
<body>
    <h2>Student Directory</h2>
    <input type="text" id="searchInput" placeholder="Search by name, branch, etc...">
    <table id="studentTable">
        <thead>
            <tr><th>Name</th><th>Branch</th><th>CGPA</th></tr>
        </thead>
        <tbody>
            <tr><td>Chaitanya</td><td>Cyber Security</td><td>8.5</td></tr>
            <tr><td>Aman</td><td>Computer Science</td><td>7.9</td></tr>
            <tr><td>Priya</td><td>Information Tech</td><td>9.1</td></tr>
            <tr><td>Rohan</td><td>Mechanical</td><td>8.0</td></tr>
            <tr id="noResults" style="display: none;"><td colspan="3">No results found</td></tr>
        </tbody>
    </table>
    <script src="q6_table_filter.js"></script>
</body>
</html>`,

"q6_table_filter.js": `document.addEventListener('DOMContentLoaded', () => {
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
});`,

// ==========================================
// Q7: Detect Mouse Path & Coordinates Logger
// ==========================================
"q7_mouse_tracker.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Mouse Path Tracker</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        #box { width: 400px; height: 400px; background: #e2e8f0; border: 2px solid #334155; position: relative; overflow: hidden; cursor: crosshair; }
        .dot { width: 10px; height: 10px; background: red; border-radius: 50%; position: absolute; pointer-events: none; }
        #coords { margin-top: 10px; font-weight: bold; }
    </style>
</head>
<body>
    <h2>Mouse Tracker (Double-click to drop red dot)</h2>
    <div id="box"></div>
    <div id="coords">ClientX: 0, ClientY: 0</div>
    <script src="q7_mouse_tracker.js"></script>
</body>
</html>`,

"q7_mouse_tracker.js": `document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('box');
    const coords = document.getElementById('coords');

    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = Math.round(e.clientX - rect.left);
        const y = Math.round(e.clientY - rect.top);
        coords.innerText = \`ClientX: \${e.clientX}, ClientY: \${e.clientY} | Box Relative: X: \${x}, Y: \${y}\`;
    });

    box.addEventListener('dblclick', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.left = \`\${x - 5}px\`;
        dot.style.top = \`\${y - 5}px\`;
        box.appendChild(dot);
    });
});`,

// ==========================================
// Q8: Custom Dropdown Using Only JavaScript
// ==========================================
"q8_custom_dropdown.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Custom Dropdown</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .dropdown { position: relative; display: inline-block; }
        .dropdown-btn { padding: 8px 16px; background: #2563eb; color: white; border: none; cursor: pointer; border-radius: 4px; }
        .dropdown-menu { display: none; position: absolute; top: 100%; left: 0; background: white; border: 1px solid #ccc; width: 150px; border-radius: 4px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); }
        .dropdown-option { padding: 8px 12px; cursor: pointer; }
        .dropdown-option:hover { background: #f1f5f9; }
    </style>
</head>
<body>
    <h2>Custom JS Dropdown (No &lt;select&gt;)</h2>
    <div class="dropdown" id="customDropdown">
        <button class="dropdown-btn" id="dropdownBtn">Select Option</button>
        <div class="dropdown-menu" id="dropdownMenu">
            <div class="dropdown-option">Option 1</div>
            <div class="dropdown-option">Option 2</div>
            <div class="dropdown-option">Option 3</div>
        </div>
    </div>
    <script src="q8_custom_dropdown.js"></script>
</body>
</html>`,

"q8_custom_dropdown.js": `document.addEventListener('DOMContentLoaded', () => {
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
});`,

// ==========================================
// Q9: Form Submit Blocker with preventDefault() and Live Errors
// ==========================================
"q9_form_submit_blocker.html": `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Submit Blocker</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; }
        .field { margin-bottom: 12px; }
        label { display: block; margin-bottom: 4px; }
        input { padding: 6px; width: 250px; }
        .error { color: red; font-size: 13px; margin-top: 2px; }
        .success { color: green; font-weight: bold; margin-top: 15px; }
    </style>
</head>
<body>
    <h2>Secure Signup Form</h2>
    <form id="myForm">
        <div class="field">
            <label>Name:</label>
            <input type="text" id="name">
            <div class="error" id="nameError"></div>
        </div>
        <div class="field">
            <label>Email:</label>
            <input type="text" id="email">
            <div class="error" id="emailError"></div>
        </div>
        <div class="field">
            <label>Password:</label>
            <input type="password" id="password">
            <div class="error" id="passwordError"></div>
        </div>
        <button type="submit">Submit</button>
    </form>
    <div id="successMsg" class="success"></div>
    <script src="q9_form_submit_blocker.js"></script>
</body>
</html>`,

"q9_form_submit_blocker.js": `document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMsg = document.getElementById('successMsg');

    // Live error clearing on input event
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim()) nameError.innerText = '';
    });

    emailInput.addEventListener('input', () => {
        if (emailInput.value.includes('@')) emailError.innerText = '';
    });

    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length >= 6) passwordError.innerText = '';
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop form submission

        let isValid = true;
        successMsg.innerText = '';

        if (!nameInput.value.trim()) {
            nameError.innerText = 'Name is required.';
            isValid = false;
        } else {
            nameError.innerText = '';
        }

        if (!emailInput.value.includes('@')) {
            emailError.innerText = 'Valid email containing @ is required.';
            isValid = false;
        } else {
            emailError.innerText = '';
        }

        if (passwordInput.value.length < 6) {
            passwordError.innerText = 'Password must be at least 6 characters.';
            isValid = false;
        } else {
            passwordError.innerText = '';
        }

        if (isValid) {
            successMsg.innerText = 'Form Submitted Successfully!';
        }
    });
});`
};

// Write files to disk
for (const [filename, content] of Object.entries(files)) {
    fs.writeFileSync(filename, content.trim(), 'utf8');
    console.log(`Created: ${filename}`);
}

console.log('\nAll Assignment 7 files successfully generated!');