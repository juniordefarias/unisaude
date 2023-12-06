import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container, LoginContainer } from './styles';

import Section from '../../components/Section.js';
import FormGroup from '../../components/FormGroup';

import Button from '../../components/Button.js';

export default function Login() {
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const isFormValid = formState.username !== '' && formState.password !== '' ? true : false;

  return (
    <Container>
      <Section>
        <LoginContainer>
          <h3>Fazer Login</h3>

          <div className='filters'>
            <FormGroup  
              icon='user' 
              label='Nome de usuário'
            >
              <input 
                type="text" 
                id="userName" 
                name="userName" 
                placeholder='Digite seu nome de usuário aqui'
              />
            </FormGroup>

            <FormGroup  
              icon='password' 
              label='Senha'
            >
              <input 
                type="password" 
                id="pass" 
                name="password" 
                placeholder='Digite sua senha aqui'
              />
            </FormGroup>

            <div className='buttons'>
              <button className='button__register'><Link to='/register'>Criar conta</Link></button>
              <Button disabled={isFormValid}>Fazer login</Button>
            </div>
          </div>
        </LoginContainer>
      </Section>
    </Container>
  );
}