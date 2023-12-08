import { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Overlay, Container } from './styles';

import FormGroup from '../../components/FormGroup/index.js';

export default function ModalProntuario({ isOpened, children, onScroll, onToggleModal }) {

  if (!isOpened) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay className='overlay'>
      <Container>
        <button onClick={onToggleModal} className='close-button'>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.00093 7.11533L15.6005 0.515625L17.4861 2.40124L10.8865 9.00093L17.4861 15.6005L15.6005 17.4861L9.00093 10.8865L2.40124 17.4861L0.515625 15.6005L7.11533 9.00093L0.515625 2.40124L2.40124 0.515625L9.00093 7.11533Z" fill="black"/>
          </svg>

        </button>
        <h2>Prontuário</h2>

        <div className='filters__group'>
          <FormGroup  
            icon='user' 
            label='Nome e Sobrenome'
          >
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder='Digite seu nome'
            />
          </FormGroup>
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
        </div>

        <div className='filters__group'>
          <FormGroup  
            icon='user' 
            label='Sintomas'
          >
            <input 
              type="text" 
              id="cpf" 
              name="cpf" 
              placeholder='Digite seu CPF'
            />
          </FormGroup>
          <FormGroup  
            icon='map' 
            label='Alergia'
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
            icon='user' 
            label='Historico familiar'
          >
            <input 
              type="text" 
              id="cpf" 
              name="cpf" 
              placeholder='Digite seu Historico familiar'
            />
          </FormGroup>
          <FormGroup  
            icon='medicine' 
            label='Tipo sanguineo'
          >
            <input 
              type="text" 
              id="rg" 
              name="tipo_saguine" 
              placeholder='Digite seu tipo sanguineo'
            />
          </FormGroup>
        </div>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}