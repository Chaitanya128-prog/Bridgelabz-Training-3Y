document.addEventListener('DOMContentLoaded', () => {
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
});