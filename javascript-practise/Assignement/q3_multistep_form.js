document.addEventListener('DOMContentLoaded', () => {
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
            document.getElementById(`step${i}`).classList.toggle('active', i === currentStep);
        }

        backBtn.style.display = currentStep > 1 && currentStep <= totalSteps ? 'inline-block' : 'none';
        nextBtn.innerText = currentStep === totalSteps ? 'Submit' : 'Next';

        if (currentStep > totalSteps) {
            document.getElementById('formContainer').style.display = 'none';
            summary.style.display = 'block';
            summary.innerHTML = `<h3>Form Summary</h3>
                                 <p><strong>Name:</strong> ${nameInput.value}</p>
                                 <p><strong>Email:</strong> ${emailInput.value}</p>
                                 <p><strong>Password:</strong> ********</p>`;
        }
    }

    function validateCurrentStep() {
        const errorDiv = document.getElementById(`error${currentStep}`);
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
});