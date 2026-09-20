const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;

    if (name === "") {
        event.preventDefault();
        console.log("Name is required");
    }
});