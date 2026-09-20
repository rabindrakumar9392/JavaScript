const box = document.getElementById("box");

box.addEventListener("mouseover", function () {
    console.log("Mouse entered");
});

box.addEventListener("mouseout", function () {
    console.log("Mouse left");
});