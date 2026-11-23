const signinTab = document.getElementById("signinTab");
const signupTab = document.getElementById("signupTab");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");

const nameField = document.getElementById("nameField");
const confirmField = document.getElementById("confirmField");
const forgot = document.getElementById("forgot");

const submitBtn = document.getElementById("submitBtn");
const authForm = document.getElementById("authForm");
const message = document.getElementById("message");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

let isSignup = false;

// Switch to Sign In
signinTab.addEventListener("click", () => {
    isSignup = false;
    updateUI();
});

// Switch to Sign Up
signupTab.addEventListener("click", () => {
    isSignup = true;
    updateUI();
});

// Update the interface
function updateUI() {

    message.textContent = "";

    signinTab.classList.toggle("active", !isSignup);
    signupTab.classList.toggle("active", isSignup);

    nameField.classList.toggle("hidden", !isSignup);
    confirmField.classList.toggle("hidden", !isSignup);
    forgot.classList.toggle("hidden", isSignup);

    title.textContent = isSignup
        ? "Create Account"
        : "Welcome Back";

    subtitle.textContent = isSignup
        ? "Create your account and get started"
        : "Sign in to continue your journey";

    submitBtn.textContent = isSignup
        ? "Create Account"
        : "Sign In";

    username.required = isSignup;
    confirmPassword.required = isSignup;
}

// Show / Hide password
function togglePassword(id) {

    const input = document.getElementById(id);

    input.type = input.type === "password"
        ? "text"
        : "password";
}

// Form submission
authForm.addEventListener("submit", function(event) {

    event.preventDefault();

    message.textContent = "";

    if (isSignup) {

        if (password.value !== confirmPassword.value) {
            message.textContent = "Passwords do not match!";
            return;
        }

        if (password.value.length < 8) {
            message.textContent =
                "Password must contain at least 8 characters.";
            return;
        }

        message.textContent =
            "Account created successfully! (Demo)";

    } else {

        message.textContent =
            "Sign in button works! Backend authentication needed.";
    }

});

// Forgot password
function forgotPassword(event) {

    event.preventDefault();

    message.textContent =
        "Password reset requires a backend system.";
}
