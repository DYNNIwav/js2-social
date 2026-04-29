import { apiRequest } from './api.ts';

const form = document.getElementById('create-post-form') as HTMLFormElement;
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const title = (document.getElementById('title') as HTMLInputElement).value;
  const body = (document.getElementById('body') as HTMLTextAreaElement).value;
  const tags = (document.getElementById('tags') as HTMLInputElement).value;
  const mediaUrl = (document.getElementById('media-url') as HTMLInputElement)
    .value;

  const postData: any = { title, body };

  if (tags) {
    postData.tags = tags.split(',').map((t) => t.trim());
  }

  if (mediaUrl) {
    postData.media = { url: mediaUrl };
  }

  try {
    const response = await apiRequest('/social/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
    window.location.href = `/post/index.html?id=${response.data.id}`;
  } catch (error: any) {
    if (errorMessage) {
      errorMessage.textContent = error.message;
    }
  }
});
