// Question #3
let userPassword = "TechUp";

function checkPasswordStrength(userPassword) {
    if (userPassword.length > 10) {
        return "Strong"
    } else if (userPassword.length >= 6) {
        return "Medium"
    } else {
        return "Weak"
    }
}