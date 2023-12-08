import { useContext, useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Container, LoginContainer } from './styles';

import Section from '../../components/Section.js';
import FormGroup from '../../components/FormGroup';

import Button from '../../components/Button.js';

import { Context } from '../../Context/AuthContext';

export default function Login() {
  const { authenticated, handleLogin } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate('/admin');
    }
  }, [])

  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

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
                /* id="userName"  */
                name="username" 
                placeholder='Digite seu nome de usuário aqui'
                value={formState.username}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup  
              icon='password' 
              label='Senha'
            >
              <input 
                type="password" 
                /* id="pass"  */
                name="password" 
                placeholder='Digite sua senha aqui'
                value={formState.password}
                onChange={handleInputChange}
              />
            </FormGroup>

            <div className='buttons'>
              <button className='button__register'><Link to='/register'>Criar conta</Link></button>
              <Button 
                onClick={() => handleLogin(formState)}
                disabled={!isFormValid}
              >
                Fazer login
              </Button>
            </div>
          </div>
        </LoginContainer>
      </Section>
    </Container>
  );
}