  let API_URL = ''
  if (window.location.href.includes('localhost')) {
      API_URL = 'http://localhost:3001/';
  } else {
      API_URL = 'https://movie-supermarket-api.herokuapp.com/';
  }
  export default API_URL;