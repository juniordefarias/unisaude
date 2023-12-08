export default class APIError extends Error {
  constructor(response, body) {
    super();

    this.name = 'APIError';
    this.response = response;
    this.body = body;

    /* e agora nós montamos a mensagem q o erro vai retornar */
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}

