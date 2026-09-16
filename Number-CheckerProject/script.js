const numberInput = document.getElementById("numberInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
    const number = Number(numberInput.value);

    if (numberInput.value === "") {
        result.innerHTML = "<p>Please enter a number.</p>";
        return;
    }

    let type;

    if (number > 0) {
        type = "Positive";
    } else if (number < 0) {
        type = "Negative";
    } else {
        type = "Zero";
    }

    const evenOdd = number % 2 === 0 ? "Even" : "Odd";
    const square = number ** 2;

    let table = "";

    for (let i = 1; i <= 10; i++) {
        table += `${number} × ${i} = ${number * i}<br>`;
    }

    result.innerHTML = `
        <p><strong>Number:</strong> ${number}</p>
        <p><strong>Type:</strong> ${type}</p>
        <p><strong>Even/Odd:</strong> ${evenOdd}</p>
        <p><strong>Square:</strong> ${square}</p>
        <p><strong>Multiplication Table:</strong></p>
        <p>${table}</p>
    `;
});