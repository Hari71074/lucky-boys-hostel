// JavaScript to show the registration popup when the "Register" button is clicked
document.getElementById('register-btn').addEventListener('click', function() {
    // Hide welcome section with a fade-out effect
    document.getElementById('welcome-section').classList.add('hidden');
    // Show the registration popup
    document.getElementById('registration-popup').classList.add('show');
});

// Close the popup when the "Close" button is clicked
document.getElementById('close-popup').addEventListener