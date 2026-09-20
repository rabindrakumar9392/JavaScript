const questions = [
    {
        question: "Which keyword declares a variable?",
        options: ["var", "define", "variable", "letvar"],
        answer: "var"
    },
    {
        question: "Which method adds an item to the end of an array?",
        options: ["push()", "pop()", "shift()", "slice()"],
        answer: "push()"
    },
    {
        question: "Which symbol is used for strict equality?",
        options: ["=", "==", "===", "!="],
        answer: "==="
    },
    {
        question: "Which method converts JSON string into an object?",
        options: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.convert()"],
        answer: "JSON.parse()"
    },
    {
        question: "Which API is commonly used to make HTTP requests?",
        options: ["fetch()", "request()", "httpCall()", "send()"],
        answer: "fetch()"
    },
    {
        question: "Which keyword is used to declare a block-scoped variable?",
        options: ["let", "var", "set", "def"],
        answer: "let"
    },
    {
        question: "Which keyword is used to declare a constant variable?",
        options: ["const", "constant", "fixed", "immutable"],
        answer: "const"
    },
    {
        question: "What is the result of typeof null in JavaScript?",
        options: ["null", "object", "undefined", "number"],
        answer: "object"
    },
    {
        question: "Which method removes the last element from an array?",
        options: ["pop()", "push()", "shift()", "unshift()"],
        answer: "pop()"
    },
    {
        question: "Which method removes the first element from an array?",
        options: ["shift()", "unshift()", "pop()", "slice()"],
        answer: "shift()"
    },
    {
        question: "Which method adds one or more elements to the beginning of an array?",
        options: ["unshift()", "shift()", "push()", "concat()"],
        answer: "unshift()"
    },
    {
        question: "How do you find the length of an array in JavaScript?",
        options: ["array.length", "array.size()", "array.count", "array.len"],
        answer: "array.length"
    },
    {
        question: "Which operator is used for logical AND?",
        options: ["&&", "||", "!", "&"],
        answer: "&&"
    },
    {
        question: "Which operator is used for logical OR?",
        options: ["||", "&&", "!", "|"],
        answer: "||"
    },
    {
        question: "Which operator is used for logical NOT?",
        options: ["!", "~", "^", "not"],
        answer: "!"
    },
    {
        question: "Which built-in object converts an object to a JSON string?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.toString()", "JSON.encode()"],
        answer: "JSON.stringify()"
    },
    {
        question: "How do you write a comment in a single line in JavaScript?",
        options: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
        answer: "// comment"
    },
    {
        question: "Which method creates a new array populated with the results of calling a provided function on every element?",
        options: ["map()", "forEach()", "filter()", "reduce()"],
        answer: "map()"
    },
    {
        question: "Which method creates a new array with all elements that pass the test implemented by the provided function?",
        options: ["filter()", "map()", "find()", "some()"],
        answer: "filter()"
    },
    {
        question: "Which function delay execution of a function for a specified time in milliseconds?",
        options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
        answer: "setTimeout()"
    },
    {
        question: "Which method repeatedly calls a function with a fixed time delay between each call?",
        options: ["setInterval()", "setTimeout()", "repeat()", "loop()"],
        answer: "setInterval()"
    },
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Digital Object Method"],
        answer: "Document Object Model"
    },
    {
        question: "Which function selects an HTML element by its ID?",
        options: ["document.getElementById()", "document.querySelector()", "document.getElementByClass()", "document.getId()"],
        answer: "document.getElementById()"
    },
    {
        question: "Which keyword is used to handle exceptions in JavaScript?",
        options: ["try...catch", "if...else", "do...while", "switch"],
        answer: "try...catch"
    },
    {
        question: "What is the output of 2 + '2' in JavaScript?",
        options: ["22", "4", "NaN", "TypeError"],
        answer: "22"
    },
    {
        question: "Which method joins all elements of an array into a string?",
        options: ["join()", "concat()", "split()", "merge()"],
        answer: "join()"
    },
    {
        question: "Which method splits a string into an array of substrings?",
        options: ["split()", "join()", "slice()", "cut()"],
        answer: "split()"
    },
    {
        question: "Which statement is used to stop a loop?",
        options: ["break", "stop", "exit", "return"],
        answer: "break"
    },
    {
        question: "Which statement skips the current iteration in a loop and moves to the next?",
        options: ["continue", "skip", "pass", "next"],
        answer: "continue"
    },
    {
        question: "What type of scope do variables declared with var have?",
        options: ["Function scope", "Block scope", "Global-only scope", "Module scope"],
        answer: "Function scope"
    },
    {
        question: "Which function returns the largest number in JavaScript?",
        options: ["Math.max()", "Math.top()", "Math.largest()", "Math.ceil()"],
        answer: "Math.max()"
    },
    {
        question: "Which function rounds a number downwards to its nearest integer?",
        options: ["Math.floor()", "Math.round()", "Math.ceil()", "Math.trunc()"],
        answer: "Math.floor()"
    },
    {
        question: "Which function rounds a number upwards to its nearest integer?",
        options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.abs()"],
        answer: "Math.ceil()"
    },
    {
        question: "Which method checks if an array contains a certain value?",
        options: ["includes()", "contains()", "has()", "indexOf()"],
        answer: "includes()"
    },
    {
        question: "Which method returns the index of the first occurrence of a value in an array?",
        options: ["indexOf()", "findIndex()", "search()", "locate()"],
        answer: "indexOf()"
    },
    {
        question: "Which ES6 feature allows extracting properties from objects into variables?",
        options: ["Destructuring", "Spread operator", "Rest parameter", "Template literals"],
        answer: "Destructuring"
    },
    {
        question: "Which syntax is used for template literals in JavaScript?",
        options: ["Backticks (``)", "Single quotes ('')", "Double quotes (\"\")", "Angle brackets (<>)"],
        answer: "Backticks (``)"
    },
    {
        question: "Which operator is the spread operator in JavaScript?",
        options: ["...", "---", "===", "&&"],
        answer: "..."
    },
    {
        question: "What is the value of an uninitialized variable in JavaScript?",
        options: ["undefined", "null", "0", "NaN"],
        answer: "undefined"
    },
    {
        question: "What does NaN stand for?",
        options: ["Not a Number", "New an Number", "Null and Number", "Negative and Number"],
        answer: "Not a Number"
    },
    {
        question: "Which method checks if a value is NaN?",
        options: ["isNaN()", "Number.isNaN()", "both isNaN() and Number.isNaN()", "None of these"],
        answer: "both isNaN() and Number.isNaN()"
    },
    {
        question: "Which function converts a string to an integer?",
        options: ["parseInt()", "parseFloat()", "Number.toInt()", "Integer.parse()"],
        answer: "parseInt()"
    },
    {
        question: "Which function converts a string to a floating-point number?",
        options: ["parseFloat()", "parseInt()", "Number.toFloat()", "Float.parse()"],
        answer: "parseFloat()"
    },
    {
        question: "Which object represents the eventual completion or failure of an asynchronous operation?",
        options: ["Promise", "Async", "Await", "Callback"],
        answer: "Promise"
    },
    {
        question: "Which keywords are used to write asynchronous code cleanly in modern JS?",
        options: ["async / await", "try / catch", "import / export", "set / get"],
        answer: "async / await"
    },
    {
        question: "Which keyword is used to create a class in JavaScript?",
        options: ["class", "struct", "interface", "type"],
        answer: "class"
    },
    {
        question: "Which method is called automatically when an instance of a class is created?",
        options: ["constructor()", "init()", "create()", "main()"],
        answer: "constructor()"
    },
    {
        question: "Which event occurs when a user clicks on an HTML element?",
        options: ["onclick", "onchange", "onmouseover", "onhover"],
        answer: "onclick"
    },
    {
        question: "Which property is used to set or get the HTML content inside an element?",
        options: ["innerHTML", "textContent", "innerText", "htmlContent"],
        answer: "innerHTML"
    },
    {
        question: "Which operator returns the data type of a variable?",
        options: ["typeof", "instanceof", "type", "datatype"],
        answer: "typeof"
    }
];

let currentQuestion = 0;
let score = 0;
let selected = false;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreElement = document.getElementById("score");

function showQuestion() {
    selected = false;

    const current = questions[currentQuestion];

    questionElement.textContent = current.question;
    optionsElement.innerHTML = "";

    current.options.forEach(function (option) {
        const button = document.createElement("button");

        button.className = "option";
        button.textContent = option;

        button.addEventListener("click", function () {
            if (selected) {
                return;
            }

            selected = true;

            if (option === current.answer) {
                score++;
                button.textContent += " ✓";
            } else {
                button.textContent += " ✗";
            }
        });

        optionsElement.appendChild(button);
    });
}

nextBtn.addEventListener("click", function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        questionElement.textContent = "Quiz Completed!";
        optionsElement.innerHTML = "";
        nextBtn.style.display = "none";
        scoreElement.textContent =
            `Your Score: ${score} / ${questions.length}`;
    }
});

showQuestion();