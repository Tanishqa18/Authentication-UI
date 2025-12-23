const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const signUpForm = document.getElementById('signUpForm');
const signUpName = document.getElementById('signUpName');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPassword = document.getElementById('signUpPassword');

signUpForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    const nameValue = signUpName.value.trim();
    const emailValue = signUpEmail.value.trim();
    const passwordValue = signUpPassword.value.trim();

    if (nameValue === '') {
        alert('Name cannot be empty');
        return;
    }

    if (emailValue === '' || !/\S+@\S+\.\S+/.test(emailValue)) {
        alert('Please enter a valid email address');
        return;
    }

    if (passwordValue.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }

    alert('Sign Up Successful!');

});

// Forgot Password Modal
const forgotPasswordLink = document.getElementById('forgotPassword');
const modal = document.getElementById('forgotPasswordModal');
const closeModal = document.getElementsByClassName("close")[0];

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = "block";
});

closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
