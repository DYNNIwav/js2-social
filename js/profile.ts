import { apiRequest } from './api.ts';
import { getUsername } from './auth.ts';

const params = new URLSearchParams(window.location.search);
const username = params.get('name') || getUsername();
if (!username) {
  throw new Error('Username not found');
}

const profileContent = document.getElementById('profile-content');
if (!profileContent) {
  throw new Error('Profile content element not found');
}

/**
 * Loads the profile from the API and shows it on the page.
 * Also shows all posts by that user and a follow/unfollow button if it's not my own profile.
 */
async function loadProfile() {
  const response = await apiRequest(
    `/social/profiles/${username}?_posts=true&_followers=true&_following=true`,
  );
  const profile = response.data;
  const myName = getUsername();
  const isThisMe = username === myName;
  const amIFollowing = profile.followers?.some((f: any) => f.name === myName);

  let html = `
    <div class="flex flex-col items-center text-center bg-surface border border-border rounded-xl p-6 my-8">
      ${profile.avatar?.url ? `<img src="${profile.avatar.url}" alt="Avatar" class="w-24 h-24 rounded-full object-cover">` : ''}
      <h1>${profile.name}</h1>
      <p>${profile.bio || ''}</p>
      <p>Followers: ${profile._count?.followers ?? 0} · Following: ${profile._count?.following ?? 0} · Posts: ${profile._count?.posts ?? 0}</p>
    </div>
  `;

  if (!isThisMe) {
    const label = amIFollowing ? 'Unfollow' : 'Follow';
    html += `<button id="follow-btn" class="btn btn-primary">${label}</button>`;
  }

  html += `<h2 class="mt-8 mb-4">Posts</h2>`;
  html += `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">`;
  if (profile.posts && profile.posts.length > 0) {
    for (const post of [...profile.posts].reverse()) {
      html += `<a href="/post/index.html?id=${post.id}" class="post-card">
        <h3>${post.title}</h3>
        ${post.media?.url ? `<img src="${post.media.url}" alt="${post.media.alt || post.title}">` : ''}
        <p>${post.body || ''}</p>
      </a>`;
    }
  } else {
    html += `<p>No posts yet.</p>`;
  }
  html += `</div>`;

  profileContent!.innerHTML = html;

  const followBtn = document.getElementById('follow-btn');
  if (followBtn) {
    followBtn.addEventListener('click', () => toggleFollow(amIFollowing));
  }
}

async function toggleFollow(currentlyFollowing: boolean) {
  const endpoint = currentlyFollowing ? 'unfollow' : 'follow';
  try {
    await apiRequest(`/social/profiles/${username}/${endpoint}`, {
      method: 'PUT',
    });
    //reload to show updated follow status
    loadProfile();
  } catch (error: any) {
    alert('Could not ' + endpoint + ': ' + error.message);
  }
}

loadProfile();
