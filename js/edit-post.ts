import { apiRequest } from "./api.ts";

const id = new URLSearchParams(window.location.search).get("id");
if (!id) {
  throw new Error("Post ID not found");
}
const form = document.getElementById("edit-post-form");
if (!form) {
  throw new Error("Form not found");
}
const errorMessage = document.getElementById("error-message");

async function loadPost() {
  const response = await apiRequest(`/social/posts/${id}`);
  const post = response.data;
  (document.getElementById("title") as HTMLInputElement).value = post.title;
  (document.getElementById("body") as HTMLTextAreaElement).value = post.body;
  (document.getElementById("tags") as HTMLInputElement).value =
    post.tags.join(", ");
  (document.getElementById("media-url") as HTMLInputElement).value =
    post.media?.url || "";
}
loadPost();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = (document.getElementById("title") as HTMLInputElement).value;
  const body = (document.getElementById("body") as HTMLTextAreaElement).value;
  const tags = (document.getElementById("tags") as HTMLInputElement).value;
  const mediaUrl = (document.getElementById("media-url") as HTMLInputElement)
    .value;

  const postData: any = { title, body };
  if (tags) postData.tags = tags.split(",").map((t) => t.trim());
  if (mediaUrl) postData.media = { url: mediaUrl };

  try {
    await apiRequest(`/social/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(postData),
    });
    window.location.href = `/post/index.html?id=${id}`;
  } catch (error: any) {
    if (errorMessage) {
      errorMessage.textContent = error.message;
    }
  }
});
