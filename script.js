document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", generatePassword);

    function generatePassword() {
        const length = parseInt(document.getElementById("length").value);
        const includeDigits = document.getElementById("includeDigits").checked;
        const includeSpecialChars = document.getElementById("includeSpecialChars").checked;

        const password = generateRandomPassword(length, includeDigits, includeSpecialChars);

        document.getElementById("password").value = password;

        // Check password strength and display it
        const strength = checkPasswordStrength(password);
        document.getElementById("passwordStrength").textContent = `Password Strength: ${strength}`;
    }

    function generateRandomPassword(length, useDigits, useSpecialChars) {
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (useDigits) characters += "0123456789";
        if (useSpecialChars) characters += "!@#$%^&*()_-+=<>?";

        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(randomIndex);
        }

        return password;
    }

    function checkPasswordStrength(password) {
        // Very simple strength checker for demonstration purposes
        if (password.length >= 8) {
            return "Strong";
        } else if (password.length >= 6) {
            return "Moderate";
        } else {
            return "Weak";
        }
    }
});
