import { Link } from 'react-router-dom';

import { Container, HomeSection, Banner, Testimonials, Footer } from './styles';

import Section from '../../components/Section.js';

import doctorHome from '../../assets/images/doctor-home.png';
import doctorSmall from '../../assets/images/doctor-small.png';

import bannerDoctor1 from '../../assets/images/banner-doctor-1.png';
import bannerDoctor2 from '../../assets/images/banner-doctor-2.png';

export default function Home() {
  return (
    <Container>
      <Section /* $paddingTop='32' $paddingBottom='0' */>
        <HomeSection>
          <div className='home__description'>
            {/* <h1>Lorem ipsum dolor sit amet!</h1> */}
            <h1>Sua saúde merece essa conveniência!</h1>
            {/* <p>Nam quae pariatur aut quasi obcaecati eum quidem dolores! Aut delectus quas eum galisum minus quo quaerat consequatur At corrupti molestias cum enim quia.</p> */}
            <p>Diga adeus às esperas e às ligações intermináveis. Acesse seu histórico médico e gerencie suas marcações de forma simples, tudo em um só lugar.</p>
            <div className='filters'>
              <div className='filter'>
                <div>
                  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.72727 15.0456V10.1365H12.2727V15.0456H14.7273V1.95472H3.27273V15.0456H5.72727ZM7.36364 15.0456H10.6364V11.7729H7.36364V15.0456ZM16.3636 15.0456H18V16.682H0V15.0456H1.63636V1.13654C1.63636 0.684676 2.00268 0.318359 2.45455 0.318359H15.5455C15.9973 0.318359 16.3636 0.684676 16.3636 1.13654V15.0456ZM8.18182 5.22745V3.59109H9.81818V5.22745H11.4545V6.86381H9.81818V8.50018H8.18182V6.86381H6.54545V5.22745H8.18182Z" fill="black"/>
                  </svg>
                </div>
                <div className='filter__input'>
                  <label>Especialidade</label>
                  <select>
                    <option>Selecione</option>
                  </select>
                </div>
              </div>

              <div className='filter'>
                <div>
                  <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.52417 14.2701V4.65207L0.0241699 5.29492V15.9762C0.0241699 16.027 0.0344825 16.0773 0.0544925 16.1239C0.136077 16.3143 0.356525 16.4025 0.54689 16.3209L5.27417 14.2949L9.77417 16.5449L15.0242 14.2949V3.61362C15.0242 3.56284 15.0138 3.51258 14.9939 3.4659C14.9123 3.27554 14.6918 3.18736 14.5014 3.26895L13.5242 3.68778V13.3058L9.82277 14.8921L5.32274 12.6421L1.52417 14.2701ZM7.52417 11.6589L10.7061 8.47687C12.4635 6.71954 12.4635 3.8703 10.7061 2.11294C8.94879 0.355582 6.09954 0.355582 4.34219 2.11294C2.58483 3.8703 2.58483 6.71954 4.34219 8.47687L7.52417 11.6589ZM9.64547 7.41624L7.52417 9.5376L5.40285 7.41624C4.23128 6.24467 4.23128 4.34517 5.40285 3.1736C6.57444 2.00203 8.47389 2.00203 9.64547 3.1736C10.817 4.34517 10.817 6.24467 9.64547 7.41624ZM7.52417 6.79492C6.69574 6.79492 6.02417 6.12333 6.02417 5.29492C6.02417 4.46649 6.69574 3.79492 7.52417 3.79492C8.35258 3.79492 9.02417 4.46649 9.02417 5.29492C9.02417 6.12333 8.35258 6.79492 7.52417 6.79492Z" fill="black"/>
                  </svg>
                </div>
                <div className='filter__input'>
                  <label>Cidade</label>
                  <select>
                    <option>Selecione</option>
                  </select>
                </div>
              </div>

              <div className='filter'>
                <div>
                  <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.37904 14.121H17.1063V2.30287H2.37904V14.121ZM0.742676 1.48469C0.742676 1.03282 1.10899 0.666504 1.56086 0.666504H17.9245C18.3764 0.666504 18.7427 1.03282 18.7427 1.48469V14.9392C18.7427 15.3911 18.3764 15.7574 17.9245 15.7574H1.56086C1.10899 15.7574 0.742676 15.3911 0.742676 14.9392V1.48469ZM7.28813 6.57559C7.28813 6.12373 6.92181 5.75741 6.46995 5.75741C6.01808 5.75741 5.65177 6.12373 5.65177 6.57559C5.65177 7.02748 6.01808 7.39378 6.46995 7.39378C6.92181 7.39378 7.28813 7.02748 7.28813 6.57559ZM8.92449 6.57559C8.92449 7.93124 7.82555 9.03014 6.46995 9.03014C5.11434 9.03014 4.0154 7.93124 4.0154 6.57559C4.0154 5.21999 5.11434 4.12105 6.46995 4.12105C7.82555 4.12105 8.92449 5.21999 8.92449 6.57559ZM6.47142 11.4847C5.68043 11.4847 4.96564 11.8043 4.44653 12.3234L3.28945 11.1663C4.10289 10.3529 5.22901 9.84832 6.47142 9.84832C7.71384 9.84832 8.83998 10.3529 9.65341 11.1663L8.49634 12.3234C7.97721 11.8043 7.26242 11.4847 6.47142 11.4847ZM10.5608 6.39369H15.4699V4.75732H10.5608V6.39369ZM15.4699 8.84828H10.5608V7.21191H15.4699V8.84828Z" fill="black"/>
                  </svg>
                </div>
                <div className='filter__input'>
                  <label>Convênio</label>
                  <select>
                    <option>Selecione</option>
                  </select>
                </div>
              </div>

              <button 
                onClick={() => {
                  window.location.href = '/schedule';
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
          <img src={doctorHome} alt='doutora' />
        </HomeSection>
      </Section>
      <Section $paddingTop='0' $paddingBottom='96'>
        <Banner>
          <div className='banner__description'>
            {/* <h2>Lorem ipsum dolor sit amet.</h2> */}
            <h2>Elimine todas esperas e burocrácias!</h2>
            {/* <p>Nam quae pariatur aut quasi obcaecati eum quidem dolores! Aut delectus quas eum galisum minus quo quaerat consequatur At corrupti molestias cum enim quia.</p> */}
            <p>Agende suas consultas médicas 24 horas por dia, 7 dias por semana. Diga adeus às esperas e às ligações intermináveis. Sua saúde merece essa conveniência!</p>
          </div>

          <div className='banner__cards'>
            <div className='card'>
              <div className='card__description'>
                <h3>Agiliade de marcar consultas</h3>
                <button
                  onClick={() => {
                      window.location.href = '/schedule';
                  }}
                >Agendar</button>
              </div>

              <img src={bannerDoctor1} alt="doutora" />
            </div>

            <div className='card'>
              <div className='card__description'>
                {/* <h3>Lorem ipsum dolor sit amet</h3> */}
                <h3>Preencha sua agenda rapidamente</h3>
                
                <button 
                  onClick={() => {
                    window.location.href = '/register';
                }}>Cadastrar</button>
              </div>
              
              <img src={bannerDoctor2} alt="doutora" />
            </div>
          </div>
        </Banner>
      </Section>
      
      <Section $paddingTop='64' $paddingBottom='64'>
        <h1>O que dizem sobre nós!</h1>

        <Testimonials>
          <div className='card'>
            <svg width="63" height="49" viewBox="0 0 63 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.55714 44.7478C1.94137 40.9097 0 36.6016 0 29.6189C0 17.3372 8.62137 6.32682 21.165 0.885254L24.298 5.72012C12.5926 12.0535 10.3048 20.2683 9.39043 25.4485C11.2751 24.4739 13.7421 24.131 16.1607 24.3552C22.4933 24.942 27.4844 30.1408 27.4844 36.6016C27.4844 43.3857 21.9847 48.8853 15.2007 48.8853C11.4346 48.8853 7.83329 47.1641 5.55714 44.7478ZM40.6531 44.7478C37.0375 40.9097 35.096 36.6016 35.096 29.6189C35.096 17.3372 43.7174 6.32682 56.261 0.885254L59.3941 5.72012C47.6885 12.0535 45.4009 20.2683 44.4863 25.4485C46.371 24.4739 48.8382 24.131 51.2567 24.3552C57.5894 24.942 62.5804 30.1408 62.5804 36.6016C62.5804 43.3857 57.0809 48.8853 50.2968 48.8853C46.5307 48.8853 42.9295 47.1641 40.6531 44.7478Z" fill="#3EA2FF"/>
            </svg>
            
            <p className='testimonial-description'>Eu estava cansada de esperar horas para marcar uma simples consulta médica. Agora consigo marcar minhas consultas de forma rápida e conveniente!</p>

            <div className='card__profile'>
              <img src='' />

              <div className='card__info'>
                <p>Fulano Beltrano</p>
                <span>Paciente</span>
              </div>
            </div>
          </div>

          <div className='card'>
            <svg width="63" height="49" viewBox="0 0 63 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.55714 44.7478C1.94137 40.9097 0 36.6016 0 29.6189C0 17.3372 8.62137 6.32682 21.165 0.885254L24.298 5.72012C12.5926 12.0535 10.3048 20.2683 9.39043 25.4485C11.2751 24.4739 13.7421 24.131 16.1607 24.3552C22.4933 24.942 27.4844 30.1408 27.4844 36.6016C27.4844 43.3857 21.9847 48.8853 15.2007 48.8853C11.4346 48.8853 7.83329 47.1641 5.55714 44.7478ZM40.6531 44.7478C37.0375 40.9097 35.096 36.6016 35.096 29.6189C35.096 17.3372 43.7174 6.32682 56.261 0.885254L59.3941 5.72012C47.6885 12.0535 45.4009 20.2683 44.4863 25.4485C46.371 24.4739 48.8382 24.131 51.2567 24.3552C57.5894 24.942 62.5804 30.1408 62.5804 36.6016C62.5804 43.3857 57.0809 48.8853 50.2968 48.8853C46.5307 48.8853 42.9295 47.1641 40.6531 44.7478Z" fill="#3EA2FF"/>
            </svg>
            
            <p className='testimonial-description'>Sempre foi um desafio marcar consultas para minha família. Com o agendamento online, consigo gerenciar as consultas dos meus filhos de forma eficiente!</p>

            <div className='card__profile'>
              <img src='' />

              <div className='card__info'>
                <p>Tatiane Silva</p>
                <span>Paciente</span>
              </div>
            </div>
          </div>

          <div className='card'>
            <svg width="63" height="49" viewBox="0 0 63 49" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.55714 44.7478C1.94137 40.9097 0 36.6016 0 29.6189C0 17.3372 8.62137 6.32682 21.165 0.885254L24.298 5.72012C12.5926 12.0535 10.3048 20.2683 9.39043 25.4485C11.2751 24.4739 13.7421 24.131 16.1607 24.3552C22.4933 24.942 27.4844 30.1408 27.4844 36.6016C27.4844 43.3857 21.9847 48.8853 15.2007 48.8853C11.4346 48.8853 7.83329 47.1641 5.55714 44.7478ZM40.6531 44.7478C37.0375 40.9097 35.096 36.6016 35.096 29.6189C35.096 17.3372 43.7174 6.32682 56.261 0.885254L59.3941 5.72012C47.6885 12.0535 45.4009 20.2683 44.4863 25.4485C46.371 24.4739 48.8382 24.131 51.2567 24.3552C57.5894 24.942 62.5804 30.1408 62.5804 36.6016C62.5804 43.3857 57.0809 48.8853 50.2968 48.8853C46.5307 48.8853 42.9295 47.1641 40.6531 44.7478Z" fill="#3EA2FF"/>
            </svg>
            
            <p className='testimonial-description'>Os pacientes amam a conveniência. É incrível como a facilidade de agendamento online atrai mais pacientes. Recomendo para todos os colegas!</p>

            <div className='card__profile'>
              <img src='' />

              <div className='card__info'>
                <p>Dr. Alejandro Moraes</p>
                <span>Médico</span>
              </div>
            </div>
          </div>
        </Testimonials>

      </Section>
    </Container>
    
  );
}