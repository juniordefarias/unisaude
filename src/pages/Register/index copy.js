import { useState } from 'react';

import { Container, LoginContainer } from './styles';

import Section from '../../components/Section.js';

export default function Register() {
  const [userType, setUserType] = useState('paciente');

  return (
    <Container>
      <Section>
        <LoginContainer>
          <h3>Cadastro</h3>

          <div className='filters'>
            <div className='filter'>
              <div>
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7ZM2 9V19H16V9H2ZM8 13H10V15H8V13ZM4 13H6V15H4V13ZM12 13H14V15H12V13ZM13 7V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7H13Z" fill="black"/>
                </svg>
              </div>
              <div className='filter__input'>
                <label>Email</label>
                <input 
                  type="password" 
                  id="pass" 
                  name="password" 
                  // minlength="8" 
                  // required 
                  /* placeholder='Digite aqui sua senha!' */
                />
              </div>
            </div>

            <div className='filter'>
              <div>
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7ZM2 9V19H16V9H2ZM8 13H10V15H8V13ZM4 13H6V15H4V13ZM12 13H14V15H12V13ZM13 7V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7H13Z" fill="black"/>
                </svg>
              </div>
              <div className='filter__input'>
                <label>Senha</label>
                <input 
                  type="password" 
                  id="pass" 
                  name="password" 
                  // minlength="8" 
                  // required 
                  /* placeholder='Digite aqui sua senha!' */
                />
              </div>
            </div>
            <ul>
              <li
                className={userType === 'paciente' ? 'selected' : ''}
                onClick={() => setUserType('paciente')}
              >Paciente</li>
              <li
                className={userType === 'medico' ? 'selected' : ''}
                onClick={() => setUserType('medico')}
              >Médico</li>
            </ul>

            <div className='filters__group'>
              <div className='filter'>
                <div>
                  <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21H14C14 17.6863 11.3137 15 8 15C4.68629 15 2 17.6863 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="black"/>
                  </svg>
                </div>
                <div className='filter__input'>
                  <label>Nome</label>
                  <input 
                    type='text'
                    // required
                    /* placeholder='Digite aqui seu email!' */
                  />
                </div>
              </div>

              <div className='filter'>
                <div>
                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7ZM2 9V19H16V9H2ZM8 13H10V15H8V13ZM4 13H6V15H4V13ZM12 13H14V15H12V13ZM13 7V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7H13Z" fill="black"/>
                  </svg>
                </div>
                <div className='filter__input'>
                  <label>Sobrenome</label>
                  <input 
                    type="password" 
                    id="pass" 
                    name="password" 
                    // minlength="8" 
                    // required 
                    /* placeholder='Digite aqui sua senha!' */
                  />
                </div>
              </div>
            </div>

            <div className='filters__group'>
              <div className='filter'>
                <div>
                  <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21H14C14 17.6863 11.3137 15 8 15C4.68629 15 2 17.6863 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="black"/>
                  </svg>
                </div>
                <div className='filter__input'>
                  <label>CPF</label>
                  <input 
                    type='text'
                    // required
                    /* placeholder='Digite aqui seu email!' */
                  />
                </div>
              </div>

              <div className='filter'>
                <div>
                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7ZM2 9V19H16V9H2ZM8 13H10V15H8V13ZM4 13H6V15H4V13ZM12 13H14V15H12V13ZM13 7V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7H13Z" fill="black"/>
                  </svg>
                </div>
                <div className='filter__input'>
                  <label>RG</label>
                  <input 
                    type="password" 
                    id="pass" 
                    name="password" 
                    // minlength="8" 
                    // required 
                    /* placeholder='Digite aqui sua senha!' */
                  />
                </div>
              </div>
            </div>

            <div className='filters__group'>
              <div className='filter'>
                <div>
                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7ZM2 9V19H16V9H2ZM8 13H10V15H8V13ZM4 13H6V15H4V13ZM12 13H14V15H12V13ZM13 7V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7H13Z" fill="black"/>
                  </svg>
                </div>
                <div className='filter__input'>
                  <label>Possui convênio</label>
                  <input 
                    type="password" 
                    id="pass" 
                    name="password" 
                    // minlength="8" 
                    // required 
                    /* placeholder='Digite aqui sua senha!' */
                  />
                </div>
              </div>

            </div>
            

            <div className='filters__group'>
              <div className='filter'>
                <div>
                  <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 21C0 16.5817 3.58172 13 8 13C12.4183 13 16 16.5817 16 21H14C14 17.6863 11.3137 15 8 15C4.68629 15 2 17.6863 2 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM8 10C10.21 10 12 8.21 12 6C12 3.79 10.21 2 8 2C5.79 2 4 3.79 4 6C4 8.21 5.79 10 8 10Z" fill="black"/>
                  </svg>
                </div>
                <div className='filter__input'>
                  <label>Bairro</label>
                  <input 
                    type='text'
                    // required
                    /* placeholder='Digite aqui seu email!' */
                  />
                </div>
              </div>

              <div className='filter'>
                <div>
                  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7ZM2 9V19H16V9H2ZM8 13H10V15H8V13ZM4 13H6V15H4V13ZM12 13H14V15H12V13ZM13 7V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7H13Z" fill="black"/>
                  </svg>
                </div>
                <div className='filter__input'>
                  <label>Cidade</label>
                  <input 
                    type="password" 
                    id="pass" 
                    name="password" 
                    // minlength="8" 
                    // required 
                    /* placeholder='Digite aqui sua senha!' */
                  />
                </div>
              </div>
            </div>

            <div className='filter'>
              <div>
                <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7H17C17.5523 7 18 7.44772 18 8V20C18 20.5523 17.5523 21 17 21H1C0.44772 21 0 20.5523 0 20V8C0 7.44772 0.44772 7 1 7H3V6C3 2.68629 5.68629 0 9 0C12.3137 0 15 2.68629 15 6V7ZM2 9V19H16V9H2ZM8 13H10V15H8V13ZM4 13H6V15H4V13ZM12 13H14V15H12V13ZM13 7V6C13 3.79086 11.2091 2 9 2C6.79086 2 5 3.79086 5 6V7H13Z" fill="black"/>
                </svg>
              </div>
              <div className='filter__input'>
                <label>Logradouro</label>
                <input 
                  type="password" 
                  id="pass" 
                  name="password" 
                  // minlength="8" 
                  // required 
                  /* placeholder='Digite aqui sua senha!' */
                />
              </div>
            </div>
            
            <div className='buttons'>
              <button className='button__register'></button>
              <button className='button__login'>Finalizar</button>
            </div>
          </div>
        </LoginContainer>
      </Section>
    </Container>
  );
}