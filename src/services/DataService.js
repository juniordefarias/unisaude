import HttpClient from './utils/HttpClient';

class DataService {
  constructor() {
    this.httpClient = new HttpClient('https://apiprojeto-production.up.railway.app');
    this.authToken = null; // Token de autenticação
    this.configureAuthorization();
  }

  setAuthToken(token) {
    this.authToken = token;
    this.configureAuthorization();
  }

  configureAuthorization() {
    if (this.authToken) {
      this.httpClient.setAuthorizationHeader(this.authToken);
    }
  }

  async listConsultasPaciente() {
    return this.httpClient.get(`/paciente/1/consultas`);
  } 

  async listConsultasMedico() {
    return this.httpClient.get(`/medico/1/consultas`);
  }

  async createConsulta(request) {
    return this.httpClient.post(`/consultas`, request);
  }

  async login(request) {
    return this.httpClient.post(`/api/login`, request);
  }
}

export default new DataService();