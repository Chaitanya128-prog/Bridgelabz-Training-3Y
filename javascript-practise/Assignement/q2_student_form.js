const form = document.getElementById('studentForm');

const regexPatterns = {
    name: /^[A-Za-z\s]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
};

function validateField(fieldId, pattern, errorId) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(errorId);
    if (pattern.test(field.value)) {
        field.className = 'valid';
        error.style.display = 'none';
        return true;
    } else {
        field.className = 'invalid';
        error.style.display = 'block';
        return false;
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isNameValid = validateField('name', regexPatterns.name, 'nameError');
    const isEmailValid = validateField('email', regexPatterns.email, 'emailError');
    const isPhoneValid = validateField('phone', regexPatterns.phone, 'phoneError');
    const isPasswordValid = validateField('password', regexPatterns.password, 'passwordError');

    if(isNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
        alert('Registration Successful!');
    }
});