document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    // Clear previous error messages
    clearErrors();

    // Get input values
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const country = document.getElementById('country').value;
    const terms = document.getElementById('terms').checked;

    let isValid = true;

    // Validate email
    if (!validateEmail(email)) {
        showError('emailError', 'Invalid email address.');
        isValid = false;
    }

    // Validate username
    if (username.length < 3) {
        showError('usernameError', 'Username must be at least 3 characters long.');
        isValid = false;
    }

    // Validate password
    if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters long.');
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // Validate gender
    if (!gender) {
        showError('genderError', 'Please select your gender.');
        isValid = false;
    }

    // Validate country
    if (country === '') {
        showError('countryError', 'Please select your country.');
        isValid = false;
    }

    // Validate terms and conditions
    if (!terms) {
        showError('termsError', 'You must agree to the terms and conditions.');
        isValid = false;
    }

    // If the form is valid, submit it
    if (isValid) {
        alert('Registration successful!');
        document.getElementById('registrationForm').reset();
    }
}

function clearErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
