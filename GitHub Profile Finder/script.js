const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const profile = document.getElementById("profile");

async function findProfile(username) {
    try {
        message.textContent = "Loading...";
        profile.innerHTML = "";

        const response = await fetch(
            `https://api.github.com/users/${encodeURIComponent(username)}`
        );

        if (!response.ok) {
            throw new Error("GitHub user not found");
        }

        const data = await response.json();

        profile.innerHTML = `
            <div class="profile-card">
                <img src="${data.avatar_url}" alt="GitHub Profile">

                <h2>${data.name || data.login}</h2>

                <p>@${data.login}</p>

                <p>${data.bio || "No bio available"}</p>

                <div class="stats">
                    <div>
                        <strong>${data.followers}</strong>
                        <p>Followers</p>
                    </div>

                    <div>
                        <strong>${data.following}</strong>
                        <p>Following</p>
                    </div>

                    <div>
                        <strong>${data.public_repos}</strong>
                        <p>Repos</p>
                    </div>
                </div>

                <a
                    class="profile-link"
                    href="${data.html_url}"
                    target="_blank"
                >
                    View GitHub Profile
                </a>
            </div>
        `;

        message.textContent = "";

    } catch (error) {
        message.textContent = error.message;
    }
}

searchBtn.addEventListener("click", function () {
    const username = usernameInput.value.trim();

    if (username === "") {
        message.textContent = "Please enter a GitHub username.";
        return;
    }

    findProfile(username);
});

usernameInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchBtn.click();
    }
});