import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import Section from '../../components/Section';
import FormGroup from '../../components/FormGroup/index.js';

import Button from '../../components/Button';

import HeaderAdminModal from '../../components/HeaderAdminModal';
import Skeleton from '../../components/Skeleton';

import ModalProntuario from '../../components/ModalProntuario';

import { Container, AdminSection, NavBar, AdminContainer, AppointmentCard } from './styles.js';

import appointmentsPacient from '../../mocks/appointmentsPacient.js';
import appointmentsDoctor from '../../mocks/appointmentsDoctor.js';

import DataService from '../../services/DataService';

import { Context } from '../../Context/AuthContext';

export default function Admin() {
  const { type } = useParams();

  const [userType, setUserType] = useState('medico');
  const [sectionSelected, setSectionSelected] = useState(1);
  
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isProntuarioOpened, setIsProntuarioOpened] = useState(false);

  const [appointments, setAppointments] = useState();

  const [consultas, setConsultas] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { authenticated, handleLogout, userData } = useContext(Context);

  const navigate = useNavigate();

  useEffect(() => {
    if (!authenticated) {
      navigate('/login');
    }

    setTimeout(function() {
      /* setAppointments((
        userType === 'medico'
          ? appointmentsPacient
          : appointmentsDoctor
      )); */
  
      setUserType((
        type === 'medico'
          ? 'medico'
          : 'paciente'
      ))
  
      setAppointments((
        type === 'medico'
          ? appointmentsPacient
          : appointmentsDoctor
      ));

      setIsLoading(false);
    }, 1000);

    async function loadAppointments() {
      try {
        setIsLoading(true);
        setHasError(false);
        const consultasList = await DataService.listConsultas();

        console.log({consultasList});
        setConsultas(consultasList);
      } catch {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadAppointments();
  }, [])

  function handleToggleModal() {
    setIsModalOpened((prevState) => (
      prevState === true ? false : true
    ))
  }

  function handleToggleProntuario() {
    setIsProntuarioOpened((prevState) => (
      prevState === true ? false : true
    ))
  }

  function handleChangeSection(sectionId) {
    /* setSectionSelected((prevSection) => (prevSection === sectionId ? null : sectionId)); */
    setSectionSelected(sectionId);
  }

  /* if (!authenticated) {
    return (
      <Section $paddingTop='32'>
        <h1>Usuário não autenticado!</h1>
      </Section>
    );
  } */
  //console.log({authenticated});

  return (
    <>
      <HeaderAdminModal 
        isOpened={isModalOpened} 
        onToggleModal={handleToggleModal}
        sectionSelected={sectionSelected}
        onChangeSection={handleChangeSection}
      />

      <ModalProntuario
        isOpened={isProntuarioOpened} 
        onToggleModal={handleToggleProntuario}
      />

      <Container>
        <Section $paddingTop='48' $paddingBottom='0'>
            {/* <h1 style={{marginBottom: '32px'}}>Schedule</h1> */}

            <AdminSection>
              <NavBar>
                <h3><Link to="/#">Unisaúde</Link></h3>

                <button className='button-menu' onClick={handleToggleModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                </button>

                <ul>
                  <li 
                    onClick={() => setSectionSelected(1)}
                    className={sectionSelected === 1 ? 'selected' : ''}
                  >
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.72727 15.0456V10.1365H12.2727V15.0456H14.7273V1.95472H3.27273V15.0456H5.72727ZM7.36364 15.0456H10.6364V11.7729H7.36364V15.0456ZM16.3636 15.0456H18V16.682H0V15.0456H1.63636V1.13654C1.63636 0.684676 2.00268 0.318359 2.45455 0.318359H15.5455C15.9973 0.318359 16.3636 0.684676 16.3636 1.13654V15.0456ZM8.18182 5.22745V3.59109H9.81818V5.22745H11.4545V6.86381H9.81818V8.50018H8.18182V6.86381H6.54545V5.22745H8.18182Z" fill="#666666"/>
                    </svg>
                    Minhas consultas
                  </li>

                  <li 
                    onClick={() => setSectionSelected(2)}
                    className={sectionSelected === 2 ? 'selected' : ''}
                  >
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M1.63636 14.4091H16.3636V2.59095H1.63636V14.4091ZM0 1.77277C0 1.32091 0.366316 0.95459 0.818182 0.95459H17.1818C17.6337 0.95459 18 1.32091 18 1.77277V15.2273C18 15.6792 17.6337 16.0455 17.1818 16.0455H0.818182C0.366316 16.0455 0 15.6792 0 15.2273V1.77277ZM6.54545 6.86368C6.54545 6.41182 6.17914 6.0455 5.72727 6.0455C5.27541 6.0455 4.90909 6.41182 4.90909 6.86368C4.90909 7.31556 5.27541 7.68186 5.72727 7.68186C6.17914 7.68186 6.54545 7.31556 6.54545 6.86368ZM8.18182 6.86368C8.18182 8.21933 7.08288 9.31823 5.72727 9.31823C4.37167 9.31823 3.27273 8.21933 3.27273 6.86368C3.27273 5.50808 4.37167 4.40914 5.72727 4.40914C7.08288 4.40914 8.18182 5.50808 8.18182 6.86368ZM5.72874 11.7728C4.93775 11.7728 4.22296 12.0924 3.70385 12.6115L2.54677 11.4544C3.36022 10.641 4.48634 10.1364 5.72874 10.1364C6.97116 10.1364 8.0973 10.641 8.91074 11.4544L7.75366 12.6115C7.23454 12.0924 6.51975 11.7728 5.72874 11.7728ZM9.81812 6.68177H14.7272V5.04541H9.81812V6.68177ZM14.7272 9.13636H9.81812V7.5H14.7272V9.13636Z" fill="#666666"/>
                    </svg>
                    Dados Cadastrais
                  </li>

                  <li>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.26378 2.89419L8.41616 0.741853C8.73861 0.419382 9.26138 0.419382 9.5839 0.741853L11.7362 2.89419H14.7801C15.2361 2.89419 15.6058 3.26389 15.6058 3.71992V6.76378L17.7582 8.91615C18.0806 9.23859 18.0806 9.76144 17.7582 10.0839L15.6058 12.2362V15.2801C15.6058 15.7361 15.2361 16.1058 14.7801 16.1058H11.7362L9.5839 18.2582C9.26138 18.5806 8.73861 18.5806 8.41616 18.2582L6.26378 16.1058H3.21992C2.76388 16.1058 2.39419 15.7361 2.39419 15.2801V12.2362L0.241853 10.0839C-0.0806177 9.76144 -0.0806177 9.23859 0.241853 8.91615L2.39419 6.76378V3.71992C2.39419 3.26389 2.76388 2.89419 3.21992 2.89419H6.26378ZM4.04564 4.54564V7.44784L1.99348 9.50002L4.04564 11.5522V14.4544H6.94784L9.00003 16.5065L11.0521 14.4544H13.9544V11.5522L16.0065 9.50002L13.9544 7.44784V4.54564H11.0521L9.00003 2.49348L6.94784 4.54564H4.04564ZM9.00003 12.8029C7.17586 12.8029 5.69709 11.3241 5.69709 9.50002C5.69709 7.67586 7.17586 6.1971 9.00003 6.1971C10.8241 6.1971 12.3029 7.67586 12.3029 9.50002C12.3029 11.3241 10.8241 12.8029 9.00003 12.8029ZM9.00003 11.1515C9.91205 11.1515 10.6515 10.4121 10.6515 9.50002C10.6515 8.58792 9.91205 7.84856 9.00003 7.84856C8.08794 7.84856 7.34858 8.58792 7.34858 9.50002C7.34858 10.4121 8.08794 11.1515 9.00003 11.1515Z" fill="#666666"/>
                    </svg>
                    Configurações
                  </li>
                </ul>

                <button 
                  onClick={handleLogout}
                  className='button-close'
                >
                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.9 18.5C0.402948 18.5 0 18.0971 0 17.6V1.4C0 0.902948 0.402948 0.5 0.9 0.5H13.5C13.9971 0.5 14.4 0.902948 14.4 1.4V4.1H12.6V2.3H1.8V16.7H12.6V14.9H14.4V17.6C14.4 18.0971 13.9971 18.5 13.5 18.5H0.9ZM12.6 13.1V10.4H6.3V8.6H12.6V5.9L17.1 9.5L12.6 13.1Z" fill="#FF0000"/>
                  </svg>
                  Finalizar sessão 
                </button>
                
              </NavBar>

              <AdminContainer>
                {/* <h3>Cadastro</h3> */}

                {
                  sectionSelected === 1 && (
                    <div className='filters'>
                    {
                      userType === 'paciente'
                        ? (
                          <>
                            {
                              appointments?.map((appointment) => (
                                <AppointmentCard
                                  /* key={AppointmentCard.id}   */
                                  key={Math.random()}
                                >
                                  <div className='card__profile'>
                                  {/* <img src='' alt='' /> */}
                                    <div style={{
                                      width: '52px',
                                      height: '52px',
                                      borderRadius: '100%',
                                      border: '1px solid #E6E6E6',
                                    }}></div>

                                    <div>
                                      {/* <h4>Fulano Beltrano</h4> */}
                                      <h4>{appointment.nome} {appointment.sobrenome}</h4>
                                      <p>{appointment.especialidade}</p>
                                    </div>
                                  </div>

                                  <div className='card__schedule'>
                                    <p>
                                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.50002 0.833252V2.49992H12.5V0.833252H14.1667V2.49992H17.5C17.9603 2.49992 18.3334 2.87302 18.3334 3.33325V16.6666C18.3334 17.1268 17.9603 17.4999 17.5 17.4999H2.50002C2.03979 17.4999 1.66669 17.1268 1.66669 16.6666V3.33325C1.66669 2.87302 2.03979 2.49992 2.50002 2.49992H5.83335V0.833252H7.50002ZM16.6667 8.33325H3.33335V15.8333H16.6667V8.33325ZM12.5296 9.27992L13.7081 10.4585L9.58335 14.5833L6.63708 11.637L7.81559 10.4585L9.58335 12.2263L12.5296 9.27992ZM5.83335 4.16659H3.33335V6.66659H16.6667V4.16659H14.1667V4.99992H12.5V4.16659H7.50002V4.99992H5.83335V4.16659Z" fill="black"/>
                                      </svg>

                                      {/* <span>05 dez 2023</span> */}
                                      <span>{appointment.data}</span>
                                    </p>
                                    <p>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.99999 18.3334C5.39761 18.3334 1.66666 14.6024 1.66666 10.0001C1.66666 5.39771 5.39761 1.66675 9.99999 1.66675C14.6023 1.66675 18.3333 5.39771 18.3333 10.0001C18.3333 14.6024 14.6023 18.3334 9.99999 18.3334ZM9.99999 16.6667C13.6819 16.6667 16.6667 13.682 16.6667 10.0001C16.6667 6.31818 13.6819 3.33341 9.99999 3.33341C6.31809 3.33341 3.33332 6.31818 3.33332 10.0001C3.33332 13.682 6.31809 16.6667 9.99999 16.6667ZM10.8333 10.0001H14.1667V11.6667H9.16666V5.83341H10.8333V10.0001Z" fill="black"/>
                                  </svg>

                                      {/* <span>15:00 - 15:30</span> */}
                                      <span>{appointment.hora_inicio} - {appointment.hora_termino}</span>
                                    </p>
                                  </div>

                                  <div className='card__more-info'>
                                    {/* <p>Rua Oliveiras, Nº 123 - Janga, Paulista</p> */}
                                    <p>{appointment.logradouro} - {appointment.bairro}, {appointment.cidade}</p>
                                    <p>
                                      {/* <span>(81) 3435-7829</span> */}
                                      <span>{appointment.telefone}</span>
                                      {/* <span>R$ 120,00</span> */}
                                      <span>
                                        {
                                          appointment.aceita_convenio === '1' 
                                            ? 'Convênio'
                                            : Number(appointment.preco)?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
                                        }
                                      </span>
                                    </p>
                                  </div>
                                </AppointmentCard>
                              ))
                            }
                          </>
                        ) : (
                          <>
                            {
                              appointments?.map((appointment) => (
                                <AppointmentCard  
                                  /* key={AppointmentCard.id} */
                                  key={Math.random()}

                                  $userTypeDoctor={userType === 'medico' ? true : false}
                                >
                                  <div className='card__profile'>
                                  {/* <img src='' alt='' /> */}
                                    <div style={{
                                      width: '52px',
                                      height: '52px',
                                      borderRadius: '100%',
                                      border: '1px solid #E6E6E6',
                                    }}></div>

                                    <div>
                                      {/* <h4>Fulano Beltrano</h4> */}
                                      <h4>{appointment.nome} {appointment.sobrenome}</h4>
                                      <p>Paciente</p>
                                    </div>
                                  </div>

                                  <div className='card__schedule'>
                                    <p>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M7.50002 0.833252V2.49992H12.5V0.833252H14.1667V2.49992H17.5C17.9603 2.49992 18.3334 2.87302 18.3334 3.33325V16.6666C18.3334 17.1268 17.9603 17.4999 17.5 17.4999H2.50002C2.03979 17.4999 1.66669 17.1268 1.66669 16.6666V3.33325C1.66669 2.87302 2.03979 2.49992 2.50002 2.49992H5.83335V0.833252H7.50002ZM16.6667 8.33325H3.33335V15.8333H16.6667V8.33325ZM12.5296 9.27992L13.7081 10.4585L9.58335 14.5833L6.63708 11.637L7.81559 10.4585L9.58335 12.2263L12.5296 9.27992ZM5.83335 4.16659H3.33335V6.66659H16.6667V4.16659H14.1667V4.99992H12.5V4.16659H7.50002V4.99992H5.83335V4.16659Z" fill="black"/>
                                    </svg>

                                      {/* <span>05 dez 2023</span> */}
                                      <span>{appointment.data}</span>
                                    </p>
                                    <p>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M9.99999 18.3334C5.39761 18.3334 1.66666 14.6024 1.66666 10.0001C1.66666 5.39771 5.39761 1.66675 9.99999 1.66675C14.6023 1.66675 18.3333 5.39771 18.3333 10.0001C18.3333 14.6024 14.6023 18.3334 9.99999 18.3334ZM9.99999 16.6667C13.6819 16.6667 16.6667 13.682 16.6667 10.0001C16.6667 6.31818 13.6819 3.33341 9.99999 3.33341C6.31809 3.33341 3.33332 6.31818 3.33332 10.0001C3.33332 13.682 6.31809 16.6667 9.99999 16.6667ZM10.8333 10.0001H14.1667V11.6667H9.16666V5.83341H10.8333V10.0001Z" fill="black"/>
                                  </svg>

                                      {/* <span>15:00 - 15:30</span> */}
                                      <span>{appointment.hora_inicio} - {appointment.hora_termino}</span>
                                    </p>
                                  </div>

                                  <div className='card__more-info'>
                                    {/* <p>127.791.484-83</p> */}
                                    <div>
                                      <p>{appointment.cpf}</p>
                                      <p>
                                        {/* <span>(81) 3435-7829</span> */}
                                        <span>{appointment.telefone}</span>
                                        {/* <span>R$ 120,00</span> */}
                                        <span>
                                          {
                                            appointment.possui_convenio === '1' 
                                              ? 'Convênio'
                                              : Number(appointment.preco)?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})
                                          }
                                        </span>
                                      </p>
                                    </div>

                                    <div className='card__action'>
                                      <button onClick={handleToggleProntuario}>
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
                                      </svg>
                                        <span>Prontuário</span>
                                      </button>
                                    </div>
                                  </div>
                                
                                  
                                </AppointmentCard>
                              ))
                            }
                          </>
                        )
                    }

                    {
                      isLoading && (
                        [0, 1, 3].map((item) => (
                          <AppointmentCard key={Math.random()}>
                            <div className='card__profile'>
                            {/* <img src='' alt='' /> */}
                              <div style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '100%',
                                border: '1px solid #E6E6E6',
                              }}></div>

                              <div>
                                {/* <h4>Fulano Beltrano</h4> */}
                                <Skeleton type='title' />
                                <Skeleton type='text' />
                                {/* <p>Paciente</p> */}
                              </div>
                            </div>
                            <div className='card__schedule'>
                              {/* <p>
                                <span>05 dez 2023</span>
                              </p> */}
                                <Skeleton type='text' />
                              {/* <p>
                                <span>15:00 - 15:30</span>
                              </p> */}
                                <Skeleton type='text' />
                            </div>

                            <div className='card__more-info'>
                              {/* <p>127.791.484-83</p> */}
                              {/* <Skeleton type='text' /> */}
                              {/* <p>
                                <span>(81) 3435-7829</span>
                                <span>R$ 120,00</span>
                              </p> */}
                              <>
                                <Skeleton type='text' />
                                <Skeleton type='text' />
                              </>
                            </div>
                          </AppointmentCard>
                        ))
                      )
                    }
                    </div>
                  )
                }

                {
                  sectionSelected === 2 && (
                    <div className='filters'>
                    {
                        userType === 'paciente'
                          ? (
                            <>
                              <div className='filters__group'>
                                <FormGroup  
                                  icon='user' 
                                  label='Nome'
                                >
                                  <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder='Digite seu nome'
                                  />
                                </FormGroup>
                                <FormGroup  
                                  icon='user' 
                                  label='Sobrenome'
                                >
                                  <input 
                                    type="text" 
                                    id="lastName" 
                                    name="lastName" 
                                    placeholder='Digite seu sobrenome'
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
                                    id="cpf" 
                                    name="cpf" 
                                    placeholder='Digite seu CPF'
                                  />
                                </FormGroup>
                                <FormGroup  
                                  icon='id' 
                                  label='RG'
                                >
                                  <input 
                                    type="text" 
                                    id="rg" 
                                    name="rg" 
                                    placeholder='Digite seu RG'
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
                                    id="phone" 
                                    name="phone" 
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
                                    id="bairro" 
                                    name="bairro" 
                                    placeholder='Digite seu bairro'
                                  />
                                </FormGroup>
                                <FormGroup  
                                  icon='map' 
                                  label='Cidade'
                                >
                                  <input 
                                    type="text" 
                                    id="cidade" 
                                    name="cidade" 
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
                                  id="logradouro" 
                                  name="logradouro" 
                                  placeholder='Digite nome da rua e número do endereço'
                                />
                              </FormGroup>
                            </>
                          ) : (
                            <>
                              <div className='filters__group'>
                                <FormGroup  
                                  icon='user' 
                                  label='Nome'
                                >
                                  <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    placeholder='Digite seu nome'
                                  />
                                </FormGroup>
                                <FormGroup  
                                  icon='user' 
                                  label='Sobrenome'
                                >
                                  <input 
                                    type="text" 
                                    id="lastName" 
                                    name="lastName" 
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
                                    id="crm" 
                                    name="crm" 
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
                                    id="phone" 
                                    name="phone" 
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
                                    id="bairro" 
                                    name="bairro" 
                                    placeholder='Digite o bairro onde atende'
                                  />
                                </FormGroup>
                                <FormGroup  
                                  icon='map' 
                                  label='Cidade'
                                >
                                  <input 
                                    type="text" 
                                    id="cidade" 
                                    name="cidade" 
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
                                  id="logradouro" 
                                  name="logradouro" 
                                  placeholder='Digite nome da rua e número onde atende'
                                />
                              </FormGroup>
                            </>
                          )
                      }
                      
                      <div className='buttons'>
                        <button className='button__register'></button>
                        <button className='button__login'>Finalizar</button>
                      </div>
                    </div>
                  )
                }
              </AdminContainer>
            </AdminSection>
        </Section>
      </Container>
    </>
  );
}