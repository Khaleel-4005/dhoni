// // script.js

// // Function to validate the form inputs
// document.querySelector('form').addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent form submission

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;

//     if (!email || !password) {
//         alert('Please fill in all fields');
//         return;
//     }

//     // Validate email format
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         alert('Please enter a valid email address');
//         return;
//     }

//     // Simulate login success
//     alert('Login successful!');
// });

// // Add behavior for "Remember for 30 days" checkbox
// document.querySelector('input[type="checkbox"]').addEventListener('change', function () {
//     if (this.checked) {
//         console.log('Remember me for 30 days selected');
//     } else {
//         console.log('Remember me option deselected');
//     }
// });
















// script.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }

    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    alert('Login successful!');
});
