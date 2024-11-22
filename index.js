const apiUrl = "https://jsonplaceholder.typicode.com/posts";
const dark = document.getElementById("dark");
const light = document.getElementById("light");
const postsContainer = document.getElementById("posts");
const fetchButton = document.getElementById("fetchPosts");

fetchButton.addEventListener("click", () => {
  if (postsContainer.style.display === "block") {
    postsContainer.style.display = "none";
  } else {
    postsContainer.style.display = "block";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((posts) => {
        postsContainer.innerHTML = "";

        posts.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;
          postsContainer.appendChild(postElement);
        });
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }
});

dark.addEventListener("click", () => {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  light.classList.remove("hidden");
  dark.classList.add("hidden");
});

light.addEventListener("click", () => {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  dark.classList.remove("hidden");
  light.classList.add("hidden");
});