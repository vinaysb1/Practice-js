// Password Validation Program

function validatePassword(password) {
    if (password.length < 8) {
        return 'Password must be at least 8 characters long.';
    }

    if (!/[a-z]/.test(password)) {
        return 'Password must contain at least one lowercase letter.';
    }

    if (!/[A-Z]/.test(password)) {
        return 'Password must contain at least one uppercase letter.';
    }

    if (!/\d/.test(password)) {
        return 'Password must contain at least one digit.';
    }

    if (!/[@$!%*?&]/.test(password)) {
        return 'Password must contain at least one special character (@, $, !, %, *, ?, or &).';
    }

    return 'Password is valid.';
}

// Example usage
console.log(validatePassword('password')); // Invalid: Password must be at least 8 characters long.
console.log(validatePassword('Password1')); // Invalid: Password must contain at least one special character.
console.log(validatePassword('P@ssw0rd')); // Valid: Password is valid.