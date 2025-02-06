const validUser = {
    username: 'admin',
    password: 'password123'
};

function validateLogin(event) {
    event.preventDefault();
    

    resetErrors();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    
    if (username.length < 3) {
        showError('username');
        isValid = false;
    }

   
    if (password.length < 6) {
        showError('password');
        isValid = false;
    }

    
    if (isValid) {
        checkCredentials(username, password);
    }

    return false;
}

function checkCredentials(username, password) {
  
    if (username === validUser.username && password === validUser.password) {
        showSuccess();
        setTimeout(() => {
            window.location.href = 'index.html'; // Redirect after successful login
        }, 1500);
    } else {
        showLoginError();
    }
}

function showError(field) {
    const input = document.getElementById(field);
    const error = document.getElementById(field + 'Error');
    input.classList.add('input-error');
    error.style.display = 'block';
}

function showLoginError() {
    const error = document.getElementById('loginError');
    error.style.display = 'block';
}

function showSuccess() {
    const success = document.getElementById('loginSuccess');
    success.style.display = 'block';
    // Hide the error messages if any
    document.getElementById('loginError').style.display = 'none';
}

function resetErrors() {
    // Reset all error and success messages
    const errors = document.getElementsByClassName('error-message');
    const inputs = document.getElementsByTagName('input');
    const success = document.getElementById('loginSuccess');

    for (let error of errors) {
        error.style.display = 'none';
    }

    for (let input of inputs) {
        input.classList.remove('input-error');
    }

    success.style.display = 'none';
}

function forgotPassword(event) {
    event.preventDefault();
    // Add your forgot password logic here
    alert('Please contact administrator to reset your password.');
}

// Add event listeners when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Real-time username validation
    document.getElementById('username').addEventListener('input', function() {
        if (this.value.length >= 3) {
            this.classList.remove('input-error');
            document.getElementById('usernameError').style.display = 'none';
        }
    });

    // Real-time password validation
    document.getElementById('password').addEventListener('input', function() {
        if (this.value.length >= 6) {
            this.classList.remove('input-error');
            document.getElementById('passwordError').style.display = 'none';
        }
    });

    // Form submission handler
    document.getElementById('loginForm').addEventListener('submit', validateLogin);
}); 