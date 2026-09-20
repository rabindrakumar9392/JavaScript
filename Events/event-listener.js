const button = document.getElementById("btn");

function handleClick() {
    console.log("Event handled");
}

button.addEventListener("click", handleClick);