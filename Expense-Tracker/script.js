const expenseForm = document.getElementById("expenseForm");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("date");
const expenseList = document.getElementById("expenseList");
const totalElement = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

function calculateTotal() {
    const total = expenses.reduce(function (sum, expense) {
        return sum + expense.amount;
    }, 0);

    totalElement.textContent = total;
}

function renderExpenses() {
    expenseList.innerHTML = "";

    expenses.forEach(function (expense) {
        const li = document.createElement("li");

        li.className = "expense";

        li.innerHTML = `
            <div class="expense-info">
                <strong>${expense.title}</strong>
                <span>₹${expense.amount}</span>
                <span>${expense.category}</span>
                <span>${expense.date}</span>
            </div>

            <button class="delete-btn">Delete</button>
        `;

        li.querySelector(".delete-btn").addEventListener("click", function () {
            expenses = expenses.filter(function (item) {
                return item.id !== expense.id;
            });

            saveExpenses();
            renderExpenses();
            calculateTotal();
        });

        expenseList.appendChild(li);
    });

    calculateTotal();
}

expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const expense = {
        id: Date.now(),
        title: titleInput.value.trim(),
        amount: Number(amountInput.value),
        category: categoryInput.value,
        date: dateInput.value
    };

    expenses.push(expense);

    saveExpenses();
    renderExpenses();

    expenseForm.reset();
});

renderExpenses();