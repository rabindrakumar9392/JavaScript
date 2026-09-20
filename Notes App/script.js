const titleInput = document.getElementById("titleInput");
const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function renderNotes() {
    notesContainer.innerHTML = "";

    notes.forEach(function (note) {
        const noteElement = document.createElement("div");

        noteElement.className = "note";

        noteElement.innerHTML = `
            <h3>${note.title}</h3>
            <p>${note.content}</p>
            <button class="delete-btn">Delete</button>
        `;

        noteElement
            .querySelector(".delete-btn")
            .addEventListener("click", function () {
                notes = notes.filter(function (item) {
                    return item.id !== note.id;
                });

                saveNotes();
                renderNotes();
            });

        notesContainer.appendChild(noteElement);
    });
}

addBtn.addEventListener("click", function () {
    const title = titleInput.value.trim();
    const content = noteInput.value.trim();

    if (title === "" || content === "") {
        alert("Please enter title and note.");
        return;
    }

    const note = {
        id: Date.now(),
        title: title,
        content: content
    };

    notes.push(note);

    saveNotes();
    renderNotes();

    titleInput.value = "";
    noteInput.value = "";
});

renderNotes();