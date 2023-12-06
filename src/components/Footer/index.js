import { Container } from './styles';

export default function Footer() {
  return (
    <Container>
      <div className='footer__description'>
        <div>
          <h3>Unisaúde</h3>
          {/* <p>Lorem ipsum dolor sit amet Nam quae aut quasi.</p> */}
          <p>Sua saúde merece essa conveniência!</p>
        </div>

        <div className='more-info'>
          <div>
            <h4>
              Menu
            </h4>
            <ul>
              <li><a href='/'>Home</a></li>
              <li><a href='/schedule'>Agendamento</a></li>
              <li><a href='/login'>Login</a></li>
              <li><a href='/register'>Cadastro</a></li>
            </ul>
          </div>

          <div>
            <h4>
              Contato
            </h4>
            <ul>
              <li>unisaude@contato.com.br</li>
              <li>(81) 4002-8922</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className='footer__copyright'>
        <p>© 2023 Unisaúde</p>
      </div>

    </Container>
  );
}