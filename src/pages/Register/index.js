import { useState } from 'react';

import { Container, LoginContainer } from './styles';

import Section from '../../components/Section.js';
import FormGroup from '../../components/FormGroup';

import Button from '../../components/Button';

export default function Register() {
  const [userType, setUserType] = useState('paciente');

  const [formState, setFormState] = useState({
    userName: '',
    password: '',
    repassword: '',
    email: '',
    firstName: '',
    lastName: '',
    cpf: '',
    rg: '',
    /* repassword: '',
    repassword: '',
    repassword: '', */
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isFormValid = formState.userName !== '' && formState.password !== '' && formState.repassword !== '' && formState.email !== '' /* && formState.firstName !== '' */ && formState.lastName !== '' && formState.cpf !== '' && formState.rg !== '' ? true : false;

  console.log({formState, isFormValid})

  return (
    <Container>
      <Section>
        <LoginContainer>
          <h3>Cadastro</h3>

          <div className='filters'>
            <FormGroup  
              icon='user' 
              label='Nome de usuário'
            >
              <input 
                type="text" 
                /* id="userName" 
                name="userName"  */
                placeholder='Digite seu nome de usuário'
                value={formState.userName}
                onChange={handleInputChange}
              />
            </FormGroup>
          
            <div className='filters__group'>
              <FormGroup  
                icon='password' 
                label='Senha'
              >
                <input 
                  type="password" 
                  /* id="pass" 
                  name="password" */
                  placeholder='Digite sua senha' 
                  value={formState.password}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup  
                icon='password' 
                label='Confirmar senha'
              >
                <input 
                  type="password" 
                  /* id="repass" 
                  name="repassword"  */
                  placeholder='Repita sua senha'
                  value={formState.repassword}
                  onChange={handleInputChange}
                />
              </FormGroup>
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

            {
              userType === 'paciente'
                ? (
                  <>
                    <FormGroup  
                      icon='email' 
                      label='Email'
                    >
                      <input 
                        type="email" 
                        /* id="email" 
                        name="email"  */
                        placeholder='Digite seu melhor email'
                        value={formState.email}
                        onChange={handleInputChange}
                      />
                    </FormGroup>

                    <div className='filters__group'>
                      <FormGroup  
                        icon='user' 
                        label='Nome'
                      >
                        <input 
                          type="text" 
                          /* id="firstName" 
                          name="firstName"  */
                          placeholder='Digite seu nome'
                          value={formState.firstName}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='user' 
                        label='Sobrenome'
                      >
                        <input 
                          type="text" 
                          /* id="lastName" 
                          name="lastName"  */
                          placeholder='Digite seu sobrenome'
                          value={formState.lastName}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </div>

                    <div className='filters__group'>
                      <FormGroup  
                        icon='id' 
                        label='CPF'
                      >
                        <input 
                          type="text" 
                          /* id="cpf" 
                          name="cpf"  */
                          placeholder='Digite seu CPF'
                          value={formState.cpf}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='id' 
                        label='RG'
                      >
                        <input 
                          type="text" 
                          /* id="rg" 
                          name="rg"  */
                          placeholder='Digite seu RG'
                          value={formState.rg}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </div>

                    <div className='filters__group'>
                      <FormGroup  
                        icon='phone' 
                        label='Telefone'
                      >
                        <input 
                          type="tel" 
                          /* id="phone" 
                          name="phone"  */
                          placeholder='Digite seu número de telefone'
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='id' 
                        label='Possui convênio'
                      >
                        <select>
                          <option>Não</option>
                          <option>Sim</option>
                        </select>
                      </FormGroup>
                    </div>

                    <div className='filters__group'>
                      <FormGroup  
                        icon='map' 
                        label='Bairro'
                      >
                        <input 
                          type="text" 
                          /* id="bairro" 
                          name="bairro"  */
                          placeholder='Digite seu bairro'
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='map' 
                        label='Cidade'
                      >
                        <input 
                          type="text" 
                          /* id="cidade" 
                          name="cidade"  */
                          placeholder='Digite seu cidade'
                        />
                      </FormGroup>
                    </div>

                    <FormGroup  
                      icon='map' 
                      label='Logradouro'
                    >
                      <input 
                        type="text" 
                        /* id="logradouro" 
                        name="logradouro"  */
                        placeholder='Digite nome da rua e número do endereço'
                      />
                    </FormGroup>
                  </>
                ) : (
                  <>
                    <FormGroup  
                      icon='email' 
                      label='Email'
                    >
                      <input 
                        type="email" 
                        /* id="email" 
                        name="email" */ 
                        placeholder='Digite seu melhor email'
                      />
                    </FormGroup>

                    <div className='filters__group'>
                      <FormGroup  
                        icon='user' 
                        label='Nome'
                      >
                        <input 
                          type="text" 
                          /* id="name" 
                          name="name"  */
                          placeholder='Digite seu nome'
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='user' 
                        label='Sobrenome'
                      >
                        <input 
                          type="text" 
                          /* id="lastName" 
                          name="lastName" */ 
                          placeholder='Digite seu sobrenome'
                        />
                      </FormGroup>
                    </div>

                    <div className='filters__group'>
                      <FormGroup  
                        icon='id' 
                        label='CRM'
                      >
                        <input 
                          type="text" 
                          /* id="crm" 
                          name="crm" */ 
                          placeholder='Digite seu CRM'
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='medicine' 
                        label='Especialidade'
                      >
                        <select>
                          <option>Cardiologista</option>
                          <option>Endocrinologista</option>
                          <option>Clínico geral</option>
                          <option>Psiquiatra</option>
                        </select>
                      </FormGroup>
                    </div>

                    <div className='filters__group'>
                      <FormGroup  
                        icon='phone' 
                        label='Telefone'
                      >
                        <input 
                          type="tel" 
                          /* id="phone" 
                          name="phone"  */
                          placeholder='Digite o número para contato'
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='id' 
                        label='Aceita convênio'
                      >
                        <select>
                          <option>Não</option>
                          <option>Sim</option>
                        </select>
                      </FormGroup>
                    </div>

                    <div className='filters__group'>
                      <FormGroup  
                        icon='map' 
                        label='Bairro'
                      >
                        <input 
                          type="text" 
                          /* id="bairro" 
                          name="bairro"  */
                          placeholder='Digite o bairro onde atende'
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='map' 
                        label='Cidade'
                      >
                        <input 
                          type="text" 
                          /* id="cidade" 
                          name="cidade" */ 
                          placeholder='Digite a cidade onde atende'
                        />
                      </FormGroup>
                    </div>

                    <FormGroup  
                      icon='map' 
                      label='Logradouro'
                    >
                      <input 
                        type="text" 
                        /* id="logradouro" 
                        name="logradouro" */ 
                        placeholder='Digite nome da rua e número onde atende'
                      />
                    </FormGroup>
                  </>
                )
            }

            <div className='buttons'>
              <button className='button__register'></button>
              {/* <button className='button__login'>Finalizar</button> */}
              <Button
                disabled={!isFormValid}
              >
                Finalizar
              </Button>
            </div>
          </div>
        </LoginContainer>
      </Section>
    </Container>
  );
}