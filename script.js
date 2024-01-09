document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("registration-form");
    const passwordInput = document.getElementById("password");
    const passwordStrength = document.getElementById("password-strength").querySelector("span");

    // Real-time password strength indicator
    passwordInput.addEventListener("input", function() {
        const password = passwordInput.value;
        const strength = calculatePasswordStrength(password);

        passwordStrength.textContent = getPasswordStrengthLabel(strength);
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // You can send the registration data to a server here
        alert(`Registration successful!\nUsername: ${username}\nEmail: ${email}`);
    });
});

function calculatePasswordStrength(password) {
    // Implement your password strength calculation logic here
    // You can use regular expressions, length checks, and other criteria
    return 0; // Return a strength value between 0 and 100
}

function getPasswordStrengthLabel(strength) {
    if (strength < 30) {
        return "Weak";
    } else if (strength < 70) {
        return "Moderate";
    } else {
        return "Strong";
    }
}