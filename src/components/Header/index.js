import { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container, NavBar } from './styles';

import HeaderModal from '../../components/HeaderModal';

export default function Footer() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const [page, setPage] = useState('');

  const { pathname } = useLocation();

  useEffect(() => {
    const pageSelected = pathname.split('/')[1];
    
    !pageSelected ? setPage('home') : setPage(pageSelected);

  }, [pathname]);

  function handleToggleModal() {
    setIsModalOpened((prevState) => (
      prevState === true ? false : true
    ))
  }

  if (page === 'admin') {
    return null;
  }

  return (
    <>
      <HeaderModal 
        isOpened={isModalOpened} 
        onToggleModal={handleToggleModal}
      />

    <Container>
      <h4><Link to='/'>Unisaúde</Link></h4>

      <button className='button-menu' onClick={handleToggleModal}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
      </button>

      <nav className='nav-desktop'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/schedule'>Agendamento</Link>
          </li>
          <li>
            <Link to='/login'>Entrar</Link>
          </li>
        </ul>

        <button className='button-register'><Link to='/register'>Cadastrar</Link></button>
      </nav>

      {/* <NavBar>
        <button className='button-menu button-close' />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </button>

        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/schedule'>Agendamento</Link></li>
            <li><Link to='/login'>Entrar</Link></li>
          </ul>

        <button className='button-register'><Link to='/register'>Cadastrar</Link></button>
      </NavBar> */}
    </Container>
    </>
  );
}