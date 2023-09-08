document.addEventListener("DOMContentLoaded", function () {
    const generateButton = document.getElementById("generateButton");
    generateButton.addEventListener("click", generatePassword);

    function generatePassword() {
        const length = parseInt(document.getElementById("length").value);
        const includeDigits = document.getElementById("includeDigits").checked;
        const includeSpecialChars = document.getElementById("includeSpecialChars").checked;

        const password = generateRandomPassword(length, includeDigits, includeSpecialChars);

        document.getElementById("password").value = password;

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
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasDigits = /\d/.test(password);
        const hasSpecialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    
        const characterTypes = [hasUpperCase, hasLowerCase, hasDigits, hasSpecialChars].filter(Boolean).length;

        var lengthFactor=0;
        if(password.length>=12) lengthFactor=1;
        else if(password.length>=6) lengthFactor=0.5;

        var varietyFactor=0;
        if(characterTypes>=3) varietyFactor=1;
        else if(characterTypes>=2) varietyFactor=0.5;
    
        const strengthScore = (lengthFactor + varietyFactor) / 2;
        
        if(strengthScore == 1){
            return "Very Strong";
        } else if (strengthScore == 0.75) {
            return "Strong";
        } else if (strengthScore == 0.5) {
            return "Moderate";
        } else if(strengthScore ==0.25){
            return "Weak";
        } else {
            return "Very Weak"
        }
    }
    
});
