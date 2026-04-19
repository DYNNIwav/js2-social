import { apiRequest } from './api.ts';

export async function register(name: string, email: string, password: string) {
  return await apiRequest('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
  });
}

/**
 * Logs the user in and saves the token + API key to localStorage.
 * Creates an API key on the first login so we don't need to do it again later.
 * @param {string} email - User's Noroff email.
 * @param {string} password - User's password.
 * @returns The response from the login endpoint.
 */
export async function login(email: string, password: string) {
  const response = await apiRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });

  localStorage.setItem('token', response.data.accessToken);
  localStorage.setItem('username', response.data.name);

  // Create API key on first login
  if (!localStorage.getItem('api_key')) {
    const keyResponse = await apiRequest('/auth/create-api-key', {
      method: 'POST',
      body: JSON.stringify({ name: 'Lurkr key' }),
    });
    localStorage.setItem('api_key', keyResponse.data.key);
  }

  return response;
}

export function getUsername(): string | null {
  return localStorage.getItem('username');
}

export function isLoggedIn(): boolean {
  return localStorage.getItem('token') !== null;
}

export function logout(): void {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('api_key');
}
