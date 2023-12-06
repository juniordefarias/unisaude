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

export const Container = styled.main`

`;

export const LoginContainer = styled.main`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;
  padding: 48px 24px;

  margin-top: 16px;  

  ${respondTo('medium')`
    padding: 64px 48px;
    margin-top: 24px;
  `}

  max-width: 600px;

  h3 {
    font-size: 32px;
    margin-bottom: 42px;

    ${respondTo('medium')`
      margin-bottom: 56px; 
    `}
  }

  .filters {
    display: grid;
    gap: 16px;

    .filters__group {
      display: grid;
      gap: 16px;

      ${respondTo('small')`
        grid-template-columns: repeat(2, 1fr);
      `}
    }

    ul {
      display: flex;
      justify-content: space-between;

      margin: calc(32px - 16px) 0 calc(24px - 16px);

      li {
        border-bottom: 2px solid #B3B3B3;

        padding-bottom: 12px;

        flex: 1;
        text-align: center;
        font-size: 18px;
        font-weight: 500;

        color: #B3B3B3;

        &.selected {
          color: ${({ theme }) => theme.colors.primary.main};
          border-color: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }
  }

  .filter {
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 16px;
    padding: 16px;

    display: flex;
    gap: 12px;

    & + & {
      margin-top: 16px;
    }

    .filter__input {
      display: flex;
      flex-direction: column;
      gap: 8px;
      
      label {
        font-weight: 500;
      }

      input {
        border: none;
        outline: none;
        font-weight: 400;

        width: 100%;
      }

      select {
        border: none;
        outline: none;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 32px;

    .button__register {
      font-size: 16px;
      font-weight: 600;

      color: ${({ theme }) => theme.colors.primary.main};
    }

    .button__login {
      padding: 0 32px;
      height: 48px;

      background-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};

      display: flex;
      align-items: center;

      font-size: 16px;
      font-weight: 600;
      
      border-radius: 8px;
    }
  }
`;