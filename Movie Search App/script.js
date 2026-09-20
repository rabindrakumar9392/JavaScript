const movieInput = document.getElementById("movieInput");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const moviesContainer = document.getElementById("movies");

async function searchMovies(title) {
    try {
        message.textContent = "Searching...";
        moviesContainer.innerHTML = "";

        const url =
            `https://www.omdbapi.com/?s=${encodeURIComponent(title)}&apikey=thewdb`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        if (data.Response === "False") {
            throw new Error(data.Error);
        }

        data.Search.forEach(function (movie) {
            const card = document.createElement("div");

            card.className = "movie-card";

            const poster =
                movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://via.placeholder.com/300x450?text=No+Poster";

            card.innerHTML = `
                <img src="${poster}" alt="${movie.Title}">

                <div class="movie-info">
                    <h2>${movie.Title}</h2>
                    <p><strong>Year:</strong> ${movie.Year}</p>
                    <p><strong>Type:</strong> ${movie.Type}</p>
                </div>
            `;

            moviesContainer.appendChild(card);
        });

        message.textContent = "";

    } catch (error) {
        message.textContent = error.message;
    }
}

searchBtn.addEventListener("click", function () {
    const title = movieInput.value.trim();

    if (title === "") {
        message.textContent = "Please enter a movie name.";
        return;
    }

    searchMovies(title);
});

movieInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});