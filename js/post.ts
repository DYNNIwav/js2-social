import { apiRequest } from "./api.ts";
import { getUsername } from "./auth.ts";

const id = new URLSearchParams(window.location.search).get("id");
if (!id) {
  throw new Error(
    "Post ID not found, user may have deleted or privated the post",
  );
}

const postContent = document.getElementById("post-content");
if (!postContent) {
  throw new Error("Post content element not found");
}

async function loadPost() {
  const response = await apiRequest(`/social/posts/${id}?_author=true`);
  const post = response.data;

  postContent!.textContent = "";

  let html = `
        <h1>${post.title}</h1>
        ${post.media?.url ? `<img src="${post.media.url}" alt="${post.media.alt || post.title}">` : ""}
        <p>${post.body || ""}</p>
        <div class="post-meta">
          <span>By <a href="/profile/index.html?name=${post.author.name}">${post.author.name}</a></span>
        </div>
      `;

  if (post.author.name === getUsername()) {
    html += `
          <div style="margin-top: 1rem; display: flex; gap: 8px;">
            <a href="/post/edit.html?id=${id}" class="btn btn-secondary">Edit</a>
            <button id="delete-btn" class="btn btn-danger">Delete</button>
          </div>
        `;
  }
  postContent!.innerHTML = html;

  const deleteButton = document.getElementById("delete-btn");
  if (deleteButton) {
    deleteButton.addEventListener("click", deletePost);
  }
}

async function deletePost() {
  const confirmDelete = confirm("Are you sure you want to delete this post?");
  if (confirmDelete) {
    await apiRequest(`/social/posts/${id}`, { method: "DELETE" });
    window.location.href = "/";
  } else {
    return;
  }
}

loadPost();
