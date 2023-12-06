import Section from '../../components/Section.js';

import { Container, ScheduleSection, FilterContainer, DoctorsContainer, DoctorCard } from './styles.js';

import star from '../../assets/images/star.svg'
import arrowLeft from '../../assets/images/arrow-left.svg'
import arrowRight from '../../assets/images/arrow-right.svg'

import iconMoney from '../../assets/images/icon-money.svg'
import iconInsurance from '../../assets/images/icon-id.svg'
import iconLocation from '../../assets/images/icon-location.svg'

import {doctors} from '../../mocks/doctors.js';

export default function Schedule() {
  console.log({doctors})

  return (
    <Container>
      <Section /* $paddingTop='48' $paddingBottom='0' */>
          {/* <h1 style={{marginBottom: '32px'}}>Schedule</h1> */}
        <ScheduleSection>
          <FilterContainer>
            <h3>Filtros</h3>
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
            </div>
            
          </FilterContainer>
          <DoctorsContainer>
            {
              doctors.map((doctor) => (
                <DoctorCard key={doctor?.id}>
                  <div className='card__description'>
                    <div className='card__profile'>
                      {/* <img src='' alt='' /> */}
                      <div style={{
                        width: '68px',
                        height: '68px',
                        borderRadius: '100%',
                        border: '1px solid #E6E6E6',
                      }}></div>
                      <div className='profile__description'>
                        <h4>Dr. {doctor?.nome} {doctor?.sobrenome}</h4>
                        <span>{doctor?.especialidade}</span>
                        <div>
                          <img src={star} />
                          <img src={star} />
                          <img src={star} />
                          <img src={star} />
                          <img src={star} /> 
                          <span>(12)</span>
                        </div>
                      </div>
                    </div>

                    <div className='card__more-info'>
                      <ul>
                        <li>
                          <img src={iconMoney} />
                          <span>{Number(doctor?.preco_consulta)?.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})} a consulta</span>
                        </li>
                        <li>
                          <img src={iconInsurance} />
                          <span>
                            {/* Aceita convênios */}
                            {
                              doctor?.aceita_convenio === '1'
                                ? 'Aceita Convênios'
                                : 'Não Aceita Convênios'
                            }
                          </span>
                        </li>
                        <li>
                          <img src={iconLocation} />
                          <span>{doctor?.bairro}, {doctor?.cidade}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='card__schedule'>
                    <img src={arrowLeft} />
                    <div className='schedule__item'>
                      <p>Hoje</p>
                      <span>29 Nov</span>
                      <div className='hours'>
                        <button>
                          15:30
                        </button>
                        <button>
                          16:00
                        </button>
                        <button>
                          16:30
                        </button>
                      </div>
                    </div>

                    <div className='schedule__item'>
                      <p>Qui,</p>
                      <span>30 Nov</span>
                      <div className='hours'>
                        <button>
                          15:30
                        </button>
                        <button>
                          16:00
                        </button>
                        <button>
                          16:30
                        </button>
                      </div>
                    </div>

                    <div className='schedule__item'>
                      <p>Sex,</p>
                      <span>01 Dez</span>
                      <div className='hours'>
                        <button>
                          15:30
                        </button>
                        <button>
                          16:00
                        </button>
                        <button>
                          16:30
                        </button>
                      </div>
                    </div>

                    <img src={arrowRight} />
                  </div>
                </DoctorCard>
              ))
            }

            {/* <DoctorCard>
              <div className='card__description'>
                <div className='card__profile'>
                  <div style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: '100%',
                    border: '1px solid #E6E6E6',
                  }}></div>
                  <div className='profile__description'>
                    <h4>Dr. Fulano Beltrano</h4>
                    <span>Endocrinologista</span>
                    <div>
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                      <img src={star} /> 
                      <span>(12)</span>
                    </div>
                  </div>
                </div>

                <div className='card__more-info'>
                  <ul>
                    <li>
                      <img src={iconMoney} />
                      <span>R$ 250,00 a consulta</span>
                    </li>
                    <li>
                      <img src={iconInsurance} />
                      <span>Aceita convênios</span>
                     </li>
                    <li>
                      <img src={iconLocation} />
                      <span>Consolação, São Paulo</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='card__schedule'>
                <img src={arrowLeft} />
                <div className='schedule__item'>
                  <p>Hoje</p>
                  <span>29 Nov</span>
                  <div className='hours'>
                    <button>
                      15:30
                    </button>
                    <button>
                      16:00
                    </button>
                    <button>
                      16:30
                    </button>
                  </div>
                </div>

                <div className='schedule__item'>
                  <p>Qui,</p>
                  <span>30 Nov</span>
                  <div className='hours'>
                    <button>
                      15:30
                    </button>
                    <button>
                      16:00
                    </button>
                    <button>
                      16:30
                    </button>
                  </div>
                </div>

                <div className='schedule__item'>
                  <p>Sex,</p>
                  <span>01 Dez</span>
                  <div className='hours'>
                    <button>
                      15:30
                    </button>
                    <button>
                      16:00
                    </button>
                    <button>
                      16:30
                    </button>
                  </div>
                </div>

                <img src={arrowRight} />
              </div>
            </DoctorCard> */}

          </DoctorsContainer>
        </ScheduleSection>
      </Section>
    </Container>
  
  );
}