import movie_key from '../../config.json';
class Api {
  baseURL: string;
  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  async get(
    endpoint: string,
    params?: Record<string, string>
  ) {
    const url = new URL(`${this.baseURL}/${endpoint}`);
    if (params) {
      Object.keys(params).forEach((key) => {
        url.searchParams.append(key, params[key]);
      });
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': movie_key['movie-api'],
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
      },
    });
    return await response.json();
  }

  async post(endpoint: string, data: JSON) {
    const response = await fetch(
      `${this.baseURL}/${endpoint}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );
    return await response.json();
  }

  // Add other HTTP methods as needed (e.g., PUT, DELETE, etc.)

  // Example usage:
  // const data = await api.get('users');
  // const postData = await api.post('users', { name: 'John Doe' });
}

export default Api;
