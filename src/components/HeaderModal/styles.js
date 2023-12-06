import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1000;
`;

export const Container = styled.div`
  height: 100%;

  overflow: auto;

  padding: 64px 32px 0px;
  box-shadow: 0px 4px 23px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  position: fixed;
  top: 0px;
  right: 0px;
  z-index: 1002;

  @keyframes minhaAnimacao {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

  button {
    position: fixed;
    top: 30px;
    right: 24px;
  }

  nav {
    margin-top: 40px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 16px;
      justify-items: center;

      li {
        padding: 0 24px;
        height: 50px;
        line-height: 40px;
        //align-self: center;
        border-left: 8px solid transparent;

        font-size: 18px;
        //font-weight: bold;

        transition: all 0.2s ease-in;

        &.selected {
          border-left: 8px solid ${({ theme }) => theme.colors.primary.main};
        }

        &:hover {
          /* font-weight: bold; */
          color: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }
  }

  @media (min-width: 992px) {
    .checkbox-label {
      font-size: 24px;
    }
  }

  @media (min-width: 1440px) {
    padding: 64px 64px 0px;

    footer {
      padding: 24px 0px; 
    }
  }
`;