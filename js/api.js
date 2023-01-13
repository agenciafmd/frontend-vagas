const api = axios.create({
    baseURL: 'https://api.themoviedb.org',
    timeout: 10000,
    headers: { 'Content-Type': 'Application/json' }
});

