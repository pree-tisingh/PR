document.addEventListener('DOMContentLoaded', function () {
    
    setTimeout(function () {
        showSignupForm(); 
    }, 5000);

    function showSignupForm() {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "flex";
    }
    
    document.getElementById("show-login-form").addEventListener("click", function () {
        document.getElementById("signup-form").style.display = "none";
        document.getElementById("login-form").style.display = "flex";
    });

    document.querySelector("#login-form .close-btn").addEventListener("click", function () {
        document.getElementById("login-form").style.display = "none";
    });

    document.querySelector("#signup-form .close-btn").addEventListener("click", function () {
        document.getElementById("signup-form").style.display = "none";
    });

    document.getElementById("show-signup-form").addEventListener("click", function () {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("signup-form").style.display = "flex";
    });
});