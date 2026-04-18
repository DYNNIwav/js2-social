const API_BASE = 'https://v2.api.noroff.dev';

/**
 * Helper function for calling the Noroff API.
 * Adds the token and API key automatically if I'm logged in.
 * @param {string} endpoint - The API path, like '/social/posts'.
 * @param options - Extra fetch options (method, body, etc).
 * @returns The parsed JSON response.
 */
export async function apiRequest(endpoint: string, options: any = {}) {
  const url = API_BASE + endpoint;

  const headers: any = {
    'Content-Type': 'application/json',
  };

  const token = localStorage.getItem('token');
  const apiKey = localStorage.getItem('api_key');

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  if (apiKey) {
    headers['X-Noroff-API-Key'] = apiKey;
  }

  const config = {
    ...options,
    headers: {
      ...headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, config);

  if (response.status === 204) {
    return {};
  }

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.errors?.[0]?.message || 'Something went wrong');
  }

  return data;
}
