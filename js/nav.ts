import { isLoggedIn, logout } from './auth.ts';

const navLinks = document.getElementById('nav-links');

function buildNavLinks(): void {
  if (!navLinks) return;
  navLinks.textContent = '';

  if (isLoggedIn()) {
    const newPostLink = document.createElement('a');
    newPostLink.href = '/post/create.html';
    newPostLink.textContent = 'New Post';

    const profileLink = document.createElement('a');
    profileLink.href = '/profile/index.html';
    profileLink.textContent = 'My Profile';

    const logoutLink = document.createElement('a');
    logoutLink.href = '#';
    logoutLink.textContent = 'Log out';
    logoutLink.addEventListener('click', function (event) {
      event.preventDefault();
      logout();
      window.location.href = '/account/login.html';
    });

    navLinks.appendChild(newPostLink);
    navLinks.appendChild(profileLink);
    navLinks.appendChild(logoutLink);
  } else {
    const loginLink = document.createElement('a');
    loginLink.href = '/account/login.html';
    loginLink.textContent = 'Log in';
    navLinks.appendChild(loginLink);
  }
}

if (navLinks) {
  buildNavLinks();
}
