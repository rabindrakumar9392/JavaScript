const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    console.log(formData.get("name"));
    console.log(formData.get("email"));
    console.log(formData.get("age"));
});