import styled, { css } from 'styled-components';

const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
};

const respondTo = (size) => (content) => css`
  @media (min-width: ${breakpoints[size]}) {
    ${content}
  }
`;


export const Container = styled.header`
  max-width: 1200px;
  width: calc(100% - 40px);
  margin: auto;

  padding: 24px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  button.button-menu {
   /*  display: flex; */
   display: block;
   height: 24px;
   width: 24px;

   ${respondTo('medium')`
      display: none;
    `}
  }

  button.button-register {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};

    padding: 0 32px;
    height: 48px;
    border-radius: 8px;

    font-size: 16px;
    font-weight: 600;
  }

  h4 {
    font-size: 28px;
    color: ${({ theme }) => theme.colors.primary.main};

    cursor: pointer;
  }

  nav.nav-desktop {
    display: none;
    
    ${respondTo('medium')`
      display: flex;
      gap: 48px;
    `}

    align-items: center;

    ul {
      display: flex;
      gap: 48px;

      li {
        color: ${({ theme }) => theme.colors.gray.dark};
        cursor: pointer;

        /* border-bottom: 6px solid ${({ theme }) => theme.colors.primary.main};
        border-radius: 4px; */

        padding: 12px 2px 8px;

        transition: all 0.4s ease;

        &:hover {
          color: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }

    button.button-register {
      background-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};

      padding: 0 32px;
      height: 48px;
      border-radius: 8px;

      font-size: 16px;
      font-weight: 600;
    }
  }

  ${respondTo('small')`
    width: calc(100% - 104px);
  `}
`;

export const NavBar = styled.nav`
    background-color: #e6e6e6;
    position: fixed;
    top: 0px;

    padding: 96px 20px;
    
    //right: ${({ $isModalOpened }) => $isModalOpened ? '0px' : '-200px'};
    bottom: 0px;
    height: 100vh;

    z-index: 1000;

    transition: all 0.3s ease-out;

    button.button-close {
      position: absolute;
      top: 24px;
      right: 20px;
      padding-top: 4px;
    }

    ul {
      display: grid;
      gap: 24px;

      margin-bottom: 48px;
    }
`;