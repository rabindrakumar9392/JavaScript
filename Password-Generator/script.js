const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+-=[]{}";

function generatePassword() {
    const length = Number(lengthInput.value);

    let characters = "";

    if (uppercase.checked) {
        characters += upperChars;
    }

    if (lowercase.checked) {
        characters += lowerChars;
    }

    if (numbers.checked) {
        characters += numberChars;
    }

    if (symbols.checked) {
        characters += symbolChars;
    }

    if (characters === "") {
        passwordInput.value = "Select an option";
        return;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", function () {
    if (passwordInput.value === "") {
        return;
    }

    navigator.clipboard.writeText(passwordInput.value);
});