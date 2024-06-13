document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("loginform");
    const usernameInput = form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('input[type="password"]');
    
    form.addEventListener("submit", function(event) {
        let isValid = true;
        
        // Reset previous error messages
        usernameInput.classList.remove("error");
        passwordInput.classList.remove("error");
        
        // Check if username is empty
        if (usernameInput.value.trim() === "") {
            isValid = false;
            usernameInput.classList.add("error");
        }
        
        // Check if password is empty
        if (passwordInput.value.trim() === "") {
            isValid = false;
            passwordInput.classList.add("error");
        }
        
        if (!isValid) {
            event.preventDefault();
            alert("Please fill out both the username and password fields.");
        }
    });
});
