document.getElementById('doctorRegisterForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Page ko refresh hone se rokne ke liye
    let isValid = true;

    // 1. CNIC Validation (13 digits hona chahiye)
    const cnic = document.getElementById('cnic').value.trim();
    const cnicError = document.getElementById('cnicError');
    if (!/^\d{13}$/.test(cnic)) {
        cnicError.textContent = 'CNIC bilkul 13 digits ka hona chahiye.';
        isValid = false;
    } else {
        cnicError.textContent = '';
    }

    // 2. Password Validation (8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special)
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
        alert('Password kam se kam 8 characters ka ho, jismein 1 Capital letter, 1 small letter, 1 number aur 1 special character (@$!%*?&) ho.');
        isValid = false;
    }

    // 3. Confirm Password Match
    if (password !== confirmPassword) {
        alert('Dono Passwords match nahi kar rahe!');
        isValid = false;
    }

    // Agar sab theek hai, toh aage bhejein
    if (isValid) {
        alert('Form successfully submit ho gaya! Ab hum isko backend par bhejenge.');
        // Yahan hum agle step mein backend ka code lagayenge
    }
});