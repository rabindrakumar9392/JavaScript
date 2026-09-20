const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Default form submission prevented");
});