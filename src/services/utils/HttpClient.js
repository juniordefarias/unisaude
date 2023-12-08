import APIError from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.headers = new Headers({
      'Content-Type': 'application/json'
    });
  }

  setAuthorizationHeader(token) {
    this.headers.set('Authorization', `Bearer ${token}`);
    /* console.log('Header de autorização configurado:', this.headers.get('Authorization')); */
  }

  async get(path) {
    const response = await fetch(`${this.baseURL}${path}`);

    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new APIError(response, body);
  }


  async post(path, body) {
    // deixando de usar pq esse header ja foi passado no constructor
    /* const headers = new Headers({
      'Content-Type': 'application/json'
    }); */

    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: this.headers
    });

    let responseBody = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new APIError(response, responseBody);
  }

  async put(path, body) {
    
    // deixando de usar pq esse header ja foi passado no constructor
    /* const headers = new Headers({
      'Content-Type': 'application/json'
    }); */ 
  
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PUT', 
      body: JSON.stringify(body),
      /* headers */
      headers: this.headers
    });
  
    let responseBody = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }
  
    if (response.ok) {
      return responseBody;
    }
  
    throw new APIError(response, responseBody);
  }

  async delete(path, body) {
  
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
  
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'DELETE', 
      body: JSON.stringify(body),
      headers
    });
  
    let responseBody = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType.includes('application/json')) {
      responseBody = await response.json();
    }
  
    if (response.ok) {
      return responseBody;
    }
  
    throw new APIError(response, responseBody);
  }
}

export default HttpClient;