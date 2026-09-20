const button = document.getElementById("btn");

button.addEventListener("click", function (event) {
    console.log(event);
    console.log(event.target);
});