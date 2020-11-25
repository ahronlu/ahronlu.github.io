const container = document.querySelector(".container");
const toggleBtn = document.querySelector("#toggle");
const showBtn = document.querySelector("#show");
const img = document.querySelector("header img");
let dark = false;
let show = false;

setTimeout(() => (showBtn.style.display = "inline-block"), 1000);

toggleBtn.addEventListener("click", () => {
  dark = !dark;
  toggleBtn.classList = dark ? "fas fa-sun" : "fas fa-moon";
  document.body.classList.toggle("dark-mode");
});

console.log(projects.length);

projects.forEach((p) => {
  container.innerHTML += `<div class="${p.show ? "box" : "box hide"}" title="${
    p.description
  }">
  <a target="_blank" href=${p.url}>
        <h2>${p.name}</h2></a><a target="_blank" href=${p.url}>
        <img src=${getThumbnailUrl(p.name)} alt="${p.name}" /></a>
        <p class="tags">${tagsToChips(p.tags)}</p>
        <div class="actions">
        <a target="_blank" href=${p.url}>
        <i class="fas fa-eye"></i> View Live
        </a>
        <a target="_blank" href=${p.github}>
        <i class="fab fa-github"></i> Github
        </a></div>
        </div>`;
});

const hideBoxes = document.querySelectorAll(".hide");

showBtn.addEventListener("click", () => {
  if (showBtn.textContent === "Hide More") {
    showBtn.textContent = "Show More";
  } else {
    showBtn.textContent = "Hide More";
  }
  hideBoxes.forEach((x) => {
    x.classList.toggle("hide");
  });
});

function getThumbnailUrl(projectName) {
  return "./img/" + projectName.toLowerCase().replace(/\s/g, "") + ".png";
}

function tagsToChips(tags) {
  return tags.split(" ").map((tag) => `<chip title="${tag}">${tag}</chip>`);
}
