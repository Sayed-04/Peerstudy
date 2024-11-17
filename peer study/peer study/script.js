document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
    } else {
        alert("Sign Up Successful!");
        this.reset(); // Resets the form fields
        toggleVisibility('login');
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Login Successful!");
    toggleVisibility('peerStudy');
});

document.getElementById("showSignUp").addEventListener("click", function() {
    toggleVisibility('signup');
});

document.getElementById("nextBtn").addEventListener("click", function(event) {
    event.preventDefault();
    toggleVisibility('subjectSelection');
});

function toggleVisibility(target) {
    const signupContainer = document.getElementById("signupContainer");
    const loginContainer = document.getElementById("loginContainer");
    const peerStudyContainer = document.getElementById("peerStudyContainer");
    const subjectSelectionContainer = document.getElementById("subjectSelectionContainer");

    signupContainer.style.display = "none";
    loginContainer.style.display = "none";
    peerStudyContainer.style.display = "none";
    subjectSelectionContainer.style.display = "none";

    if (target === 'signup') {
        signupContainer.style.display = "block";
    } else if (target === 'login') {
        loginContainer.style.display = "block";
    } else if (target === 'peerStudy') {
        peerStudyContainer.style.display = "block";
    } else if (target === 'subjectSelection') {
        subjectSelectionContainer.style.display = "block";
    }
}

// Password visibility toggle
document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("loginPassword");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
});

// Exit function for peer study form
document.getElementById("exit").addEventListener("click", function() {
    alert("Exiting..."); // You can replace this with any exit logic
    toggleVisibility('signup'); // Returns to sign-up form
});

// Back to Peer Study
document.getElementById("backToPeerStudy").addEventListener("click", function() {
    toggleVisibility('peerStudy');
});