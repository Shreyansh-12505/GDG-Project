const inputuser = document.getElementById("search");
const searchbtn = document.getElementById("search-btn")
async function data(username) {
    try {
        const x = await fetch(`https://api.github.com/users/${username}`)
        const res = await x.json()
        console.log(res);
        document.getElementById("avatar").src = res.avatar_url;
        document.getElementById("name").textContent = res.login;
        document.getElementById("bio").textContent = `Bio: ${res.bio}`;
        document.getElementById("followers").textContent = `Followers: ${res.followers}`;
        document.getElementById("following").textContent = `Following: ${res.following}`;
        document.getElementById("repos").textContent = `Repositories: ${res.public_repos}`;
    } catch (err) {
        alert("Invalid username", err)
    }
}
searchbtn.addEventListener("click", () => {
    data(inputuser.value)
}
)
async function repo(username) {
    try {
        const x = await fetch(`https://api.github.com/users/${username}/repos`)
        const res = await x.json()
        console.log(res);
        const getRepo = document.getElementById("repocard");
        getRepo.innerHTML = "";
        res.forEach(e => {
            const card = document.createElement("div")
            card.className = "repodetails"
            card.innerHTML = `<div class="repo_name">${e.name}</div>
<div class="stars">Stars:⭐${e.stargazers_count}</div>
<div class="forks">Forks:🍴${e.forks_count}</div>
<div class="language">Language: ${e.language}</div>`
            getRepo.appendChild(card);
        }
        )
    } catch (err) {
        console.log("No repositories found", err)
    }
}
searchbtn.addEventListener("click", () => {

    repo(inputuser.value)
}
)

