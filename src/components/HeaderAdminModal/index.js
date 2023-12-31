import { useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

import ReactDOM from 'react-dom';

import { Overlay, Container } from './styles';

import { Context } from '../../Context/AuthContext';

export default function HeaderAdminModal({ isOpened, onToggleModal, sectionSelected, onChangeSection }) {
  const { handleLogout } = useContext(Context);

  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay className='Overlay' onClick={(e => {
      const targetClassList = [...e.target.classList];
      if (targetClassList.includes('Overlay')) {
        onToggleModal();
      }
    })}>
      
      <Container>
        <button onClick={onToggleModal}>
          {/* <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.41769 5.22187L11.3674 0.272095L12.7816 1.6863L7.83189 6.63607L12.7816 11.5858L11.3674 13L6.41769 8.05027L1.46792 13L0.0537109 11.5858L5.00349 6.63607L0.0537109 1.6863L1.46792 0.272095L6.41769 5.22187Z" fill="black"/>
          </svg> */}
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00093 7.11533L15.6005 0.515625L17.4861 2.40124L10.8865 9.00093L17.4861 15.6005L15.6005 17.4861L9.00093 10.8865L2.40124 17.4861L0.515625 15.6005L7.11533 9.00093L0.515625 2.40124L2.40124 0.515625L9.00093 7.11533Z" fill="black"/>
          </svg>

        </button>

        <nav>
          <ul>
            <li 
              /* onClick={onChangeSection(1)} */
              /* onClick={() => setModalSectionSelected(1)} */
              onClick={() => onChangeSection(1)}
              className={sectionSelected === 1 ? 'selected' : ''}
            >
              <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.72727 15.0456V10.1365H12.2727V15.0456H14.7273V1.95472H3.27273V15.0456H5.72727ZM7.36364 15.0456H10.6364V11.7729H7.36364V15.0456ZM16.3636 15.0456H18V16.682H0V15.0456H1.63636V1.13654C1.63636 0.684676 2.00268 0.318359 2.45455 0.318359H15.5455C15.9973 0.318359 16.3636 0.684676 16.3636 1.13654V15.0456ZM8.18182 5.22745V3.59109H9.81818V5.22745H11.4545V6.86381H9.81818V8.50018H8.18182V6.86381H6.54545V5.22745H8.18182Z" fill="#666666"/>
              </svg>
              Minhas consultas
            </li>

            <li 
              /* onClick={onChangeSection(2)} */
              /* onClick={() => setModalSectionSelected(2)} */
              onClick={() => onChangeSection(2)}
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
        </nav>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}
