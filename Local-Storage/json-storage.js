const student = {
    name: "Rabindra",
    age: 20,
    course: "CSE"
};

localStorage.setItem("student", JSON.stringify(student));

const data = JSON.parse(localStorage.getItem("student"));

console.log(data);
console.log(data.name);
console.log(data.course);