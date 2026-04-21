import { apiRequest } from "./api.ts";
import { isLoggedIn } from "./auth.ts";

if (!isLoggedIn()) {
  window.location.href = "/account/login.html";
}

const postsContainer = document.getElementById("posts");
if (!postsContainer) {
  throw new Error("posts container not found");
}

async function loadPosts() {
  try {
    const response = await apiRequest("/social/posts?_author=true");
    postsContainer!.innerHTML = "";
    for (const post of response.data) {
      const postCard = document.createElement("a");
      postCard.innerHTML = `
        <h3>${post.title}</h3>
        ${post.media?.url ? `<img src="${post.media.url}" alt="${post.media.alt || post.title}">` : ""}
        <p>${post.body}</p>
        <div class="post-meta">
          <span>${post.author.name}</span>
        </div>
      `;
      postCard.href = `/post/index.html?id=${post.id}`;
      postCard.className = "post-card";
      postsContainer!.appendChild(postCard);
    }
  } catch (error) {
    console.error(error);
  }
}
loadPosts();

const searchInput = document.getElementById("search-input") as HTMLInputElement;

async function searchPosts(query: string) {
  if (!query.trim()) {
    loadPosts();
    return;
  }
  try {
    const response = await apiRequest(
      `/social/posts/search?q=${encodeURIComponent(query)}&_author=true`,
    );
    postsContainer!.innerHTML = "";
    for (const post of response.data) {
      const postCard = document.createElement("a");
      postCard.innerHTML = `
        <h3>${post.title}</h3>
        ${post.media?.url ? `<img src="${post.media.url}" alt="${post.media.alt || post.title}">` : ""}
        <p>${post.body}</p>
        <div class="post-meta">
          <span>${post.author.name}</span>
        </div>
      `;
      postCard.href = `/post/index.html?id=${post.id}`;
      postCard.className = "post-card";
      postsContainer!.appendChild(postCard);
    }
  } catch (error) {
    console.error(error);
  }
}

searchInput.addEventListener("input", (event) => {
  const target = event.target as HTMLInputElement;
  searchPosts(target.value);
});
