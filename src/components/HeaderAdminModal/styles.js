import styled, { css } from 'styled-components';

const breakpoints = {
  small: '576px',
  xsmall: '600px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
};

const respondTo = (size) => (content) => css`
  @media (min-width: ${breakpoints[size]}) {
    ${content}
  }
`;

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
        /* padding: 0 24px;
        height: 50px;
        line-height: 40px;
        border-left: 8px solid transparent;

        font-size: 18px; */

        border-radius: 8px;
        padding: 16px;

        display: flex;
        gap: 12px;

        font-weight: 600;

        transition: all 0.2s ease-in;

        /* &.selected {
          border-left: 8px solid ${({ theme }) => theme.colors.primary.main};
        }

        &:hover {
          color: ${({ theme }) => theme.colors.primary.main};
        } */

        color: ${({ theme }) => theme.colors.gray.dark};
        &:hover {
          background-color: ${({ theme }) => theme.colors.gray.light};
        }

        &.selected {
          background-color: ${({ theme }) => theme.colors.primary.light};
          color: ${({ theme }) => theme.colors.primary.dark};
          svg {
            path {
              fill: ${({ theme }) => theme.colors.primary.dark};
            }
          }

          &:hover {
            color: #1b438d;
            background-color: #5cb3fe;

            svg {
              path {
                fill: #1b438d;
              }
            }
          }
        }
      }
    }

    button {
      border-radius: 8px;
      padding: 16px;

      font-weight: 600;
      font-size: 16px;

      display: none;
      ${respondTo('medium')`
        display: flex;
        gap: 12px;
      `}

      transition: all 0.4s ease;

      color: #F4324A;
      svg {
        path {
          fill: #F4324A;
        }
      }

      &:hover {
        color: #9D1728;
        svg {
          path {
            fill: #9D1728;
          }
        }
        background-color: #FFC8CF;
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