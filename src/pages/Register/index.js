import { useState } from 'react';

import { Container, LoginContainer } from './styles';

import Section from '../../components/Section.js';
import FormGroup from '../../components/FormGroup';

import Button from '../../components/Button';

export default function Register() {
  const [userType, setUserType] = useState('paciente');

  const [userFormState, setUserFormState] = useState({
    username: '',
    password: '',
    rePassword: '',
  });

  const handleUserInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormState((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const isUserFormValid = Object.values(userFormState).every((value) => value !== '');

  const [patientFormState, setPatientFormState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    cpf: '',
    rg: '',
    phone: '',
    hasInsurance: '',
  });

  const handlePatientInputChange = (event) => {
    const { name, value } = event.target;
    setPatientFormState((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const isPatientFormValid = Object.values(patientFormState).every((value) => value !== '');

  const [doctorFormState, setDoctorFormState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    crm: '',
    specialty: '',
    phone: '',
    acceptInsurance: '',
    district: '',
    city: '',
    address: '',
  });

  const handleDoctorInputChange = (event) => {
    const { name, value } = event.target;
    setDoctorFormState((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const isDoctorFormValid = Object.values(doctorFormState).every((value) => value !== '');

  const isFormValid = (
    userType === 'medico'
      ? isUserFormValid && isDoctorFormValid
      : isUserFormValid && isPatientFormValid
  );

  console.log({ doctorFormState });

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
                /* id="username"  */
                name="username" 
                placeholder='Digite seu nome de usuário'
                value={userFormState.username}
                onChange={handleUserInputChange}
              />
            </FormGroup>
          
            <div className='filters__group'>
              <FormGroup  
                icon='password' 
                label='Senha'
              >
                <input 
                  type="password" 
                  /* id="pass"  */
                  name="password"
                  placeholder='Digite sua senha'
                  value={userFormState.password}
                  onChange={handleUserInputChange}
                />
              </FormGroup>
              <FormGroup  
                icon='password' 
                label='Confirmar senha'
              >
                <input 
                  type="password" 
                  /* id="rePass"  */
                  name="rePassword" 
                  placeholder='Repita sua senha'
                  value={userFormState.rePassword}
                  onChange={handleUserInputChange}
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
                        /* id="email"  */
                        name="email" 
                        placeholder='Digite seu melhor email'
                        value={patientFormState.email}
                        onChange={handlePatientInputChange}
                      />
                    </FormGroup>

                    <div className='filters__group'>
                      <FormGroup  
                        icon='user' 
                        label='Nome'
                      >
                        <input 
                          type="text" 
                          /* id="firstName"  */
                          name="firstName" 
                          placeholder='Digite seu nome'
                          value={patientFormState.firstName}
                          onChange={handlePatientInputChange}
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='user' 
                        label='Sobrenome'
                      >
                        <input 
                          type="text" 
                          /* id="lastName"  */
                          name="lastName" 
                          placeholder='Digite seu sobrenome'
                          value={patientFormState.lastName}
                          onChange={handlePatientInputChange}
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
                          /* id="cpf"  */
                          name="cpf" 
                          placeholder='Digite seu CPF'
                          value={patientFormState.cpf}
                          onChange={handlePatientInputChange}
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='id' 
                        label='RG'
                      >
                        <input 
                          type="text" 
                          /* id="rg"  */
                          name="rg" 
                          placeholder='Digite seu RG'
                          value={patientFormState.rg}
                          onChange={handlePatientInputChange}
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
                          /* id="phone"  */
                          name="phone" 
                          placeholder='Digite seu número de telefone'
                          value={patientFormState.phone}
                          onChange={handlePatientInputChange}
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='id' 
                        label='Possui convênio'
                      >
                        <select
                          name="hasInsurance"
                          value={patientFormState.hasInsurance}
                          onChange={handlePatientInputChange}
                        >
                          <option value="0">Não</option>
                          <option value="1">Sim</option>
                        </select>
                      </FormGroup>
                    </div>
                  </>
                ) : (
                  <>
                    <FormGroup  
                      icon='email' 
                      label='Email'
                    >
                      <input 
                        type="email" 
                        /* id="email" */ 
                        name="email" 
                        placeholder='Digite seu melhor email'
                        value={doctorFormState.email}
                        onChange={handleDoctorInputChange}
                      />
                    </FormGroup>

                    <div className='filters__group'>
                      <FormGroup  
                        icon='user' 
                        label='Nome'
                      >
                        <input 
                          type="text" 
                          /* id="firstName"  */
                          name="firstName" 
                          placeholder='Digite seu nome'
                          value={doctorFormState.firstName}
                          onChange={handleDoctorInputChange}
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='user' 
                        label='Sobrenome'
                      >
                        <input 
                          type="text" 
                          /* id="lastName" */ 
                          name="lastName" 
                          placeholder='Digite seu sobrenome'
                          value={doctorFormState.lastName}
                          onChange={handleDoctorInputChange}
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
                          /* id="crm" */ 
                          name="crm" 
                          placeholder='Digite seu CRM'
                          value={doctorFormState.crm}
                          onChange={handleDoctorInputChange}
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='medicine' 
                        label='Especialidade'
                      >
                        <select
                          name='specialty'
                          value={doctorFormState.specialty}
                          onChange={handleDoctorInputChange}
                        >
                          <option 
                            defaultValue hidden value={''}
                          >Selecione a opção</option>
                          <option value="1">Cardiologista</option>
                          <option value="2">Endocrinologista</option>
                          <option value="3">Clínico geral</option>
                          <option value="4">Psiquiatra</option>
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
                          /* id="phone"  */
                          name="phone" 
                          placeholder='Digite o número para contato'
                          value={doctorFormState.phone}
                          onChange={handleDoctorInputChange}
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='id' 
                        label='Aceita convênio'
                      >
                        <select
                          name="acceptInsurance"
                          value={doctorFormState.acceptInsurance}
                          onChange={handleDoctorInputChange}
                        >
                          <option 
                            defaultValue hidden value={''}
                          >Selecione a opção</option>
                          <option value="0">Não</option>
                          <option value="1">Sim</option>
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
                          /* id="district"  */
                          name="district" 
                          placeholder='Digite o bairro onde atende'
                          value={doctorFormState.district}
                          onChange={handleDoctorInputChange}
                        />
                      </FormGroup>
                      <FormGroup  
                        icon='map' 
                        label='Cidade'
                      >
                        <input 
                          type="text" 
                          /* id="city"  */
                          name="city" 
                          placeholder='Digite a cidade onde atende'
                          value={doctorFormState.city}
                          onChange={handleDoctorInputChange}
                        />
                      </FormGroup>
                    </div>

                    <FormGroup  
                      icon='map' 
                      label='Logradouro'
                    >
                      <input 
                        type="text" 
                        /* id="address"  */
                        name="address" 
                        placeholder='Digite nome da rua e número onde atende'
                        value={doctorFormState.address}
                        onChange={handleDoctorInputChange}
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