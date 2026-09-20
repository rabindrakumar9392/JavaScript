const student = {
    name: "Rabindra",
    age: 20,
    course: "CSE"
};

for (let key in student) {
    console.log(key, student[key]);
}